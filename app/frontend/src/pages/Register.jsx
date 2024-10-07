import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('')
    const [error, setError] = useState(null)
    const { register } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await register(username, email, password)
            navigate('/home')
        } catch(error) {
            setError(error.message)
        }
    }

    return (
        <div className="min-h-[90vh] bg-gray-500 flex flex-col justify-center py-12 sm:px-6 lg:px-8 ">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md z-1">
                <div className="bg-gray-900 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="sm:mx-auto sm:w-full sm:max-w-md">
                            <h2 className="mt-6 mb-12 text-center text-3xl font-extrabold text-gray-100">
                                Sign up for an account
                            </h2>
                        </div>
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-white">
                                Username
                            </label>
                            <div className="mt-1">
                                <input id="username" name="username" type="username" autoComplete="username" required
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter your username" value={username} onChange={e => setUsername(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input id="email" name="email" type="email" autoComplete="email" required
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter your email address" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-white">
                                Password
                            </label>
                            <div className="mt-1">
                                <input id="password" name="password" type="password" autoComplete="current-password" required
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                        </div>
                        {error && <div className="text-red-500 text-sm">{error}</div>}
                        <div className='flex items-center text-white pb-2'>
                            Already have an account? <Link to='/login' className='text-yellow-500 ml-2 underline'>Login</Link>
                        </div>

                        <div>
                            <button type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}