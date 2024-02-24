import { useEffect, useState } from "react";
import { DataTable, SortingColumn } from "@/components/ui/DataTable";
import getCustomers from "@/data/get-customers";

const columns = [
  {
    accessorKey: "id",
    header: ({ column }) => <SortingColumn column={column}>ID</SortingColumn>,
    size: 30,
    minSize: 30,
    maxSize: 30,
  },
  {
    accessorKey: "name",
    header: ({ column }) => <SortingColumn column={column}>Name</SortingColumn>,
    size: 30,
    enableResizing: true,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <SortingColumn column={column}>E-mail</SortingColumn>
    ),
  },
];

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers().then(setCustomers);
  }, []);

  return (
    <main className="p-10 flex flex-col gap-10">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-semibold">Customers</h2>
        <h3 className="text-slate-500">
          Manage your customers and keep track of its details
        </h3>
      </div>
      <DataTable columns={columns} data={customers} />
    </main>
  );
}

export default Customers;
