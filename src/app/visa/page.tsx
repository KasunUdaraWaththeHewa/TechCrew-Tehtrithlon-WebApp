'use client';
import React from 'react';
import { Bell, Flag, Globe, FileText, Briefcase, Compass, BookOpen, Upload, Home, MapPin, Phone, Calendar } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Personal: React.FC = () => {
    const router = useRouter();
    const handleNextClick = () => {
        router.push('./visa');
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log(`Selected file: ${file.name}`);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center" id='personal'>
            <div className="bg-white shadow-lg rounded-lg p-8  max-w-3xl w-full">
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
                    <h1 className="text-2xl font-bold text-yellow-600">User Registration and Digital ID Creation</h1>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700">Email Address</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500"
                                placeholder="Johndoe@gmail.com"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700">Mobile Number</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500"
                                placeholder="+1 234 567 890"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700">Nationality</label>
                            <select title='Nationality'
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500"
                            >
                                <option>Choose your nationality</option>
                                <option>American</option>
                                <option>Canadian</option>
                                <option>British</option>
                                <option>Australian</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700">OTP Verification</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500"
                                placeholder="Enter OTP"
                            />
                            <button

                                type="button"
                                className="mt-2 text-sm text-yellow-600 hover:underline"
                            >
                                Resend OTP
                            </button>
                        </div>
                    </div>

            

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
                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-full">
                                <label className="block text-gray-700">Passport Number</label>
                                <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
                                    <label htmlFor="passportNumber" className="sr-only">Passport Number</label>
                                    <input
                                        type="text"
                                        id="passportNumber"
                                        className="w-full focus:outline-none"
                                        placeholder="Enter Passport Number"
                                    />

                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <div className="w-full">
                                <label className="block text-gray-700">Nationality</label>
                                <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
                                    <input
                                        type="text"
                                        className="w-full focus:outline-none"
                                        placeholder="Enter Nationality"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <div className="w-full">
                                <label className="block text-gray-700">Birthday</label>
                                <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
                                    <input
                                        type="date"
                                        className="w-full focus:outline-none"
                                        placeholder="Birthday"
                                    />

                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <div className="w-full">
                                <label className="block text-gray-700">National ID Number</label>
                                <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
                                    <input
                                        type="text"
                                        className="w-full focus:outline-none"
                                        placeholder="Enter National ID Number"
                                    />

                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <div className="w-full">
                                <label className="block text-gray-700">Date of Issue</label>
                                <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
                                    <input
                                        type="date"
                                        className="w-full focus:outline-none"
                                        placeholder="Enter Issued Date"
                                    />

                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <div className="w-full">
                                <label className="block text-gray-700">Date of Expire</label>
                                <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
                                    <input
                                        type="date"
                                        className="w-full focus:outline-none"
                                        placeholder="Enter Expire Date"
                                    />

                                </div>
                            </div>
                        </div>
                    </div>

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
                </form>
                <div className="flex justify-between mt-8">
                            <button
                                type="button"
                                onClick={handleNextClick}
                                className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                            >
                                Finish
                            </button>
                        </div>
            </div>
        </div>
    );
};

export default Personal;
