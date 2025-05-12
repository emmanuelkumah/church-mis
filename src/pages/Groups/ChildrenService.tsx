import { ChildrenServiceTable } from "../../components/ui/Table";
import { Button, SearchInput } from "../../components/common";
import { PlusIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router";
const ChildrenService = () => {
  const handleSearchTerm = (searchTerm: { searchTerm: string }) => {
    console.log(searchTerm);
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center ">
        <Link to="../cs/new">
          <Button
            variant="primary"
            text="Add Member"
            size="small"
            className="mb-4 cursor-pointer"
            startIcon={<PlusIcon className="h-4 w-4" />}
            onClick={() => console.log("Add Member")}
            type="button"
          />
        </Link>
        <SearchInput
          placeholder="Search for a member"
          className="my-2"
          onSearch={handleSearchTerm}
        />
      </div>

      <ChildrenServiceTable />
    </div>
  );
};

export default ChildrenService;
