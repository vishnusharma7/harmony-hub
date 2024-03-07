
const Loginpage = () => {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-[500px] p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-grey-200 underline">
                   Welcome
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-200"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full  py-2 mt-2 text-gray-200 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-200"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="flex w-[100%]  py-2 mt-2 text-gray-200 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-gray-200 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-200 rounded-md hover:bg-gray-200 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-gray-200 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
  );
};

export default Loginpage;
