import { ChildrenServiceTable } from "../../components/ui/Table";
import { Button } from "../../components/common";
import { PlusIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router";
const ChildrenService = () => {
  return (
    <div>
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
      <ChildrenServiceTable />
    </div>
  );
};

export default ChildrenService;
