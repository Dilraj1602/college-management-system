import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [matchPassword, setMatchPassword] = useState(true);

    function handleShowPassword() {
        setShowPassword(!showPassword);
    }

    function handleMatchPassword() {
        if (password === confirmPassword) {
            setMatchPassword(true);
        } else {
            setMatchPassword(false);
        }
    }

    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center relative">
            <div className="w-[30%] border-2 py-10 px-10 space-y-4 rounded-lg">
                <h1 className="text-center text-2xl font-bold pb-4 font-serif">Sign up</h1>

                <div className='flex space-x-10'>
                    <div className='flex flex-col space-y-1'>
                        <label htmlFor="firstname" className="text-xl font-medium font-serif">First Name</label>
                        <input
                            type='text'
                            id='firstname'
                            name='firstname'
                            className='border-none outline-none px-3 py-2 rounded-md w-[110%]'
                            style={{ border: '1px solid #000', borderRadius: '8px' }}
                        />
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <label htmlFor="lastname" className="text-xl font-medium font-serif">Last Name</label>
                        <input
                            type='text'
                            id='lastname'
                            name='lastname'
                            className='border-none outline-none px-3 py-2 rounded-md w-[115%]'
                            style={{ border: '1px solid #000', borderRadius: '8px' }}
                        />
                    </div>
                </div>

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
                        <label htmlFor="password" className="text-xl font-medium font-serif">Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                className="border-none outline-none px-3 py-2 rounded-md w-full pr-10"
                                style={{ border: '1px solid #000', borderRadius: '8px' }}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-1 relative">
                        <label htmlFor="confirm_password" className="text-xl font-medium font-serif">Confirm Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="confirm_password"
                                name="confirm_password"
                                value={confirmPassword}
                                className="border-none outline-none px-3 py-2 rounded-md w-full pr-10"
                                style={{ border: '1px solid #000', borderRadius: '8px' }}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <div className="absolute top-3 right-3 cursor-pointer">
                                {showPassword ?
                                    <FaEyeSlash onClick={handleShowPassword} /> :
                                    <FaEye onClick={handleShowPassword} />
                                }
                            </div>
                            {
                                matchPassword ? null :
                                    <div className='absolute left-1 top-[42px] text-red-500 font-mono'>Wrong password</div>
                            }
                        </div>
                    </div>
                </div>

                <div className="pt-4 space-y-2">
                    <button
                        className="border-2 rounded-md w-[100%] py-2 font-bold text-xl font-serif"
                        onClick={handleMatchPassword}
                    >
                        Continue
                    </button>
                    <div className="text-center">Or</div>
                </div>

                <div>
                    <button className="border-2 rounded-md w-[100%] py-2 font-bold font-serif">Signup with Google</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;
