const brochureLines = [
  { text: 'NEXIQUILL ACADEMY', size: 12, font: 'F2', gap: 28 },
  { text: 'PYTHON FULL STACK WITH GENERATIVE AI', size: 21, font: 'F2', gap: 30 },
  { text: 'Learn Python, React, Node.js, databases, and Generative AI through practical projects.', size: 10, font: 'F1', gap: 28 },
  { text: 'PROGRAM AT A GLANCE', size: 12, font: 'F2', gap: 20 },
  { text: 'Duration: 8-12 weeks of live learning', size: 11, font: 'F1', gap: 18 },
  { text: 'Includes live classes and recordings, real-world projects, and a certificate on completion.', size: 11, font: 'F1', gap: 18 },
  { text: 'Topics: Python, Django / FastAPI, React.js, Node.js, PostgreSQL, MongoDB, and MySQL.', size: 11, font: 'F1', gap: 18 },
  { text: 'Generative AI, LLMs, prompt engineering, LangChain, vector databases, RAG, Git, and DevOps.', size: 11, font: 'F1', gap: 18 },
  { text: 'Projects include an AI chat app, resume analyzer, RAG document Q&A, and full-stack e-commerce app.', size: 10, font: 'F1', gap: 28 },
  { text: 'FIRST-BATCH FEE', size: 12, font: 'F2', gap: 20 },
  { text: 'Regular fee: INR 33,999', size: 11, font: 'F1', gap: 18 },
  { text: 'First-batch fee: INR 14,999 (first 50 seats)', size: 11, font: 'F2', gap: 18 },
  { text: 'Upfront seat-booking fee: INR 299', size: 11, font: 'F1', gap: 18 },
  { text: 'Remaining INR 14,700 is due after receiving a paid internship offer.', size: 11, font: 'F1', gap: 28 },
  { text: 'PAID INTERNSHIP OPPORTUNITY', size: 12, font: 'F2', gap: 20 },
  { text: 'A 3-month paid internship opportunity follows the live program.', size: 11, font: 'F1', gap: 18 },
  { text: 'Advertised stipend: up to INR 15,000 per month. Internship selection and stipend depend on the offer.', size: 10, font: 'F1', gap: 18 },
  { text: 'Top performers may be considered for full-time roles in the INR 6.9-11 LPA range, subject to performance, interviews, availability, and selection criteria. No job outcome is guaranteed.', size: 9, font: 'F1', gap: 28 },
  { text: 'ENROLLMENT', size: 12, font: 'F2', gap: 20 },
  { text: 'Enrollment deadline: 10 November 2026', size: 11, font: 'F1', gap: 18 },
  { text: 'For details or assistance, contact Nexiquill on WhatsApp: +91 95053 25418', size: 11, font: 'F1', gap: 24 },
  { text: 'Course details and offer terms are subject to confirmation by Nexiquill.', size: 9, font: 'F1', gap: 0 },
];

function escapePdfText(value: string) {
  return value.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

function wrapText(value: string, limit: number) {
  const words = value.split(' ');
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > limit && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }

  if (current) {
    lines.push(current);
  }
  return lines;
}

function buildBrochure() {
  let y = 790;
  const commands = ['0.13 0.16 0.12 rg'];

  for (const line of brochureLines) {
    const wrappedLines = wrapText(line.text, line.size > 18 ? 48 : 84);
    for (const wrappedLine of wrappedLines) {
      commands.push(`BT /${line.font} ${line.size} Tf 52 ${y} Td (${escapePdfText(wrappedLine)}) Tj ET`);
      y -= 14;
    }
    y -= Math.max(0, line.gap - 14);
  }

  const stream = commands.join('\n');
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>',
    `<< /Length ${Buffer.byteLength(stream, 'ascii')} >>\nstream\n${stream}\nendstream`,
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>',
  ];

  let pdf = '%PDF-1.4\n';
  const offsets = [0];
  for (const [index, object] of objects.entries()) {
    offsets.push(Buffer.byteLength(pdf, 'ascii'));
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  }

  const xrefOffset = Buffer.byteLength(pdf, 'ascii');
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (const offset of offsets.slice(1)) {
    pdf += `${offset.toString().padStart(10, '0')} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  return Buffer.from(pdf, 'ascii');
}

export async function GET() {
  const pdf = buildBrochure();
  return new Response(new Uint8Array(pdf), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="nexiquill-python-full-stack-genai.pdf"',
      'Content-Length': String(pdf.byteLength),
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
