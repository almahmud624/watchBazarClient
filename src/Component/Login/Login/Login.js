import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, saveUserToDB, handlePasswordChange, handleEmailChange, err, handleResetPassword, handleLogin } = useAuth();
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
    const handleEmailPasswordLogin = (e) => {
        e.preventDefault();
        handleLogin()
            .then(result => {
                history.push(redirectUrl);
            })
    }
    return (
        <>
            <div className="flex min-h-screen bg-white">
                <div className="md:w-1/2 max-w-lg mx-auto px-4 py-5 shadow-none">
                    <div className="text-left p-0 font-sans">
                        <h1 className=" text-gray-800 text-3xl font-medium">Hello! Please Login</h1>
                    </div>

                    <form onSubmit={handleLogin} className="p-0">
                        <div className="mt-4">
                            <input onBlur={handleEmailChange} type="email" className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="Email" />
                        </div>
                        <div className="mt-4">
                            <input onBlur={handlePasswordChange} type="password" className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  " placeholder="Password" />
                        </div>

                        {err && <span className="inline-block rounded text-left mt-3 font-medium text-red-600">{err}</span>}

                        <div className="text-right mt-3 text-gray-400">
                            <span onClick={handleResetPassword} className="cursor-pointer inline-block hover:underline hover:text-gray-900">Forgot your password?</span>
                        </div>
                        <div className="mt-4">
                            <input onClick={handleEmailPasswordLogin} type="submit" value="Login" className="py-2 bg-blue-200 text-gray-800  w-full rounded text-lg font-semibold" />
                        </div>
                    </form>
                    <div className="py-6 space-x-2">
                        <span onClick={handleGoogleLogin} className="items-center justify-center inline-flex font-bold text-lg cursor-pointer"><img alt="" className="w-8 h-8 mr-2" src="https://img.icons8.com/color/48/000000/google-logo.png" /> Log In With Google</span>
                    </div>
                    <p className="mt-3 text-sm text-center text-gray-500"> Don't have an account? <Link to="/registration" className="text-gray-800 font-medium hover:underline hover:text-gray-900">Create One </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;