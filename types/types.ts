import {
  Contact,
  Gender,
  Parent,
  Prisma,
  School,
  Student,
  SubjectCategory,
  SubjectType,
  Teacher,
  Builder,
  Organizer,
  TShirtSize
} from "@prisma/client";
import { NextRequest } from "next/server";
import { Option } from "react-tailwindcss-select/dist/components/type";

// Base type
export type ContactItem = Contact;
export type ClassItem = Prisma.ClassGetPayload<{
  include: { streams: true; students: true; school: true };
}>; 
export type StreamItem = Prisma.StreamGetPayload<{
  include: { class: true; students: true };
}>;
export type ParentItem = Parent;
export type StudentItem = Student;
export type SchoolItem = School;
// export type DepartmentItem = Department;
export type DepartmentItem = Prisma.DepartmentGetPayload<{
  include: { teachers: true; subjects: true };
}>;
export type SubjectItem = Prisma.SubjectGetPayload<{
  include: { department: true };
}>;
export type SubjectCategoryEnum = SubjectCategory;
export type SubjectTypeEnum = SubjectType;
export type GenderEnum = Gender;
export type TeacherItem = Teacher;
export type UserItem = Prisma.UserGetPayload<{}>;
export type BuilderItem = Builder;
export type OrganizerItem = Organizer;

// Brief types
export type BriefDepartmentItem = Pick<DepartmentItem, "id" | "name">;
export type BriefSubjectItem = Pick<SubjectItem, "id" | "name">;

// Create types
export type  ClassCreateProps = Pick<ClassItem, "title" | "slug" | "schoolId">;
export type StreamCreateProps = Pick<StreamItem, "title" | "slug" | "classId" | "schoolId">;
export type ParentCreateProps = Omit<ParentItem, "id">; //& { profileImage: string;};
export type StudentCreateProps = Omit<StudentItem, "id"> & {
  // parentName?: string;
  // classTitle?: string;
  // streamTitle?: string;
};
export type DepartmentCreateProps = Omit<DepartmentItem, "id">;
export type SubjectCreateProps = Pick<
  SubjectItem,
  | "name"
  | "code"
  | "shortName"
  | "category"
  | "type"
  | "departmentId"
  | "departmentName"
  | "slug"
>;

export type TeacherCreateProps = Omit<TeacherItem, "id">;
export type BuilderCreateProps = Omit<BuilderItem, "id" | "createdAt" | "updatedAt" | "publishedAt">;
export type OrganizerCreateProps = Omit<OrganizerItem, "id" | "createdAt" | "updatedAt" | "publishedAt">;

export type UserCreateProps = Omit<
  UserItem,
  "id" | "createdAt" | "updatedAt" | "teacherId" | "studentId" | "parentId"
>;
export type UserLoginProps = Pick<UserItem, "email" | "password">;

// Update types (all fields optional except ID)
export type ClassUpdateProps = Partial<ClassCreateProps>;
export type StreamUpdateProps = Partial<StreamCreateProps>;

//

export type SelectOptionProps = Option;

export type TypedRequestBody<T> = Omit<NextRequest, "json"> & {
  json: () => Promise<T>;
};

//
export type StreamWithCount = StreamItem & { _count: { students: number } };
export type ClassWithCountAndStreams = ClassItem & {
  streams: StreamWithCount[];
  _count: { students: number };
};

export type SchoolResponse = Omit<SchoolItem, "createdAt" | "updatedAt">;
