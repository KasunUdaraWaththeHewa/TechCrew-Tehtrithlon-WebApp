import React from 'react';

const TermsConditions = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-yellow-600">Upload Documents</h1>
                </div>

                <ul className="space-y-4 text-lg text-gray-700">
                    <li className="flex">
                        <span className="font-bold text-yellow-500">1.</span>
                        <p className="ml-4">Your personal data is securely stored and used solely for app functionality.</p>
                    </li>
                    <li className="flex">
                        <span className="font-bold text-yellow-500">2.</span>
                        <p className="ml-4">You are responsible for providing accurate information.</p>
                    </li>
                    <li className="flex">
                        <span className="font-bold text-yellow-500">3.</span>
                        <p className="ml-4">Location services are used for safety alerts; accuracy depends on your device.</p>
                    </li>
                    <li className="flex">
                        <span className="font-bold text-yellow-500">4.</span>
                        <p className="ml-4">Emergency contacts should be regularly updated by users.</p>
                    </li>
                    <li className="flex">
                        <span className="font-bold text-yellow-500">5.</span>
                        <p className="ml-4">Cultural and legal guidelines are for general information only.</p>
                    </li>
                </ul>

                <div className="flex justify-between mt-8">
                    <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg shadow-md hover:bg-gray-400 transition duration-300">
                        Previous
                    </button>
                    <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
                        Accept & Finish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TermsConditions;
