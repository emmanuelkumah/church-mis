import { Button, CardComponent } from "../../common";
import { Label, InputField } from "../../common";
import { useForm } from "react-hook-form";
import { CSFormData, csFormSchema } from "../../../types/types";
import { zodResolver } from "@hookform/resolvers/zod";
const NewCSMemberForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CSFormData>({
    resolver: zodResolver(csFormSchema),
  });

  const onSubmit = async (data: CSFormData) => {
    console.log("success", data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <CardComponent className="w-full min-h-screen sm:w-1/2 sm:min-h-[80%] shadow-theme-md ">
        <div>
          <form
            className="flex flex-col gap-4 p-4 sm:p-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="text-lg font-semibold">Add New Member</h2>
            <div>
              <Label htmlFor="firstName">First name </Label>

              <InputField
                name="firstName"
                id="firstName"
                type="text"
                placeholder="Enter first name"
                required
                register={register}
                error={errors.firstName}
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last name </Label>
              <InputField
                name="lastName"
                id="lastName"
                type="text"
                placeholder="Enter last name"
                required
                register={register}
                error={errors.lastName}
              />
            </div>
            <div>
              <Label htmlFor="dob">Date of birth </Label>
              <InputField
                name="dateOfBirth"
                id="dob"
                type="date"
                placeholder="Enter age"
                required
                register={register}
                error={errors.dateOfBirth}
              />
            </div>
            <div>
              <Label htmlFor="age">Age </Label>
              <InputField
                name="age"
                id="age"
                type="number"
                placeholder="Enter age"
                required
                register={register}
                error={errors.age}
              />
            </div>
            <div>
              <Label htmlFor="father">Father's name </Label>
              <InputField
                name="fatherName"
                id="father"
                type="text"
                placeholder="Enter father's name"
                required
                register={register}
                error={errors.fatherName}
              />
            </div>
            <div>
              <Label htmlFor="mother">Mother's name </Label>
              <InputField
                name="motherName"
                id="mother"
                type="text"
                placeholder="Enter mother's name"
                required
                register={register}
                error={errors.motherName}
              />
            </div>
            <div>
              <Label htmlFor="contact">Residence</Label>
              <InputField
                name="residence"
                id="residence"
                type="text"
                placeholder="Enter your residence"
                required
                register={register}
                error={errors.residence}
              />
            </div>
            <div>
              <Label htmlFor="contact">Contact Number</Label>
              <InputField
                name="contact"
                id="contact"
                type="number"
                placeholder="Enter contact number"
                required
                register={register}
                min="1"
                error={errors.contact}
              />
            </div>
            <Button text="Add member" type="submit" variant="primary" />
          </form>
        </div>
      </CardComponent>
    </div>
  );
};

export default NewCSMemberForm;
