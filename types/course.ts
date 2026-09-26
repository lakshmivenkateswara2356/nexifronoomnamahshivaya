export type CourseStatus = "OPEN" | "CLOSED";

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  fee: number;
  status: CourseStatus;
  duration: string;
  image: string;
  technologies: string[];
  learningOverview?: string[];
  projects?: string[];
  createdAt: Date;
  updatedAt: Date;
}
