import React from 'react';
import { Steps } from 'antd';
import { InfoCircleOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

interface Step {
  title: string;
  status: 'pending' | 'submitted' | 'approved' | 'rejected';
  date?: string;
}

interface ApplicationStepperProps {
  steps: Step[];
  currentStep: number;
}

const ApplicationStepper: React.FC<ApplicationStepperProps> = ({ steps, currentStep }) => {
  const getIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircleOutlined />;
      case 'rejected':
        return <CloseCircleOutlined />;
      default:
        return <InfoCircleOutlined />;
    }
  };

  const getStatusClass = (status: string, isActive: boolean) => {
    if (status === 'approved') return 'text-green-500';
    if (status === 'rejected') return 'text-red-500';
    if (isActive) return 'text-orange-50 text-md';
    return 'text-gray-400';
  };

  return (
    <div className="w-full">
      <Steps direction="horizontal" current={currentStep}>
        {steps.map((step, index) => {
          const isActive = currentStep === index;
          const statusClass = getStatusClass(step.status, isActive);

          return (
            <Steps.Step
              key={index}
              title={<span className={`font-semibold ${statusClass}`}>{step.title}</span>}
              icon={<span className={statusClass}>{getIcon(step.status)}</span>}
              description={
                <div className="flex flex-col">
                  {step.date && <span className="text-xs text-gray-500">{step.date}</span>}
                  <span className={`text-xs ${statusClass}`}>{step.status}</span>
                </div>
              }
            />
          );
        })}
      </Steps>
    </div>
  );
};

export default ApplicationStepper;
