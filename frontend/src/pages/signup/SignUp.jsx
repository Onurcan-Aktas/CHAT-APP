import React from 'react';

const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto font-sans'>
            <div className='w-full p-6 rounded-xl shadow-2xl bg-gray-900/60 bg-clip-padding backdrop-filter backdrop-blur-md border border-gray-100/10'>
                <h1 className='text-3xl font-bold text-center text-gray-100'>
                    Sign Up
                    <span className='text-amber-400 drop-shadow-md'> ChatApp</span>
                </h1>

                <form className='mt-6 space-y-4'>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-300'>Full Name</span>
                        </label>
                        <input 
                            type='text' 
                            placeholder='John Doe' 
                            className='w-full input input-bordered h-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors' 
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-300'>Username</span>
                        </label>
                        <input 
                            type='text' 
                            placeholder='johndoe' 
                            className='w-full input input-bordered h-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors' 
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-300'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors'
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-300'>Confirm Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            className='w-full input input-bordered h-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors'
                        />
                    </div>

                    {/* Gender Checkbox Alanı - Düzenlenmiş Hali */}
                    <div className="px-2">
                        <label className="label p-0 mb-2">
                            <span className="text-base label-text text-gray-300">Gender</span>
                        </label>
                        <div className="flex gap-6">
                            <div className="form-control">
                                <label className="label cursor-pointer gap-2 justify-start">
                                    <input type="checkbox" className="checkbox checkbox-sm checkbox-warning border-gray-500 checked:border-amber-500 [--chkbg:theme(colors.amber.500)] [--chkfg:theme(colors.gray.900)]" />
                                    <span className="label-text text-gray-300">Male</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer gap-2 justify-start">
                                    <input type="checkbox" className="checkbox checkbox-sm checkbox-warning border-gray-500 checked:border-amber-500 [--chkbg:theme(colors.amber.500)] [--chkfg:theme(colors.gray.900)]" />
                                    <span className="label-text text-gray-300">Female</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="pt-2">
                        <a href='#' className='text-sm text-gray-400 hover:underline hover:text-amber-400 inline-block transition-colors'>
                            Already have an account?
                        </a>
                    </div>

                    <div>
                        <button className='btn btn-block btn-sm bg-amber-500 hover:bg-amber-600 text-gray-900 border-none font-bold transition-transform hover:scale-105 mt-2'>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;