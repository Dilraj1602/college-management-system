import { NavLink } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from "react";

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    function handleShowPassword() {
        setShowPassword(!showPassword);
    }

    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center relative">
            <div className="w-[30%] border-2 py-10 px-10 space-y-4 rounded-lg">
                <h1 className="text-center text-2xl font-bold pb-4 font-serif">Log In</h1>
                <div className="flex flex-col space-y-2 relative">
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="email" className="text-xl font-medium font-serif">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="border-none outline-none px-3 py-2 rounded-md w-full"
                            style={{ border: '1px solid #000', borderRadius: '8px' }}
                        />
                    </div>

                    <div className="flex flex-col space-y-1 relative">
                        <label htmlFor="password" className="text-xl font-semibold font-serif">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                className="border-none outline-none px-3 py-2 rounded-md w-full pr-10"
                                style={{ border: '1px solid #000', borderRadius: '8px' }}
                            />
                            <div className="absolute top-3 right-3 cursor-pointer">
                                {showPassword ? 
                                    <FaEyeSlash onClick={handleShowPassword} /> : 
                                    <FaEye onClick={handleShowPassword} />
                                }
                            </div>
                        </div>
                        <div className="absolute right-0 top-[4.4rem] text-blue-500 font-semibold
                        hover:cursor-pointer font-serif">Forgot Password?</div>
                    </div>
                </div>
                <div className="pt-4">
                    <button className="border-2 rounded-md w-[100%] py-2 font-bold text-xl font-serif">Continue</button>
                </div>
                <div className="flex space-x-1 justify-center items-center">
                    <p>New User?</p>
                    <NavLink to="/signup" className="font-bold font-serif">Signup</NavLink>
                </div>
                <div className="text-center">Or</div>
                <div>
                    <button className="border-2 rounded-md w-[100%] py-2 font-bold font-serif">Login with Google</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
