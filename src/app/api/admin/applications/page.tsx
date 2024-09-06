"use client"

import React, { useState } from 'react';
import ApplicationStepper from '@/components/stepper';
import ApplicationSubmission from '@/components/admin/applicationSubmission';
import AdminNavBar from "@/components/admin/adminNavbar";
import AdminSidebar from "@/components/admin/adminSideBar";

export default function AdminApplications() {

  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { title: 'Initial Submission', status: 'submitted', date: '2024-08-01' },
    { title: 'Document Submission', status: 'pending' },
    { title: 'Approval', status: 'pending' },
    { title: 'Payment', status: 'pending' },
    { title: 'Final Approval', status: 'pending' },
    { title: 'Completion', status: 'pending' }
  ];

  const handleAccept = () => {
    // Handle the acceptance logic here
    setCurrentStep(currentStep + 1);
  };

  const handleReject = () => {
    // Handle the rejection logic here
    // Optionally, set the step status to "rejected" in stepsData
  };

  const personalInfo = {
    fullName: "John Doe",
    dob: "",
    gender: "male",
    nationality: "us",
    placeOfBirth: "us",
    maritalStatus: "single",
    residentialAddress: "123 Main St, City, Country",
    phoneNumber: "+1 234 567 8900",
    emailAddress: "johndoe@example.com",
  };

  const passportInfo = {
    passportNumber: "A1234567",
    passportIssuedDate: "",
    passportExpiryDate: "",
    countryOfIssue: "us",
    placeOfIssue: "City, Country",
  };

  const travelInfo = {
    purposeOfVisit: "tourism",
    intendedDateOfArrival: "",
    intendedDurationOfStay: "30 days",
    addressInSriLanka: "Hotel ABC, Colombo, Sri Lanka",
    previousVisits: "No previous visits",
  };


  return (
    <>
        <div className="flex h-screen">
            <AdminSidebar activeKey = "applications"/>
            <div className="flex-1 flex flex-col">
                <AdminNavBar page="Applications"/>
                <div className="flex-1 overflow-y-auto p-6">
                  <h1 className='text-3xl my-5 font-bold'>Visa Processing Flow</h1>
                  <ApplicationStepper steps={steps} currentStep={currentStep} />
                  {currentStep === 0 && (
                    <ApplicationSubmission
                      personalInfo={personalInfo}
                      passportInfo={passportInfo}
                      travelInfo={travelInfo}
                      onAccept={handleAccept}
                      onReject={handleReject}
                    />
                  )}
                </div>
            </div>
        </div>
    </>
  );
}