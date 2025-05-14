import { NewCSMemberForm } from "../../components/ui/CSGroup";
import { GoBack } from "../../components/common/button";
const NewJYMember = () => {
  return (
    <div>
      <GoBack className="mb-4 cursor-pointer  text-2xl" />
      <NewCSMemberForm />
    </div>
  );
};

export default NewJYMember;
