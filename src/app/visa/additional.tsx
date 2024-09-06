'use client';
import { Calendar, MapPin, Home, Phone, Bell } from 'lucide-react';
import { useRouter } from 'next/navigation';

const AdditionalDetails = () => {
    const router = useRouter();

    const handlePreviousClick = () => {
        router.push('./visadoc');
    }

    const handleNextClick = () => {
        router.push('./passport');
    };
    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center" id='additional'>
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
                    <h1 className="text-2xl font-bold text-yellow-600">Additional Details</h1>
                </div>

                <div className="p-10">
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="flex items-center space-x-2 text-gray-700 mb-2">
                                    <Calendar className="w-5 h-5" />
                                    <span>Date of Arrival</span>
                                </label>
                                <input placeholder="date of arrival" type="date" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400" />
                            </div>
                            <div>
                                <label className="flex items-center space-x-2 text-gray-700 mb-2">
                                    <Calendar className="w-5 h-5" />
                                    <span>Date of Departure</span>
                                </label>
                                <input placeholder="date of departure" type="date" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400" />
                            </div>
                        </div>

                        <div>
                            <label className="flex items-center space-x-2 text-gray-700 mb-2">
                                <MapPin className="w-5 h-5" />
                                <span>Port of Entry in Sri Lanka</span>
                            </label>
                            <select title='Port' className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400">
                                <option>Select Port</option>
                                <option>Colombo Bandaranaike International Airport</option>
                                <option>Mattala Rajapaksa International Airport</option>
                            </select>
                        </div>

                        <div>
                            <label className="flex items-center space-x-2 text-gray-700 mb-2">
                                <Home className="w-5 h-5" />
                                <span>Place to Stay</span>
                            </label>
                            <select title='place' className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400">
                                <option>Select Place</option>
                                <option>Hotel</option>
                                <option>Guest House</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="flex items-center space-x-2 text-gray-700 mb-2">
                                <Home className="w-5 h-5" />
                                <span>Address in Sri Lanka</span>
                            </label>
                            <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400" placeholder="Enter Address" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="flex items-center space-x-2 text-gray-700 mb-2">
                                    <MapPin className="w-5 h-5" />
                                    <span>City/State</span>
                                </label>
                                <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400" placeholder="Enter City/State" />
                            </div>
                            <div>
                                <label className="flex items-center space-x-2 text-gray-700 mb-2">
                                    <Phone className="w-5 h-5" />
                                    <span>Contact Number in Sri Lanka</span>
                                </label>
                                <input type="tel" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400" placeholder="Enter Contact Number" />
                            </div>
                        </div>

                        <div className="flex justify-between mt-8">
                            <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg shadow-md hover:bg-gray-400 transition duration-300"

                                type="button"
                                onClick={handlePreviousClick}>
                                Previous
                            </button>
                            <button
                                type="button"
                                onClick={handleNextClick}
                                className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                            >
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
                                <div className="flex-1 h-2 bg-yellow-500 rounded-full ml-2"></div>
                                <div className="flex-1 h-2 bg-yellow-400 rounded-full ml-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdditionalDetails;
