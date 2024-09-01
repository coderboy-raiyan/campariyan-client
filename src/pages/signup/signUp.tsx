import { Button } from "@/components/ui/button";
import { useRegisterCustomerMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { ChangeEvent, FormEvent, useState } from "react";
import { TfiReload } from "react-icons/tfi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

function SignUp() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
    homeAddress: "",
  });

  const [signUp, { isLoading }] = useRegisterCustomerMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleOnChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setUserInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await signUp(userInput).unwrap();
      dispatch(
        setUser({ user: res.data.user, accessToken: res.data.accessToken })
      );
      toast("Signed up successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-2 gap-x-2 ">
      {/* image section */}
      <div>
        <img
          className="h-screen object-cover"
          src="https://login.decathlon.net/assets/side_picture-B36EUE8G.jpg"
          alt=""
        />
      </div>

      {/* form section */}
      <form
        onSubmit={handleSubmit}
        className="flex p-10 items-center flex-col space-y-4 h-screen"
      >
        {/* form header */}
        <div className="w-[80%] mb-8">
          <h1 className="text-2xl font-semibold leading-relaxed">Sign up</h1>
          <p className="text-sm font-medium text-gray-600">
            Change your preferences, review and track orders, get service and
            more.
          </p>
        </div>

        <div className="w-[80%] flex space-x-2">
          <label htmlFor="name">
            <p className=" text-gray-500">Name</p>
            <input
              type="text"
              required
              className="border-gray-800 border w-full p-2"
              name="name"
              placeholder="Jhon Doe"
              value={userInput?.name}
              onChange={handleOnChange}
            />
          </label>

          <label htmlFor="phoneNo">
            <p className=" text-gray-500">Phone No</p>
            <input
              type="text"
              required
              className="border-gray-800 border w-full p-2"
              name="phoneNo"
              placeholder="+880"
              value={userInput?.phoneNo}
              onChange={handleOnChange}
            />
          </label>
        </div>
        <label className="w-[80%]" htmlFor="email">
          <p className=" text-gray-500">Email</p>
          <input
            type="email"
            required
            className="border-gray-800 border w-full p-2"
            name="email"
            placeholder="example@mail.com"
            value={userInput?.email}
            onChange={handleOnChange}
          />
        </label>
        <label className="w-[80%]" htmlFor="password">
          <p className=" text-gray-500">Password</p>
          <input
            className="border-gray-800 border w-full p-2"
            type="password"
            name="password"
            required
            placeholder="Enter a strong password"
            value={userInput?.password}
            onChange={handleOnChange}
          />
        </label>
        <label className="w-[80%]" htmlFor="homeAddress">
          <p className=" text-gray-500">Home Address</p>
          <input
            className="border-gray-800 border w-full p-2"
            type="text"
            name="homeAddress"
            required
            placeholder="Uttara Dhaka"
            value={userInput?.homeAddress}
            onChange={handleOnChange}
          />
        </label>
        {isLoading ? (
          <Button disabled className="w-[80%] bg-[#3643ba]">
            <TfiReload className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button type="submit" className="w-[80%] py-2 bg-[#3643ba]">
            Continue
          </Button>
        )}

        <div className="w-[80%]">
          <p className="text-sm font-medium text-gray-700">
            Already have an account?
          </p>
          <Link className="text-sm text-gray-700 underline" to="/sign-in">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
