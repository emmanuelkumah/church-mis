import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../common/table";
const BasicTable = () => {
  return (
    <div className="overflow-hidden rounded-lg bg-white">
      <div className="overflow-x-auto max-w-full">
        <Table>
          {/* Table Header */}
          <TableHeader className="bg-gray-100">
            <TableRow className="text-left text-gray-700">
              <TableCell className="p-4 font-semibold">Header 1</TableCell>
              <TableCell className="p-4 font-semibold">Header 2</TableCell>
              <TableCell className="p-4 font-semibold">Header 3</TableCell>
              <TableCell className="p-4 font-semibold">Header 4</TableCell>
            </TableRow>
          </TableHeader>
          {/* Table Boddy */}
          <TableBody>
            <TableRow className="text-gray-600 hover:bg-gray-50">
              <TableCell className="p-4">Row 1, Cell 1</TableCell>
              <TableCell className="p-4">Row 1, Cell 1</TableCell>
              <TableCell className="p-4">Row 1, Cell 1</TableCell>
              <TableCell className="p-4">Row 1, Cell 1</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BasicTable;
