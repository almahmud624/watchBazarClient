import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleMakeAdmin = (e) => {
        e.preventDefault();
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Admin made Successfully');
                    setEmail('');
                }
            })
    }
    return (
        <div>

            <div className="p-8 rounded lg:w-full block mx-auto xl:w-3/5">
                <div className="max-w-xl m-0 p-3 py-5 pt-4 bg-white rounded-sm border border-gray-100 shadow-sm">
                    <h3 className="text-3xl font-semibold mb-2">Make An Admin</h3>
                    <form onSubmit={handleMakeAdmin} className="p-0">
                        <div className="mt-4">
                            <input onBlur={handleOnBlur} type="email" className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="Email" />
                        </div>
                        <div className="mt-4">
                            <input type="submit" value="Sign up with email" className="py-2 bg-blue-200 text-gray-800  w-full rounded text-lg font-semibold" />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default MakeAdmin;