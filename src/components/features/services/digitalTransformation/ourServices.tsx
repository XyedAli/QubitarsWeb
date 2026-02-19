'use client';
import React from 'react';
import { FaCogs } from 'react-icons/fa';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  illustration?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  illustration,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-lg overflow-hidden p-6 md:p-8 gap-6 transition-transform hover:scale-105">
      {/* Left: Icon + Text */}
      <div className="flex-1 flex flex-col gap-4">
        {icon && (
          <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
            {icon}
          </div>
        )}
        <h3 className="text-white text-2xl font-semibold">{title}</h3>
        <p className="text-gray-300 text-sm md:text-base">{description}</p>
      </div>

      {/* Right: Illustration */}
      {illustration && (
        <div className="flex-1 flex items-center justify-center">
          {illustration}
        </div>
      )}
    </div>
  );
};

export default function ServicesSection() {
  return (
    <section className="bg-black py-20 px-8 md:px-20 flex flex-col gap-10">
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-10">
        Our Services
      </h2>

      <ServiceCard
        title="Custom Funnel Design and Development"
        description="We design sales funnels that match how your customers think and buy. Each page has a clear purpose and a clear next step. From lead generation funnels to full sales funnels, everything is built with conversions in mind."
        icon={<FaCogs className="text-white w-6 h-6" />}
        illustration={
          <div className="w-48 h-48 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">
            Illustration
          </div>
        }
      />

      <ServiceCard
        title="Marketing Automation"
        description="Automate your marketing workflows to save time, increase efficiency, and boost your conversions with precision-targeted campaigns."
        icon={<FaCogs className="text-white w-6 h-6" />}
        illustration={
          <div className="w-48 h-48 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            Illustration
          </div>
        }
      />

      <ServiceCard
        title="Analytics and Optimization"
        description="Analyze customer behavior and optimize your funnels to maximize conversion rates and ROI."
        icon={<FaCogs className="text-white w-6 h-6" />}
        illustration={
          <div className="w-48 h-48 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">
            Illustration
          </div>
        }
      />
    </section>
  );
}
