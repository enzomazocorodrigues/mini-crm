import { useEffect, useState } from "react";
import { DataTable, SortingColumn } from "@/components/ui/DataTable";
import getProducts from "@/data/get-products";
import currency from "@/utils/currency";

const columns = [
  {
    accessorKey: "id",
    header: ({ column }) => <SortingColumn column={column}>ID</SortingColumn>,
    size: 30,
    minSize: 30,
    maxSize: 30,
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <SortingColumn column={column}>Description</SortingColumn>
    ),
    size: 30,
    enableResizing: true,
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <SortingColumn column={column}>Price</SortingColumn>
    ),
    cell: ({ row }) => currency(row.getValue("price")),
  },
];

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <main className="p-10 flex flex-col gap-10">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-semibold">Products</h2>
        <h3 className="text-slate-500">
          Manage your products and keep track of its details
        </h3>
      </div>
      <DataTable columns={columns} data={products} />
    </main>
  );
}

export default Products;
