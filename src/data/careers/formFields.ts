export interface FormFieldConfig {
  key: string;
  label: string;
  type?: string;
  placeholder?: string;
  options?: string[];
}

export interface FormData {
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

export const INITIAL_FORM: FormData = {
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

export const personalInfoFields: FormFieldConfig[] = [
  { key: "title", label: "Title", type: "select", options: ["", "Mr", "Mrs", "Ms", "Dr"] },
  { key: "fullName", label: "Full Name", placeholder: "Enter your full name" },
  { key: "lastName", label: "Last Name", placeholder: "Enter your last name" },
  { key: "email", label: "Email", type: "email", placeholder: "Enter your email" },
  { key: "mobile", label: "Mobile", type: "tel", placeholder: "Enter your mobile number" },
];

export const addressFields: FormFieldConfig[] = [
  { key: "street", label: "Street", placeholder: "Enter street address" },
  { key: "zipCode", label: "Zip/Postal Code", placeholder: "Enter zip code" },
  { key: "city", label: "City", placeholder: "Enter city" },
  { key: "state", label: "State/Province", placeholder: "Enter state" },
  { key: "country", label: "Country", placeholder: "Enter country" },
];
