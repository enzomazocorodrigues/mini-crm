import { useState } from "react"
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/Button"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table"

import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
  PaginationItem
} from "./Pagination"

function paginationInfo(table) {
  const rowsPerPage = table.getState().pagination.pageSize
  const numberOfPages = table.getPageCount()
  const pageIndex = table.getState().pagination.pageIndex
  const startRow = (pageIndex * rowsPerPage) + 1
  const endRow = (pageIndex + 1) * rowsPerPage
  const totalRows = rowsPerPage * numberOfPages

  return { startRow, endRow, totalRows }
}

export function DataTable({
  columns,
  data,
}) {
  const [sorting, setSorting] = useState([])
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  })

  const { startRow, endRow, totalRows } = paginationInfo(table)

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <Pagination className="justify-center md:justify-start">
        <PaginationContent className="flex gap-4">
          <PaginationItem>
            <PaginationPrevious
              onClick={() => table.getCanPreviousPage() && table.previousPage()}
            />
          </PaginationItem>
          <span className="text-slate-500">
            {startRow} to {endRow} of {totalRows}
          </span>
          <PaginationItem>
            <PaginationNext
              onClick={() => table.getCanNextPage() && table.nextPage()}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export function SortingColumn({ column, children }) {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {children}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  )
}
