import {
  HeadingWithSubHeading,
  InputField,
  Label,
  CardComponent,
  Button,
} from "../../common";
import { Link } from "react-router";

const LoginForm = () => {
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
          <CardComponent className="w-[80%] md:w-[80%] p-4 ">
            <form>
              <HeadingWithSubHeading
                heading="Login to your account"
                subHeading="Welcome back!"
                align="center"
              />

              <Label htmlFor="email">
                <HeadingWithSubHeading heading="Email" headingSize="small" />
              </Label>
              <InputField
                type="email"
                placeholder="Enter your email address"
                required={true}
                id="email"
                name="email"
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
              />

              <Button
                text="Sign up"
                disabled={true}
                type="submit"
                className="mt-4"
              />
            </form>
            <section>
              <p className="text-center mt-4 text-gray-500">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-500 hover:underline">
                  Sign Up
                </Link>
              </p>
            </section>
          </CardComponent>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
