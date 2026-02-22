import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {

    const {login,loading}=useLogin()

    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const handleSubmit=async(e)=>{
        e.preventDefault()
        await login(username,password)
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-2xl bg-gray-900/60 bg-clip-padding backdrop-filter backdrop-blur-md border border-gray-100/10'>
                <h1 className='text-3xl font-bold text-center text-gray-100'>
                    Login
                    <span className='text-amber-400 drop-shadow-md'> ChatApp</span>
                </h1>

                <form className='mt-4' onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-300'>Username</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter username'
                            className='w-full input input-bordered h-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors'
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                        />
                    </div>

                    <div className='mt-2'>
                        <label className='label'>
                            <span className='text-base label-text text-gray-300'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>

                    <Link to='/signup' className='text-sm text-gray-400 hover:underline hover:text-amber-400 mt-2 inline-block transition-colors'>
                        {"Don't"} have an account?
                    </Link>

                    <div className='mt-4'>
                        <button className='btn btn-block btn-sm bg-amber-500 hover:bg-amber-600 text-gray-900 border-none font-bold transition-transform hover:scale-105'
                        disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span>:"Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Login;