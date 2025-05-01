import { CardComponent } from "../../common";
import InputControl from "../../common/formControls/InputControl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { CSFormData } from "../../../types/types";
const NewCSMemberForm = () => {
  const { register, handleSubmit } = useForm<CSFormData>({});
  return (
    <div className="flex justify-center items-center h-screen">
      <CardComponent className="w-full h-full sm:w-1/2 sm:h-[80%] shadow-theme-md ">
        <div>
          <form className="flex flex-col gap-4 p-4">
            <h2 className="text-lg font-semibold">Add New Member</h2>
            <div className="flex items-center gap-4">
              <UserCircleIcon className="h-10 w-10 text-gray-300" />
              <InputControl
                name="firstName"
                id="firstName"
                type="text"
                placeholder="Enter first name"
                required
                register={register}
              />
            </div>
          </form>
        </div>
      </CardComponent>
    </div>
  );
};

export default NewCSMemberForm;
