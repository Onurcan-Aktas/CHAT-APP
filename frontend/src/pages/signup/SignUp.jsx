import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GenderCheckbox from './GenderCheckBox.jsx';
import useSignup from '../../hooks/useSignup.js';

const SignUp = () => {

    const [inputs,setInputs]=useState({
        fullName:'',
        username:'',
        password:'',
        confirmPassword:'',
        gender:'',

    })

    const {loading,signup}=useSignup()

    const handleCheckBoxChange=(gender)=>{
        setInputs({...inputs,gender})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await signup(inputs)

    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto font-sans'>
            <div className='w-full p-6 rounded-xl shadow-2xl bg-gray-900/60 bg-clip-padding backdrop-filter backdrop-blur-md border border-gray-100/10'>
                <h1 className='text-3xl font-bold text-center text-gray-100'>
                    Sign Up
                    <span className='text-amber-400 drop-shadow-md'> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit} className='mt-6 space-y-4'>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-300'>Full Name</span>
                        </label>
                        <input
                            type='text'
                            placeholder='John Doe'
                            className='w-full input input-bordered h-10 bg-gray-800/50 border-gray-600 text-white 
                            placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors'
                            value={inputs.fullName}
                            onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-300'>Username</span>
                        </label>
                        <input
                            type='text'
                            placeholder='johndoe'
                            className='w-full input input-bordered h-10 bg-gray-800/50 border-gray-600 text-white 
                            placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors'
                            value={inputs.username}
                            onChange={(e)=>setInputs({...inputs,username:e.target.value})}
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-300'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10 bg-gray-800/50 border-gray-600 text-white 
                            placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors'
                            value={inputs.password}
                            onChange={(e)=>setInputs({...inputs,password:e.target.value})}
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-300'>Confirm Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            className='w-full input input-bordered h-10 bg-gray-800/50 border-gray-600 text-white 
                            placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors'
                            value={inputs.confirmPassword}
                            onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
                        />
                    </div>

                    <GenderCheckbox  onCheckBoxChange={handleCheckBoxChange} selectedGender={inputs.gender}/>

                    <div className="pt-2">
                        <Link to='/login' className='text-sm text-gray-400 hover:underline hover:text-amber-400 inline-block transition-colors'>
                            Already have an account?
                        </Link>
                    </div>

                    <div>
                        <button className='btn btn-block btn-sm bg-amber-500 hover:bg-amber-600 text-gray-900 border-none font-bold transition-transform hover:scale-105 mt-2' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span>:"Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;