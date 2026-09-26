import { redirect } from 'next/navigation';
import { verifyAdminSession } from '@/lib/auth';
import { prisma } from '@/lib/db';

export default async function AdminCoursesPage() {
  const admin = await verifyAdminSession();
  if (!admin) redirect('/admin/login');

  const courses = await prisma.course.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold">Courses</h1>
        <div className="mt-6 space-y-4">
          {courses.map((course: (typeof courses)[number]) => (
            <div key={course.id} className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{course.title}</h2>
                  <p className="text-sm text-slate-300">{course.status}</p>
                </div>
                <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-200">₹{course.fee}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
