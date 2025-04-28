import {
  HeadingWithSubHeading,
  InputField,
  Label,
  CardComponent,
} from "../../common";
const SignUp = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div className="hidden sm:block sm:bg-red-500 sm:h-screen">
        Sign Up page content
      </div>
      <div className="col-span-3">
        <div className="grid place-items-center min-h-screen">
          <CardComponent className="w-full md:w-[80%] p-4 ">
            <form>
              <HeadingWithSubHeading
                heading="Sign Up"
                subHeading="Create an account"
              />
              <Label>Email</Label>
              <InputField type="text" />
            </form>
          </CardComponent>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
