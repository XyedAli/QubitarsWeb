// components/DevOpsSection.jsx
import React from "react";

const services = [
  { title: "DevOps Consulting", icon: "/icons/devops.svg" },
  { title: "CI/CD Pipelines", icon: "/icons/cicd.svg" },
  { title: "DevSecOps", icon: "/icons/devsecops.svg" },
  { title: "Cloud Management", icon: "/icons/cloud.svg" },
  { title: "DevOps Implementation", icon: "/icons/implementation.svg" },
  { title: "Containerization", icon: "/icons/container.svg" },
];

const tags = [
  "DevOps Strategy",
  "Maturity Audit",
  "Roadmap Planning",
  "Process Optimization",
  "Architecture Design",
  "Readiness Assessment",
];

const DevOpsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-sm font-semibold text-orange-600 uppercase mb-2">
          DevOps Services
        </h2>
        <h1 className="text-3xl font-bold text-gray-900 mb-12">
          Modernize <span className="text-orange-600">Cloud Operations</span>{" "}
          Efficiently
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Service Cards */}
          <div className="grid grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12 mb-4"
                />
                <h3 className="text-center font-medium text-gray-900">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              DevOps Consulting
            </h3>
            <p className="text-gray-600 mb-6">
              We assess your current workflows, define adoption roadmaps,
              design scalable architectures, and guide your transition toward
              mature, high-performing DevOps practices.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Button */}
            <button className="inline-flex items-center px-6 py-2 border border-orange-600 text-orange-600 font-medium rounded hover:bg-orange-50 transition">
              Get In Touch <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsSection;