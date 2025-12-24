import { useState, useRef, useEffect } from "react";
import { countryCodes, regionOptions } from "@/data";
import type { FormData, FormErrors } from "@/data";

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    countryCode: "+92",
    phone: "",
    budget: "",
    companyName: "",
    companyDomain: "",
    region: "",
    services: [],
    projectDetails: "",
    getNDA: false,
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const [regionSearch, setRegionSearch] = useState("");
  const regionDropdownRef = useRef<HTMLDivElement>(null);

  const filteredCountries = countryCodes.filter(
    (item) =>
      item.country.toLowerCase().includes(countrySearch.toLowerCase()) ||
      item.code.includes(countrySearch)
  );

  const selectedCountry = countryCodes.find((item) => item.code === formData.countryCode);

  const filteredRegions = regionOptions.filter((region) =>
    region.toLowerCase().includes(regionSearch.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCountryDropdownOpen(false);
        setCountrySearch("");
      }
      if (
        regionDropdownRef.current &&
        !regionDropdownRef.current.contains(event.target as Node)
      ) {
        setIsRegionDropdownOpen(false);
        setRegionSearch("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const validateField = (name: string, value: string | string[] | boolean): string => {
    if (name === "companyDomain" || name === "getNDA" || name === "agreeToTerms") return "";

    if (Array.isArray(value)) {
      return value.length === 0 ? "Please select at least one service" : "";
    }

    if (typeof value === "boolean") return "";

    if (!value || (typeof value === "string" && value.trim() === "")) {
      return "Please complete this required field.";
    }

    if (name === "email" && typeof value === "string") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return !emailRegex.test(value) ? "Please enter a valid email address" : "";
    }

    if (name === "phone" && typeof value === "string") {
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      return !phoneRegex.test(value) ? "Please enter a valid phone number" : "";
    }

    if (name === "countryCode" && typeof value === "string") {
      return !value ? "Please select a country code" : "";
    }

    return "";
  };

  const handleChange = (name: string, value: string | string[] | boolean) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    const value = formData[name as keyof FormData];
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleServiceToggle = (service: string) => {
    const newServices = formData.services.includes(service)
      ? formData.services.filter((s) => s !== service)
      : [...formData.services, service];
    handleChange("services", newServices);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTouched: { [key: string]: boolean } = {};
    const newErrors: FormErrors = {};

    Object.keys(formData).forEach((key) => {
      newTouched[key] = true;
      const value = formData[key as keyof FormData];
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    });

    setTouched(newTouched);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
    }
  };

  return {
    formData,
    errors,
    touched,
    isCountryDropdownOpen,
    setIsCountryDropdownOpen,
    countrySearch,
    setCountrySearch,
    countryDropdownRef,
    isRegionDropdownOpen,
    setIsRegionDropdownOpen,
    regionSearch,
    setRegionSearch,
    regionDropdownRef,
    filteredCountries,
    selectedCountry,
    filteredRegions,
    handleChange,
    handleBlur,
    handleServiceToggle,
    handleSubmit,
  };
};

