import { Flag, Globe, FileText, Briefcase, Compass, BookOpen, Bell } from 'lucide-react';

const TravelDetails = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
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
                    <h1 className="text-2xl font-bold text-yellow-600">Visa Details</h1>
                </div>

                <div className="p-10">
                    <form className="space-y-8">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="flex items-center space-x-2 text-gray-700 mb-2">
                                    <Flag className="w-5 h-5" />
                                    <span>Nationality</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400"
                                    placeholder="Enter Nationality"
                                />
                            </div>
                            <div>
                                <label className="flex items-center space-x-2 text-gray-700 mb-2">
                                    <Globe className="w-5 h-5" />
                                    <span>Country of Resident</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400"
                                    placeholder="Enter Country of Resident"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="flex items-center space-x-2 text-gray-700 mb-2">
                                    <FileText className="w-5 h-5" />
                                    <span>Visa Type</span>
                                </label>
                                <select title='visa type' className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400">
                                    <option>Select Visa Type</option>
                                    <option>Tourist Visa</option>
                                    <option>Business Visa</option>
                                    <option>Transit Visa</option>
                                </select>
                            </div>

                            <div>
                                <label className="flex items-center space-x-2 text-gray-700 mb-2">
                                    <Briefcase className="w-5 h-5" />
                                    <span>Purpose of Travel</span>
                                </label>
                                <select title='purpose' className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400">
                                    <option>Select Purpose</option>
                                    <option>Tourism</option>
                                    <option>Business</option>
                                    <option>Education</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="flex items-center space-x-2 text-gray-700 mb-2">
                                    <Compass className="w-5 h-5" />
                                    <span>Sub Visa Type</span>
                                </label>
                                <select title='sub visa' className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400">
                                    <option>Select Sub Visa Type</option>
                                    <option>Short Stay</option>
                                    <option>Long Stay</option>
                                    <option>Multiple Entry</option>
                                </select>
                            </div>

                            <div>
                                <label className="flex items-center space-x-2 text-gray-700 mb-2">
                                    <BookOpen className="w-5 h-5" />
                                    <span>Type of Travel Document</span>
                                </label>
                                <select title='travel doc' className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400">
                                    <option>Select Travel Document Type</option>
                                    <option>Passport</option>
                                    <option>Travel Document</option>
                                    <option>Diplomatic Passport</option>
                                </select>
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
                                <div className="flex-1 h-2 bg-yellow-400 rounded-full ml-2"></div>
                                <div className="flex-1 h-2 bg-gray-300 rounded-full ml-2"></div>
                                <div className="flex-1 h-2 bg-gray-300 rounded-full ml-2"></div>
                                <div className="flex-1 h-2 bg-gray-300 rounded-full ml-2"></div>
                                <div className="flex-1 h-2 bg-gray-300 rounded-full ml-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelDetails;
