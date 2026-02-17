const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-2xl bg-gray-900/60 bg-clip-padding backdrop-filter backdrop-blur-md border border-gray-100/10'>
                <h1 className='text-3xl font-bold text-center text-gray-100'>
                    Login
                    <span className='text-amber-400 drop-shadow-md'> ChatApp</span>
                </h1>

                <form className='mt-4'>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-300'>Username</span>
                        </label>
                        <input 
                            type='text' 
                            placeholder='Enter username' 
                            className='w-full input input-bordered h-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors' 
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
                        />
                    </div>
                    
                    <a href='#' className='text-sm text-gray-400 hover:underline hover:text-amber-400 mt-2 inline-block transition-colors'>
                        {"Don't"} have an account?
                    </a>

                    <div className='mt-4'>
                        <button className='btn btn-block btn-sm bg-amber-500 hover:bg-amber-600 text-gray-900 border-none font-bold transition-transform hover:scale-105'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Login;