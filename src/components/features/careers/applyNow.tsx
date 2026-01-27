"use client";

import { useState } from "react";
import { Upload, X, Plus, Linkedin } from "lucide-react";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { Button } from "@/components/shared/ui";

interface FormData {
  // Resume
  resume: File | null;

  // Basic Info
  title: string;
  fullName: string;
  lastName: string;
  email: string;
  mobile: string;

  // Address Information
  street: string;
  zipCode: string;
  city: string;
  state: string;
  country: string;

  // Professional Details
  skillSet: string[];
  preferredDepartment: string[];

  // Educational Information
  graduationYear: string;
  cgpa: string;

  // Additional Information
  additionalInfo: Array<{
    id: number;
    preferredWorkLocation: string;
    graduatingYear: string;
    cgpa: string;
  }>;

  // Experience Details
  experience: Array<{ id: number; company: string; position: string; duration: string }>;

  // Social Links
  linkedin: string;
}

const ApplyNow = () => {
  const [formData, setFormData] = useState<FormData>({
    resume: null,
    title: "",
    fullName: "",
    lastName: "",
    email: "",
    mobile: "",
    street: "",
    zipCode: "",
    city: "",
    state: "",
    country: "",
    skillSet: [],
    preferredDepartment: [],
    graduationYear: "",
    cgpa: "",
    additionalInfo: [],
    experience: [],
    linkedin: "",
  });

  const [dragging, setDragging] = useState(false);
  const [skillInput, setSkillInput] = useState("");
  const [departmentInput, setDepartmentInput] = useState("");

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && (file.type === "application/pdf" || file.type.includes("msword") || file.type === "application/rtf" || file.type === "application/vnd.oasis.opendocument.text")) {
      setFormData(prev => ({ ...prev, resume: file }));
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, resume: file }));
    }
  };

  const removeFile = () => {
    setFormData(prev => ({ ...prev, resume: null }));
  };

  const addSkill = () => {
    if (skillInput.trim() && !formData.skillSet.includes(skillInput.trim())) {
      setFormData(prev => ({
        ...prev,
        skillSet: [...prev.skillSet, skillInput.trim()],
      }));
      setSkillInput("");
    }
  };

  const removeSkill = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skillSet: prev.skillSet.filter(s => s !== skill),
    }));
  };

  const addDepartment = () => {
    if (departmentInput.trim() && formData.preferredDepartment.length < 2 && !formData.preferredDepartment.includes(departmentInput.trim())) {
      setFormData(prev => ({
        ...prev,
        preferredDepartment: [...prev.preferredDepartment, departmentInput.trim()],
      }));
      setDepartmentInput("");
    }
  };

  const removeDepartment = (dept: string) => {
    setFormData(prev => ({
      ...prev,
      preferredDepartment: prev.preferredDepartment.filter(d => d !== dept),
    }));
  };

  const addAdditionalInfo = () => {
    setFormData(prev => ({
      ...prev,
      additionalInfo: [...prev.additionalInfo, { 
        id: Date.now(), 
        preferredWorkLocation: "",
        graduatingYear: "",
        cgpa: ""
      }],
    }));
  };

  const removeAdditionalInfo = (id: number) => {
    setFormData(prev => ({
      ...prev,
      additionalInfo: prev.additionalInfo.filter(item => item.id !== id),
    }));
  };

  const updateAdditionalInfo = (id: number, field: "preferredWorkLocation" | "graduatingYear" | "cgpa", value: string) => {
    setFormData(prev => ({
      ...prev,
      additionalInfo: prev.additionalInfo.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    }));
  };

  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experience: [...prev.experience, { id: Date.now(), company: "", position: "", duration: "" }],
    }));
  };

  const removeExperience = (id: number) => {
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id),
    }));
  };

  const updateExperience = (id: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const clearSection = (section: keyof FormData) => {
    if (section === "skillSet") {
      setFormData(prev => ({ ...prev, skillSet: [] }));
    } else if (section === "preferredDepartment") {
      setFormData(prev => ({ ...prev, preferredDepartment: [] }));
    } else if (section === "additionalInfo") {
      setFormData(prev => ({ ...prev, additionalInfo: [] }));
    } else if (section === "experience") {
      setFormData(prev => ({ ...prev, experience: [] }));
    } else {
      setFormData(prev => ({ ...prev, [section]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleCancel = () => {
    // Reset form or navigate away
    window.history.back();
  };

  return (
    <section className={`bg-white ${styles.sectionPadding} py-12 md:py-16 lg:py-20`}>
      <div className="">
        {/* Title */}
        <SectionHeading
          subtitle="Apply Now"
          title="Shape Your Career Path"
        />
        <form onSubmit={handleSubmit} className="space-y-8 md:space-y-3">
          {/* Resume Upload Section */}
          <div className="space-y-3">
            <h2 className={`${styles.h5} font-semibold text-blue font-outfit`}>
              Upload your resume/cv in seconds
            </h2>
            <div
              className={`border-2 border-dashed rounded-lg p-8 md:p-12 text-center transition-colors ${dragging ? "border-accent bg-accent/5" : "border-gray-300 hover:border-gray-400"
                }`}
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={handleFileDrop}
            >
              {formData.resume ? (
                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Upload className="w-5 h-5 text-accent" />
                    <span className="text-sm md:text-base font-inter">{formData.resume.name}</span>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="text-gray-500 hover:text-red-500 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <>
                  <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-700 font-inter mb-2">
                    Upload your resume or drag and drop it here
                  </p>
                  <p className="text-sm text-gray-500 font-inter mb-4">
                    Only .doc, .docx, .pdf, .odt, .rtf
                  </p>
                  <label className="inline-block">
                    <input
                      type="file"
                      accept=".doc,.docx,.pdf,.odt,.rtf"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                    <span className="px-6 py-3 bg-accent text-white rounded-lg cursor-pointer hover:opacity-90 transition-opacity font-inter">
                      Choose File
                    </span>
                  </label>
                </>
              )}
            </div>
            <p className="text-sm text-gray-500 font-inter">(Optional)</p>
          </div>

          {/* Basic Info Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className={`${styles.h5} font-semibold text-blue font-outfit`}>Basic Info</h2>
              <button
                type="button"
                onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    title: "",
                    fullName: "",
                    lastName: "",
                    email: "",
                    mobile: "",
                  }));
                }}
                className="text-sm text-blue hover:text-accent transition-colors font-inter"
              >
                Clear
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b-1 border-gray-300 pb-6">
              <div>
                <label className={`${styles.labelBase} ${styles.p4} text-blue`}>
                  Title
                </label>
                <div className="select-right-arrow relative">
                  <select
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    className={`${styles.inputBase} ${styles.inputNormal} ${styles.p4}`}
                  >
                    <option value="">-None-</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                    <option value="Dr">Dr</option>
                  </select>
                </div>
              </div>
              <div>
                <label className={`${styles.labelBase} ${styles.p4}`}>
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                  className={`${styles.inputBase} ${styles.inputNormal} ${styles.p4}`}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className={`${styles.labelBase} ${styles.p4}`}>
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  className={`${styles.inputBase} ${styles.inputNormal} ${styles.p4}`}
                  placeholder="Enter your last name"
                />
              </div>
              <div>
                <label className={`${styles.labelBase} ${styles.p4}`}>
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className={`${styles.inputBase} ${styles.inputNormal} ${styles.p4}`}
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className={`${styles.labelBase} ${styles.p4}`}>
                  Mobile
                </label>
                <input
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => setFormData(prev => ({ ...prev, mobile: e.target.value }))}
                  className={`${styles.inputBase} ${styles.inputNormal} ${styles.p4}`}
                  placeholder="Enter your mobile number"
                />
              </div>
            </div>
          </div>

          {/* Address Information Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className={`${styles.h5} font-semibold text-blue font-outfit`}>Address Information</h2>
              <button
                type="button"
                onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    street: "",
                    zipCode: "",
                    city: "",
                    state: "",
                    country: "",
                  }));
                }}
                className="text-sm text-gray-600 hover:text-accent transition-colors font-inter"
              >
                Clear
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b-1 border-gray-300 pb-6">
              <div className="">
                <label className={`${styles.labelBase} ${styles.p4}`}>Street</label>
                <input
                  type="text"
                  value={formData.street}
                  onChange={(e) => setFormData(prev => ({ ...prev, street: e.target.value }))}
                  className={`${styles.inputBase} ${styles.inputNormal} ${styles.p4}`}
                  placeholder="Enter street address"
                />
              </div>
              <div>
                <label className={`${styles.labelBase} ${styles.p4}`}>Zip/Postal Code</label>
                <input
                  type="text"
                  value={formData.zipCode}
                  onChange={(e) => setFormData(prev => ({ ...prev, zipCode: e.target.value }))}
                  className={`${styles.inputBase} ${styles.inputNormal} ${styles.p4}`}
                  placeholder="Enter zip code"
                />
              </div>
              <div>
                <label className={`${styles.labelBase} ${styles.p4}`}>City</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                  className={`${styles.inputBase} ${styles.inputNormal} ${styles.p4}`}
                  placeholder="Enter city"
                />
              </div>
              <div>
                <label className={`${styles.labelBase} ${styles.p4}`}>State/Province</label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => setFormData(prev => ({ ...prev, state: e.target.value }))}
                  className={`${styles.inputBase} ${styles.inputNormal} ${styles.p4}`}
                  placeholder="Enter state"
                />
              </div>
              <div>
                <label className={`${styles.labelBase} ${styles.p4}`}>Country</label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                  className={`${styles.inputBase} ${styles.inputNormal} ${styles.p4}`}
                  placeholder="Enter country"
                />
              </div>
            </div>
          </div>

          {/* Professional Details Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className={`${styles.h5} font-semibold text-blue font-outfit`}>Professional Details</h2>
              <button
                type="button"
                onClick={() => clearSection("skillSet")}
                className="text-sm text-gray-600 hover:text-accent transition-colors font-inter"
              >
                Clear
              </button>
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b-1 border-gray-300 pb-6">
              <div>
                <label className={`${styles.labelBase} ${styles.p4}`}>Skill Set</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                    className={`${styles.inputBase} ${styles.inputNormal} ${styles.p4}`}
                    placeholder="Search and add skills"
                  />
                </div>
                {formData.skillSet.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.skillSet.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-sm font-inter"
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={() => removeSkill(skill)}
                          className="text-gray-500 hover:text-red-500"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <label className={`${styles.labelBase} ${styles.p4}`}>
                  Preferred Team / Department (Pick up to 2)<span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={departmentInput}
                    onChange={(e) => setDepartmentInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addDepartment())}
                    className={`${styles.inputBase} ${styles.inputNormal} ${styles.p4}`}
                    placeholder="None"
                    disabled={formData.preferredDepartment.length >= 2}
                  />
                </div>
                {formData.preferredDepartment.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.preferredDepartment.map((dept) => (
                      <span
                        key={dept}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-sm font-inter"
                      >
                        {dept}
                        <button
                          type="button"
                          onClick={() => removeDepartment(dept)}
                          className="text-gray-500 hover:text-red-500"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
         

          {/* Educational Information Section */}
          <div className="space-y-4">
            <div className="border-b-1 border-gray-300 pb-6">
            <div className="flex items-center justify-between">
              <h2 className={`${styles.h5} font-semibold text-blue font-outfit`}>Educational Information</h2>
              <button
                type="button"
                onClick={() => {
                  setFormData(prev => ({ ...prev, graduationYear: "", cgpa: "" }));
                }}
                className="text-sm text-gray-600 hover:text-accent transition-colors font-inter"
              >
                Clear
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={`${styles.labelBase} ${styles.p4}`}>
                  Graduation Year<span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={formData.graduationYear}
                  onChange={(e) => setFormData(prev => ({ ...prev, graduationYear: e.target.value }))}
                  className={`${styles.inputBase} ${styles.inputNormal} ${styles.p4}`}
                  placeholder="MM/DD/YYYY"
                />
              </div>
              <div>
                <label className={`${styles.labelBase} ${styles.p4}`}>
                  CGPA<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.cgpa}
                  onChange={(e) => setFormData(prev => ({ ...prev, cgpa: e.target.value }))}
                  className={`${styles.inputBase} ${styles.inputNormal} ${styles.p4}`}
                  placeholder="Enter CGPA"
                />
              </div>
            </div>
          </div>
          </div>

          {/* Additional Information and Experience Details Section */}
          <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b-1 border-gray-300 pb-6">
            {/* Additional Information Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className={`${styles.h5} font-semibold text-blue font-outfit`}>Additional Informations</h2>
                <button
                  type="button"
                  onClick={() => clearSection("additionalInfo")}
                  className="text-sm text-gray-600 hover:text-accent transition-colors font-inter"
                >
                  Clear
                </button>
              </div>
              
              {formData.additionalInfo.map((item, index) => (
                <div key={item.id} className="space-y-3 p-4 border border-gray-200 rounded-lg bg-gray-50">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`${styles.p4} font-semibold text-blue font-outfit`}>
                      {index + 1}.
                    </span>
                    <button
                      type="button"
                      onClick={() => removeAdditionalInfo(item.id)}
                      className="text-sm text-red-500 hover:text-red-700 hover:bg-red-50 px-2 py-1 rounded transition-colors font-inter"
                    >
                      Delete
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <label className={`${styles.labelBase} ${styles.p4}`}>
                        Preferred Work Locations<span className="text-red-500">*</span>
                      </label>
                      <div className="select-left-arrow relative">
                        <select
                          value={item.preferredWorkLocation}
                          onChange={(e) => updateAdditionalInfo(item.id, "preferredWorkLocation", e.target.value)}
                          className={`${styles.inputBase} ${styles.inputNormal} ${styles.p4}`}
                        >
                          <option value="">None</option>
                          <option value="LHR">LHR</option>
                          <option value="BWP">BWP</option>
                          <option value="ISB">ISB</option>
                          <option value="KHI">KHI</option>
                          <option value="Remote">Remote</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className={`${styles.labelBase} ${styles.p4}`}>
                        Graduating Year<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={item.graduatingYear}
                        onChange={(e) => updateAdditionalInfo(item.id, "graduatingYear", e.target.value)}
                        className={`${styles.inputBase} ${styles.inputNormal} ${styles.p4}`}
                        placeholder="MM/DD/YYYY"
                      />
                    </div>
                    
                    <div>
                      <label className={`${styles.labelBase} ${styles.p4}`}>
                        CGPA.<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={item.cgpa}
                        onChange={(e) => updateAdditionalInfo(item.id, "cgpa", e.target.value)}
                        className={`${styles.inputBase} ${styles.inputNormal} ${styles.p4}`}
                        placeholder="Enter CGPA"
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              <button
                type="button"
                onClick={addAdditionalInfo}
                className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-inter font-semibold"
              >
                <Plus className="w-4 h-4" />
                <span>Add</span>
              </button>
            </div>

            {/* Experience Details Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className={`${styles.h5} font-semibold text-blue font-outfit`}>Experience Details</h2>
                <button
                  type="button"
                  onClick={() => clearSection("experience")}
                  className="text-sm text-gray-600 hover:text-accent transition-colors font-inter"
                >
                  Clear
                </button>
              </div>
              
              {formData.experience.map((exp, index) => (
                <div key={exp.id} className="space-y-3 p-4 border border-gray-200 rounded-lg bg-gray-50">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`${styles.p4} font-semibold text-blue font-outfit`}>
                      {index + 1}.
                    </span>
                    <button
                      type="button"
                      onClick={() => removeExperience(exp.id)}
                      className="text-sm text-red-500 hover:text-red-700 hover:bg-red-50 px-2 py-1 rounded transition-colors font-inter"
                    >
                      Delete
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <label className={`${styles.labelBase} ${styles.p4}`}>Company</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                        className={`${styles.inputBase} ${styles.inputNormal} ${styles.p4}`}
                        placeholder="Company name"
                      />
                    </div>
                    
                    <div>
                      <label className={`${styles.labelBase} ${styles.p4}`}>Position</label>
                      <input
                        type="text"
                        value={exp.position}
                        onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
                        className={`${styles.inputBase} ${styles.inputNormal} ${styles.p4}`}
                        placeholder="Position"
                      />
                    </div>
                    
                    <div>
                      <label className={`${styles.labelBase} ${styles.p4}`}>Duration</label>
                      <input
                        type="text"
                        value={exp.duration}
                        onChange={(e) => updateExperience(exp.id, "duration", e.target.value)}
                        className={`${styles.inputBase} ${styles.inputNormal} ${styles.p4}`}
                        placeholder="Duration"
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              <button
                type="button"
                onClick={addExperience}
                className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-inter font-semibold"
              >
                <Plus className="w-4 h-4" />
                <span>Add</span>
              </button>
            </div>
          </div>
          </div>
          {/* Social Links Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className={`${styles.h5} font-semibold text-blue font-outfit`}>Social Links</h2>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, linkedin: "" }))}
                className="text-sm text-gray-600 hover:text-accent transition-colors font-inter"
              >
                Clear
              </button>
            </div>
            <div>
              <label className={`${styles.labelBase} ${styles.p4}`}>LinkedIn</label>
              <div className="relative">
                <Linkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) => setFormData(prev => ({ ...prev, linkedin: e.target.value }))}
                  className={`${styles.inputBase} ${styles.inputNormal} ${styles.p4} pl-10`}
                  placeholder="Enter LinkedIn profile URL"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 lg:py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold font-inter text-base lg:text-lg"
            >
              Cancel
            </button>
            <Button
              type="submit"
              variant="accent"
              size="lg"
              className="rounded-lg hover:shadow-lg font-semibold font-inter"
            >
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApplyNow;
