function paginationInfo(table) {
  const rows = table.getPaginationRowModel().rows.length;
  const totalRows = table.getFilteredRowModel().rows.length;
  const rowsPerPage = table.getState().pagination.pageSize;
  const pageIndex = table.getState().pagination.pageIndex;

  const startRow = rowsPerPage * pageIndex + Number(!!rows);
  const endRow = rowsPerPage * pageIndex + rows;

  return { startRow, endRow, totalRows };
}

export default paginationInfo;
