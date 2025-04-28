import {
  HeadingWithSubHeading,
  InputField,
  Label,
  CardComponent,
  Button,
} from "../../common";
import { Link } from "react-router";
const SignUp = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div className="hidden sm:block sm:bg-red-500 sm:h-screen  md:p-6 md:flex md:flex-col md:justify-center md:items-center">
        <HeadingWithSubHeading
          heading="Welcome to Liberty CMS"
          subHeading="Stay up to date with congregants"
          color="light"
        />
      </div>
      <div className="col-span-3">
        <div className="grid place-items-center min-h-screen">
          <CardComponent className="w-full md:w-[80%] p-4 ">
            <form>
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
                    id="fullname"
                    className="w-1/2"
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
              />
              <Label htmlFor="password">
                <HeadingWithSubHeading heading="Password" headingSize="small" />
              </Label>
              <InputField
                type="password"
                placeholder="Enter password"
                required={true}
                id="password"
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
                id="confirmPassword"
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
