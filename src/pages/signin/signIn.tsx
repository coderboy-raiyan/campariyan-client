import { Button } from "@/components/ui/button";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

function SignIn() {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
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
      console.log(userInput);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-2 gap-x-2">
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
        className="flex mt-10 p-10 items-center flex-col space-y-4"
      >
        {/* form header */}
        <div className="w-[80%] mb-8">
          <h1 className="text-2xl font-semibold leading-relaxed">Login</h1>
          <p className="text-sm font-medium text-gray-600">
            Change your preferences, review and track orders, get service and
            more.
          </p>
        </div>

        <label className="w-[80%]" htmlFor="email">
          <p className=" text-gray-500">Email</p>
          <input
            type="text"
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

        <Button className="w-[80%] py-2 bg-[#3643ba]">Continue</Button>

        <div className="w-[80%]">
          <p className="text-sm font-medium text-gray-700">
            Don’t have a Decathlon account?
          </p>
          <Link className="text-sm text-gray-700 underline" to="/sign-up">
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
