import { getAllBuilders } from "@/actions/builders";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import DataTable from "@/components/DataTableComponents/DataTable";

export default async function BuildersPage() {
  const builder = (await getAllBuilders()) || [];

  console.log("Builders: ", builder);

  return (
    <div className="p-8">
      <TableHeader
        title="Builders"
        linkTitle="Add Builder"
        href="/dashboard/competitions/builders/new"
        data={builder}
        model="builder"
      />
    </div>
  );
}
