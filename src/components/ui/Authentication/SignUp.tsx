import {
  HeadingWithSubHeading,
  InputField,
  Label,
  CardComponent,
  Button,
} from "../../common";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { FormData } from "../../../types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../../../types/types";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = async (data: FormData) => {
    console.log(data);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div className="hidden sm:block sm:bg-red-500 sm:min-h-screen  md:p-6 md:flex md:flex-col md:justify-center md:items-center">
        <HeadingWithSubHeading
          heading="Welcome to Liberty CMS"
          subHeading="Stay up to date with congregants"
          color="light"
        />
      </div>
      <div className="col-span-3">
        <Link to={"/"} className="flex items-center p-4">
          <Button text="Go Back" />
        </Link>

        <div className="grid place-items-center min-h-screen">
          <CardComponent className="w-[80%] p-4 ">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <HeadingWithSubHeading
                heading="Get Started"
                subHeading="Create an account"
                align="center"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstname">
                    <HeadingWithSubHeading
                      heading="First name"
                      headingSize="small"
                    />
                  </Label>
                  <InputField
                    type="text"
                    placeholder="Enter your first name "
                    required={true}
                    id="firstname"
                    className="w-1/2"
                    name="firstName"
                    register={register}
                    error={errors.firstName}
                    success={!!errors.firstName}
                  />
                </div>
                <div>
                  <Label htmlFor="lastname">
                    <HeadingWithSubHeading
                      heading="Last name"
                      headingSize="small"
                    />
                  </Label>
                  <InputField
                    type="text"
                    placeholder="Enter your last name "
                    required={true}
                    id="lastname"
                    name="lastName"
                    register={register}
                    error={errors.lastName}
                  />
                </div>
              </div>

              <Label htmlFor="email">
                <HeadingWithSubHeading heading="Email" headingSize="small" />
              </Label>
              <InputField
                type="email"
                placeholder="Enter your email address"
                required={true}
                id="email"
                name="email"
                register={register}
                error={errors.email}
              />
              <Label htmlFor="password">
                <HeadingWithSubHeading heading="Password" headingSize="small" />
              </Label>
              <InputField
                type="password"
                placeholder="Enter password"
                required={true}
                id="password"
                name="password"
                register={register}
                error={errors.password}
                hint="Use at least 8 characters with a mix of letters, numbers & symbols"
              />
              <Label htmlFor="confirmPassword">
                <HeadingWithSubHeading
                  heading="Confirm Password"
                  headingSize="small"
                />
              </Label>
              <InputField
                type="password"
                placeholder="Confirm password"
                required={true}
                register={register}
                error={errors.confirmPassword}
                id="confirmPassword"
                name="confirmPassword"
              />
              <Button
                text="Sign up"
                disabled={false}
                type="submit"
                className="mt-4"
                isSubmitting={isSubmitting}
              />
            </form>
            <section>
              <p className="text-center mt-4 text-gray-500">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500 hover:underline">
                  Sign in
                </Link>
              </p>
            </section>
          </CardComponent>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
