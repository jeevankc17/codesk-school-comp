import { getAllOrganizers } from "@/actions/organizers";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import DataTable from "@/components/DataTableComponents/DataTable";

export default async function OrganizersPage() {
  const organizers = (await getAllOrganizers()) || [];

  return (
    <div className="p-8">
      <TableHeader
        title="Organizers"
        linkTitle="Add Organizer"
        href="/dashboard/competitions/organizers/new"
        data={organizers}
        model="organizer"
      />
    </div>
  );
}
