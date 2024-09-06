'use client';
import React from 'react';
import { Upload, Bell } from 'lucide-react';

const UploadDocuments = () => {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log(`Selected file: ${file.name}`);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
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
                    <h1 className="text-2xl font-bold text-yellow-600">Upload Documents</h1>
                    <p className="text-sm text-gray-600 mt-2">Supported File Formats: pdf, png, jpg</p>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 gap-6">
                        {['Passport Bio Page', 'Invitation Letter', 'Additional Documents'].map((label) => (
                            <div key={label} className="flex items-center space-x-3">
                                <div className="w-full">
                                    <label className="block text-gray-700">{label}</label>
                                    <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
                                        <input
                                            type="file"
                                            className="w-full focus:outline-none"
                                            onChange={handleFileChange}
                                            placeholder='Choose File'
                                        />
                                        <Upload className="text-gray-500 ml-2" />
                                    </div>
                                </div>
                            </div>
                        ))}
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
                            <div className="flex-1 h-2 bg-yellow-400 rounded-full ml-2"></div>
                            <div className="flex-1 h-2 bg-gray-300 rounded-full ml-2"></div>
                            <div className="flex-1 h-2 bg-gray-300 rounded-full ml-2"></div>
                            <div className="flex-1 h-2 bg-gray-300 rounded-full ml-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadDocuments;
