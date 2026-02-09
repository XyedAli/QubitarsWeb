"use client";

import { useState } from "react";
import { Upload, X, Plus, Linkedin } from "lucide-react";
import { styles } from "@/styles/style";
import { SectionHeading } from "@/components/shared/headings";
import { Button } from "@/components/shared/ui";

interface FormData {
  resume: File | null;
  title: string;
  fullName: string;
  lastName: string;
  email: string;
  mobile: string;
  street: string;
  zipCode: string;
  city: string;
  state: string;
  country: string;
  skillSet: string[];
  preferredDepartment: string[];
  graduationYear: string;
  cgpa: string;
  additionalInfo: Array<{ id: number; preferredWorkLocation: string; graduatingYear: string; cgpa: string }>;
  experience: Array<{ id: number; company: string; position: string; duration: string }>;
  linkedin: string;
}

const INITIAL_FORM: FormData = {
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
};

const RESUME_ACCEPT = ".doc,.docx,.pdf,.odt,.rtf";
const VALID_RESUME_TYPES = ["application/pdf", "application/rtf", "application/vnd.oasis.opendocument.text"];
const isResumeType = (t: string) => VALID_RESUME_TYPES.some((v) => t === v) || t.includes("msword");

const INPUT_CLASS = `${styles.inputBase} ${styles.inputNormal} ${styles.p4}`;
const LABEL_CLASS = `${styles.labelBase} ${styles.p4}`;
const CLEAR_BTN = "text-sm text-gray-600 hover:text-accent transition-colors font-inter";
const SECTION_TITLE = `${styles.h5} font-semibold text-blue font-outfit`;
const BORDER_SECTION = "border-b-1 border-gray-300 pb-6";

function FormSectionHeader({ title, onClear }: { title: string; onClear: () => void }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className={SECTION_TITLE}>{title}</h2>
      <button type="button" onClick={onClear} className={CLEAR_BTN}>Clear</button>
    </div>
  );
}

const ApplyNow = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [dragging, setDragging] = useState(false);
  const [skillInput, setSkillInput] = useState("");
  const [departmentInput, setDepartmentInput] = useState("");

  const set = (patch: Partial<FormData>) => setFormData((prev) => ({ ...prev, ...patch }));
  const clearSection = (section: keyof FormData) => {
    if (section === "skillSet") set({ skillSet: [] });
    else if (section === "preferredDepartment") set({ preferredDepartment: [] });
    else if (section === "additionalInfo") set({ additionalInfo: [] });
    else if (section === "experience") set({ experience: [] });
    else set({ [section]: (section === "resume" ? null : "") } as Partial<FormData>);
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && isResumeType(file.type)) set({ resume: file });
  };
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) set({ resume: file });
  };

  const addSkill = () => {
    const s = skillInput.trim();
    if (s && !formData.skillSet.includes(s)) {
      set({ skillSet: [...formData.skillSet, s] });
      setSkillInput("");
    }
  };
  const addDepartment = () => {
    const d = departmentInput.trim();
    if (d && formData.preferredDepartment.length < 2 && !formData.preferredDepartment.includes(d)) {
      set({ preferredDepartment: [...formData.preferredDepartment, d] });
      setDepartmentInput("");
    }
  };

  const addAdditionalInfo = () =>
    set({ additionalInfo: [...formData.additionalInfo, { id: Date.now(), preferredWorkLocation: "", graduatingYear: "", cgpa: "" }] });
  const updateAdditionalInfo = (id: number, field: "preferredWorkLocation" | "graduatingYear" | "cgpa", value: string) =>
    set({
      additionalInfo: formData.additionalInfo.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    });

  const addExperience = () =>
    set({ experience: [...formData.experience, { id: Date.now(), company: "", position: "", duration: "" }] });
  const updateExperience = (id: number, field: string, value: string) =>
    set({ experience: formData.experience.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)) });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const TagList = ({
    items,
    onRemove,
  }: {
    items: string[];
    onRemove: (item: string) => void;
  }) => (
    <div className="flex flex-wrap gap-2 mt-2">
      {items.map((item) => (
        <span key={item} className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-sm font-inter">
          {item}
          <button type="button" onClick={() => onRemove(item)} className="text-gray-500 hover:text-red-500">
            <X className="w-3 h-3" />
          </button>
        </span>
      ))}
    </div>
  );

  return (
    <section className={`bg-white ${styles.sectionPadding} py-12 md:py-16 lg:py-20`}>
      <SectionHeading subtitle="Apply Now" title="Shape Your Career Path" />
      <form onSubmit={onSubmit} className="space-y-8 md:space-y-3">
        <div className="space-y-3">
          <h2 className={SECTION_TITLE}>Upload your resume/cv in seconds</h2>
          <div
            className={`border-2 border-dashed rounded-lg p-8 md:p-12 text-center transition-colors ${dragging ? "border-accent bg-accent/5" : "border-gray-300 hover:border-gray-400"}`}
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleFileDrop}
          >
            {formData.resume ? (
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <Upload className="w-5 h-5 text-accent" />
                  <span className="text-sm md:text-base font-inter">{formData.resume.name}</span>
                </div>
                <button type="button" onClick={() => set({ resume: null })} className="text-gray-500 hover:text-red-500 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <>
                <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-700 font-inter mb-2">Upload your resume or drag and drop it here</p>
                <p className="text-sm text-gray-500 font-inter mb-4">Only .doc, .docx, .pdf, .odt, .rtf</p>
                <label className="inline-block">
                  <input type="file" accept={RESUME_ACCEPT} onChange={handleFileSelect} className="hidden" />
                  <span className="px-6 py-3 bg-accent text-white rounded-lg cursor-pointer hover:opacity-90 transition-opacity font-inter">Choose File</span>
                </label>
              </>
            )}
          </div>
          <p className="text-sm text-gray-500 font-inter">(Optional)</p>
        </div>

        <div className="space-y-4">
          <FormSectionHeader title="Basic Info" onClear={() => set({ title: "", fullName: "", lastName: "", email: "", mobile: "" })} />
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${BORDER_SECTION}`}>
            {[
              { key: "title", label: "Title", type: "select", options: ["", "Mr", "Mrs", "Ms", "Dr"] },
              { key: "fullName", label: "Full Name", placeholder: "Enter your full name" },
              { key: "lastName", label: "Last Name", placeholder: "Enter your last name" },
              { key: "email", label: "Email", type: "email", placeholder: "Enter your email" },
              { key: "mobile", label: "Mobile", type: "tel", placeholder: "Enter your mobile number" },
            ].map((f) =>
              f.type === "select" ? (
                <div key={f.key}>
                  <label className={`${LABEL_CLASS} text-blue`}>{f.label}</label>
                  <div className="select-right-arrow relative">
                    <select
                      value={formData[f.key as keyof FormData] as string}
                      onChange={(e) => set({ [f.key]: e.target.value })}
                      className={INPUT_CLASS}
                    >
                      <option value="">-None-</option>
                      {f.options!.slice(1).map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>
              ) : (
                <div key={f.key}>
                  <label className={LABEL_CLASS}>{f.label}</label>
                  <input
                    type={f.type || "text"}
                    value={(formData[f.key as keyof FormData] as string) || ""}
                    onChange={(e) => set({ [f.key]: e.target.value })}
                    className={INPUT_CLASS}
                    placeholder={f.placeholder}
                  />
                </div>
              )
            )}
          </div>
        </div>

        <div className="space-y-4">
          <FormSectionHeader title="Address Information" onClear={() => set({ street: "", zipCode: "", city: "", state: "", country: "" })} />
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${BORDER_SECTION}`}>
            {[
              { key: "street", label: "Street", placeholder: "Enter street address" },
              { key: "zipCode", label: "Zip/Postal Code", placeholder: "Enter zip code" },
              { key: "city", label: "City", placeholder: "Enter city" },
              { key: "state", label: "State/Province", placeholder: "Enter state" },
              { key: "country", label: "Country", placeholder: "Enter country" },
            ].map((f) => (
              <div key={f.key}>
                <label className={LABEL_CLASS}>{f.label}</label>
                <input
                  type="text"
                  value={(formData[f.key as keyof FormData] as string) || ""}
                  onChange={(e) => set({ [f.key]: e.target.value })}
                  className={INPUT_CLASS}
                  placeholder={f.placeholder}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <FormSectionHeader title="Professional Details" onClear={() => clearSection("skillSet")} />
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${BORDER_SECTION}`}>
            <div>
              <label className={LABEL_CLASS}>Skill Set</label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                  className={INPUT_CLASS}
                  placeholder="Search and add skills"
                />
              </div>
              {formData.skillSet.length > 0 && <TagList items={formData.skillSet} onRemove={(s) => set({ skillSet: formData.skillSet.filter((x) => x !== s) })} />}
            </div>
            <div>
              <label className={LABEL_CLASS}>Preferred Team / Department (Pick up to 2)<span className="text-red-500">*</span></label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={departmentInput}
                  onChange={(e) => setDepartmentInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addDepartment())}
                  className={INPUT_CLASS}
                  placeholder="None"
                  disabled={formData.preferredDepartment.length >= 2}
                />
              </div>
              {formData.preferredDepartment.length > 0 && (
                <TagList items={formData.preferredDepartment} onRemove={(d) => set({ preferredDepartment: formData.preferredDepartment.filter((x) => x !== d) })} />
              )}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className={BORDER_SECTION}>
            <FormSectionHeader title="Educational Information" onClear={() => set({ graduationYear: "", cgpa: "" })} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className={LABEL_CLASS}>Graduation Year<span className="text-red-500">*</span></label>
                <input type="date" value={formData.graduationYear} onChange={(e) => set({ graduationYear: e.target.value })} className={INPUT_CLASS} placeholder="MM/DD/YYYY" />
              </div>
              <div>
                <label className={LABEL_CLASS}>CGPA<span className="text-red-500">*</span></label>
                <input type="text" value={formData.cgpa} onChange={(e) => set({ cgpa: e.target.value })} className={INPUT_CLASS} placeholder="Enter CGPA" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${BORDER_SECTION}`}>
            <div className="space-y-4">
              <FormSectionHeader title="Additional Informations" onClear={() => clearSection("additionalInfo")} />
              {formData.additionalInfo.map((item, index) => (
                <div key={item.id} className="space-y-3 p-4 border border-gray-200 rounded-lg bg-gray-50">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`${styles.p4} font-semibold text-blue font-outfit`}>{index + 1}.</span>
                    <button type="button" onClick={() => set({ additionalInfo: formData.additionalInfo.filter((x) => x.id !== item.id) })} className="text-sm text-red-500 hover:text-red-700 hover:bg-red-50 px-2 py-1 rounded transition-colors font-inter">Delete</button>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className={LABEL_CLASS}>Preferred Work Locations<span className="text-red-500">*</span></label>
                      <div className="select-left-arrow relative">
                        <select value={item.preferredWorkLocation} onChange={(e) => updateAdditionalInfo(item.id, "preferredWorkLocation", e.target.value)} className={INPUT_CLASS}>
                          <option value="">None</option>
                          {["LHR", "BWP", "ISB", "KHI", "Remote"].map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className={LABEL_CLASS}>Graduating Year<span className="text-red-500">*</span></label>
                      <input type="text" value={item.graduatingYear} onChange={(e) => updateAdditionalInfo(item.id, "graduatingYear", e.target.value)} className={INPUT_CLASS} placeholder="MM/DD/YYYY" />
                    </div>
                    <div>
                      <label className={LABEL_CLASS}>CGPA.<span className="text-red-500">*</span></label>
                      <input type="text" value={item.cgpa} onChange={(e) => updateAdditionalInfo(item.id, "cgpa", e.target.value)} className={INPUT_CLASS} placeholder="Enter CGPA" />
                    </div>
                  </div>
                </div>
              ))}
              <button type="button" onClick={addAdditionalInfo} className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-inter font-semibold">
                <Plus className="w-4 h-4" /><span>Add</span>
              </button>
            </div>
            <div className="space-y-4">
              <FormSectionHeader title="Experience Details" onClear={() => clearSection("experience")} />
              {formData.experience.map((exp, index) => (
                <div key={exp.id} className="space-y-3 p-4 border border-gray-200 rounded-lg bg-gray-50">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`${styles.p4} font-semibold text-blue font-outfit`}>{index + 1}.</span>
                    <button type="button" onClick={() => set({ experience: formData.experience.filter((x) => x.id !== exp.id) })} className="text-sm text-red-500 hover:text-red-700 hover:bg-red-50 px-2 py-1 rounded transition-colors font-inter">Delete</button>
                  </div>
                  <div className="space-y-3">
                    {(["company", "position", "duration"] as const).map((field) => (
                      <div key={field}>
                        <label className={LABEL_CLASS}>{field === "company" ? "Company" : field === "position" ? "Position" : "Duration"}</label>
                        <input
                          type="text"
                          value={exp[field]}
                          onChange={(e) => updateExperience(exp.id, field, e.target.value)}
                          className={INPUT_CLASS}
                          placeholder={field === "company" ? "Company name" : field === "position" ? "Position" : "Duration"}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <button type="button" onClick={addExperience} className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-inter font-semibold">
                <Plus className="w-4 h-4" /><span>Add</span>
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <FormSectionHeader title="Social Links" onClear={() => set({ linkedin: "" })} />
          <div>
            <label className={LABEL_CLASS}>LinkedIn</label>
            <div className="relative">
              <Linkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="url" value={formData.linkedin} onChange={(e) => set({ linkedin: e.target.value })} className={`${INPUT_CLASS} pl-10`} placeholder="Enter LinkedIn profile URL" />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6">
          <button type="button" onClick={() => window.history.back()} className="px-6 py-2 lg:py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold font-inter text-base lg:text-lg">Cancel</button>
          <Button type="submit" variant="accent" size="lg" className="rounded-lg hover:shadow-lg font-semibold font-inter">Submit Application</Button>
        </div>
      </form>
    </section>
  );
};

export default ApplyNow;
