import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

function LoginPage() {

    const navigate = useNavigate();
  
  const [username, setUsername] = React.useState("");

  function handleSubmit () {
    if (username) {
        navigate(`/chat/${username}`);
    }
  }

  return (
    <Layout>
      <form className="w-full max-w-sm flex flex-col space-y-6">
        <div className="flex flex-col items-center mb-6 space-y-6">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="username"
          >
            Type the username please
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-700"
            id="username"
            type="text"
            placeholder="Please Enter Your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3 flex justify-center items-center">
            <button
              className="self-center shadow bg-blue-700 hover:bg-white hover:text-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-[200px]"
              type="button"
              onClick={handleSubmit}
            >
              Log in
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default LoginPage;
