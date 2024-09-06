"use client";

import React from 'react';
import { Form, Input, Select, Button, Row, Col, Modal, DatePicker } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

interface ApplicationSubmissionProps {
    personalInfo: {
        fullName: string;
        dob: string;
        gender: string;
        nationality: string;
        placeOfBirth: string;
        maritalStatus: string;
        residentialAddress: string;
        phoneNumber: string;
        emailAddress: string;
    };
    passportInfo: {
        passportNumber: string;
        passportIssuedDate: string;
        passportExpiryDate: string;
        countryOfIssue: string;
        placeOfIssue: string;
    };
    travelInfo: {
        purposeOfVisit: string;
        intendedDateOfArrival: string;
        intendedDurationOfStay: string;
        addressInSriLanka: string;
        previousVisits: string;
    };
    onAccept: () => void;
    onReject: (remark: string) => void;
}

const ApplicationSubmission: React.FC<ApplicationSubmissionProps> = ({ personalInfo, passportInfo, travelInfo, onAccept, onReject }) => {
    const handleAccept = () => {
        Modal.confirm({
            title: 'Confirm Details',
            icon: <ExclamationCircleOutlined />,
            content: 'Are you sure you want to confirm the details?',
            onOk: onAccept,
        });
    };

    const handleReject = () => {
        Modal.confirm({
            title: 'Reject Application',
            icon: <ExclamationCircleOutlined />,
            content: (
                <Form.Item label="Remark">
                    <Input.TextArea rows={4} />
                </Form.Item>
            ),
            onOk: (remark) => onReject(remark),
        });
    };

    return (
        <Form layout="vertical">
            <div className="flex justify-end mt-6">
                <Button type="primary" className="mr-2 bg-green-500 hover:bg-green-600 text-white border-none" onClick={handleAccept}>
                    Accept
                </Button>
                <Button danger onClick={handleReject}>
                    Reject
                </Button>
            </div>
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <Row gutter={16}>
                <Col span={8}>
                    <Form.Item label="Full Name (as per passport)">
                        <Input size="large" value={personalInfo.fullName} disabled />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Date of Birth">
                        <DatePicker size="large" value={personalInfo.dob} disabled className="w-full" />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Gender">
                        <Select size="large" value={personalInfo.gender} disabled>
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                            <Option value="other">Other</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={8}>
                    <Form.Item label="Nationality">
                        <Select size="large" value={personalInfo.nationality} disabled>
                            <Option value="us">United States</Option>
                            <Option value="lk">Sri Lanka</Option>
                            {/* Add more options */}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Place of Birth">
                        <Select size="large" value={personalInfo.placeOfBirth} disabled>
                            <Option value="us">United States</Option>
                            <Option value="lk">Sri Lanka</Option>
                            {/* Add more options */}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Marital Status">
                        <Select size="large" value={personalInfo.maritalStatus} disabled>
                            <Option value="single">Single</Option>
                            <Option value="married">Married</Option>
                            {/* Add more options */}
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={8}>
                    <Form.Item label="Residential Address">
                        <Input size="large" value={personalInfo.residentialAddress} disabled />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Phone Number">
                        <Input size="large" value={personalInfo.phoneNumber} disabled />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Email Address">
                        <Input size="large" value={personalInfo.emailAddress} disabled />
                    </Form.Item>
                </Col>
            </Row>

            <h3 className="text-lg font-semibold mb-4">Passport Information</h3>
            <Row gutter={16}>
                <Col span={8}>
                    <Form.Item label="Passport Number">
                        <Input size="large" value={passportInfo.passportNumber} disabled />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Passport Issued Date">
                        <DatePicker size="large" value={passportInfo.passportIssuedDate} disabled className="w-full" />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Passport Expiry Date">
                        <DatePicker size="large" value={passportInfo.passportIssuedDate} disabled className="w-full" />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={8}>
                    <Form.Item label="Country of Issue">
                        <Select size="large" value={passportInfo.countryOfIssue} disabled>
                            <Option value="us">United States</Option>
                            <Option value="lk">Sri Lanka</Option>
                            {/* Add more options */}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Place of Issue">
                        <Input size="large" value={passportInfo.placeOfIssue} disabled />
                    </Form.Item>
                </Col>
            </Row>

            <h3 className="text-lg font-semibold mb-4">Travel Information</h3>
            <Row gutter={16}>
                <Col span={8}>
                    <Form.Item label="Purpose of Visit">
                        <Select size="large" value={travelInfo.purposeOfVisit} disabled>
                            <Option value="tourism">Tourism</Option>
                            <Option value="business">Business</Option>
                            {/* Add more options */}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Intended Date of Arrival">
                        <DatePicker size="large" value={travelInfo.intendedDateOfArrival} disabled className="w-full" />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Intended Duration of Stay">
                        <Input size="large" value={travelInfo.intendedDurationOfStay} disabled />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={8}>
                    <Form.Item label="Address in Sri Lanka">
                        <Input size="large" value={travelInfo.addressInSriLanka} disabled />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Previous Visits">
                        <Input size="large" value={travelInfo.previousVisits} disabled />
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

export default ApplicationSubmission;
