import { getAllClasses } from "@/actions/classes";
import { getServerUser } from "@/actions/auth";
import { redirect } from "next/navigation";
import ClassListing from "@/components/dashboard/class-listing";

export default async function AcademicsClassesPage() {
  const [classes, user] = await Promise.all([
    getAllClasses(),
    getServerUser()
  ]);

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="">
      <ClassListing classes={classes} user={user} />
    </div>
  );
}
