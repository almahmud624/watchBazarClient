import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Registration = () => {
    const { handleNameChange, handleEmailChange, handlePasswordChange, handleRegistration, err, signInUsingGoogle, saveUserToDB } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                const user = result.user;
                saveUserToDB(user.email, user.displayName, 'PUT');
                history.push(redirectUrl);
            })
    }
    return (
        <>
            <div className="flex min-h-screen bg-white">
                <div className="md:w-1/2 max-w-lg mx-auto px-4 py-5 shadow-none">

                    <div className="text-left p-0 font-sans">
                        <h1 className=" text-gray-800 text-3xl font-medium">Create an account for free</h1>
                    </div>
                    <form onSubmit={handleRegistration} className="p-0">
                        <div className="mt-5">
                            <input onBlur={handleNameChange} type="text" className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="Name" />
                        </div>
                        <div className="mt-4">
                            <input onBlur={handleEmailChange} type="email" className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="Email" />
                        </div>
                        <div className="mt-4">
                            <input onBlur={handlePasswordChange} type="password" className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  " placeholder="Password" />
                        </div>

                        {err && <span className="inline-block rounded text-left mt-3 font-medium text-red-600">{err}</span>}

                        <div className="mt-10">
                            <input onClick={handleRegistration} type="submit" value="Sign up with email" className="py-2 bg-blue-200 text-gray-800  w-full rounded text-lg font-semibold" />
                        </div>
                    </form>
                    <div>
                        <span className="block my-6 mb-2 text-xl font-semibold text-gray-500 ">Or</span>
                    </div>
                    <div className="space-x-2">
                        <span onClick={handleGoogleLogin} className="items-center justify-center inline-flex font-bold text-lg cursor-pointer"><img alt="" className="w-8 h-8 mr-2" src="https://img.icons8.com/color/48/000000/google-logo.png" /> Sign up With Google</span>
                    </div>
                    <Link className="" to="/login" data-test="Link"><span className="block  m-5 hover:underline text-center text-gray-800  text-sm ">Already have an account?</span></Link>
                </div>
            </div>
        </>
    );
};

export default Registration;