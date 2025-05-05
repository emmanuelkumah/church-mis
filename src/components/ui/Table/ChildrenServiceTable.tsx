import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../common/table";
import { CSTableData } from "../../../data/GenerationalGroups";
import { GoBack } from "../../common/button";
import { Paginate } from "../../common";
import { BiEdit, BiTrash } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
import { Modal } from "../../common";

interface CSTTableDateProps {
  id: number;
  image?: string;
  firstName: string;
  LastName: string;
  DateOfBirth: string;
  Age: number;
  fatherName: string;
  motherName: string;
  contact?: string;
  residence: string;
}

// Define the table data using the interface
const tableData: CSTTableDateProps[] = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    firstName: "John",
    LastName: "Doe",
    DateOfBirth: "2000-01-01",
    Age: 23,
    fatherName: "Michael Doe",
    motherName: "Sarah Doe",

    contact: "123-456-7890",
    residence: "123 Main St, City, Country",
  },
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    firstName: "John",
    LastName: "Doe",
    DateOfBirth: "2000-01-01",
    Age: 23,
    fatherName: "Michael Doe",
    motherName: "Sarah Doe",

    contact: "123-456-7890",
    residence: "123 Main St, City, Country",
  },
];
const ChildrenServiceTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Number of items per page
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalItems = Math.ceil(tableData.length / itemsPerPage); // Total number of items (replace with your data length)

  const currentData = CSTableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  console.log("currentPage", currentPage);
  const goToPage = (page: number) => {
    return setCurrentPage((prevPage) => prevPage + page);
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Delete Member"
      >
        Are you sure you want to delete?
      </Modal>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Picture
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  First name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Last name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Date of Birth
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Age
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Father's name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Mother's name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Contact
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Residence
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {currentData.map((data) => (
                <TableRow key={data.id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 overflow-hidden rounded-full">
                        <img
                          width={40}
                          height={40}
                          src={data.image}
                          alt={data.image}
                        />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {data.firstName}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {data.lastName}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {data.dateOfBirth}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {data.age}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {data.fathersName}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {data.mothersName}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {data.contact}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {data.residence}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <BiEdit className="text-green-700 hover:text-green-300 cursor-pointer" />
                      <BiTrash
                        className="text-red-600 hover:text-red-400  cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                      />
                      <FaUser className="cursor-pointer" />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Paginate
          className="flex items-center justify-between px-4 py-3 sm:px-6"
          currentPage={currentPage}
          onPageChange={goToPage}
          totalItems={totalItems} // Pass the total number of items
        />
      </div>
    </div>
  );
};

export default ChildrenServiceTable;
