import React from 'react';
import { Bell } from 'lucide-react';

const VisaOne = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
                <div className="relative mb-4">
                    <img
                        src="/assets/images/topbar.png"
                        alt="background"
                        className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4">
                        <div className="text-white">
                            <p className="text-2xl font-bold">Ayubowan John</p>
                        </div>
                        <div>
                            <Bell className="text-white w-6 h-6" />
                        </div>
                    </div>
                </div>
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-yellow-600">Contact Details</h1>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500"
                                placeholder="Johndoe@gmail.com"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700">Country Code</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500"
                                placeholder="+94"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700">Phone Number</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500"
                                placeholder="1234567890"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700">WhatsApp Number</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500"
                                placeholder="1234567890"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700">Facebook Link</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500"
                                placeholder="https://facebook.com/username"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700">Twitter Link</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500"
                                placeholder="https://twitter.com/username"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700">Instagram Link</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500"
                                placeholder="https://instagram.com/username"
                            />
                        </div>
                    </div>

                    <div className="flex justify-between mt-8">
                        <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg shadow-md hover:bg-gray-400 transition duration-300">
                            Previous
                        </button>
                        <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
                            Next
                        </button>
                    </div>
                </form>
                <div className="flex justify-center mt-8">
                    <div className="w-full max-w-md">
                        <div className="flex items-center">
                            <div className="flex-1 h-2 bg-yellow-500 rounded-full ml-2"></div>
                            <div className="flex-1 h-2 bg-yellow-500 rounded-full ml-2"></div>
                            <div className="flex-1 h-2 bg-yellow-500 rounded-full ml-2"></div>
                            <div className="flex-1 h-2 bg-yellow-500 rounded-full ml-2"></div>
                            <div className="flex-1 h-2 bg-yellow-300 rounded-full ml-2"></div>
                            <div className="flex-1 h-2 bg-gray-300 rounded-full ml-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisaOne;
