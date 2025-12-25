"use client";

import { MapPin, Search, ChevronDown } from "lucide-react";
import { styles } from "@/styles/style";
import { servicesOptions } from "@/data";
import { useContactForm } from "./useContactForm";

const ContactForm = () => {
  const {
    formData,
    errors,
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
  } = useContactForm();


  const textFields = [
    { name: "fullName", label: "Full Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
  ];

  const checkboxes = [
    { name: "getNDA", label: "Get NDA" },
    { name: "agreeToTerms", label: "I understand and agree to the terms & conditions." },
  ];

  const Dropdown = ({
    isOpen,
    setIsOpen,
    search,
    setSearch,
    dropdownRef,
    filteredItems,
    selectedValue,
    error,
    onSelect,
    placeholder,
    searchPlaceholder,
    renderItem,
    renderButton,
  }: {
    isOpen: boolean;
    setIsOpen: (val: boolean) => void;
    search: string;
    setSearch: (val: string) => void;
    dropdownRef: React.RefObject<HTMLDivElement | null>;
    filteredItems: any[];
    selectedValue: string;
    error?: string;
    onSelect: (value: string) => void;
    placeholder: string;
    searchPlaceholder: string;
    renderItem: (item: any) => React.ReactNode;
    renderButton: () => React.ReactNode;
  }) => (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => handleBlur(error ? "region" : "countryCode")}
        className={`${styles.dropdownButton} ${error ? styles.inputError : styles.inputNormal} ${styles.p4}`}
      >
        {renderButton()}
        <ChevronDown className={`${styles.chevronIcon} ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className={styles.dropdownContainer}>
          <div className={styles.dropdownSearchContainer}>
            <div className="relative">
              <Search className={styles.searchIcon} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={searchPlaceholder}
                className={styles.dropdownSearchInput}
                autoFocus
              />
            </div>
          </div>
          <div className={styles.dropdownList}>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    onSelect(typeof item === "string" ? item : item.code);
                    setIsOpen(false);
                    setSearch("");
                  }}
                  className={`${styles.dropdownItem} ${selectedValue === (typeof item === "string" ? item : item.code) ? styles.dropdownItemActive : ""}`}
                >
                  {renderItem(item)}
                </button>
              ))
            ) : (
              <div className={styles.dropdownNoResults}>No results found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-white">
      <div className={`${styles.sectionPadding} py-10`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="bg-white relative overflow-hidden rounded-xl ps-1 pe-1 lg:pe-4 lg:col-span-7 xl:col-span-6">
            <div className="relative z-10 mb-8">
              <h1 className={`${styles.h1} text-blue font-bold mb-4 font-outfit`}>
              Let’s Build Something Great
              </h1>
              <p className={`${styles.p2} text-blackish leading-relaxed font-inter`}>
                Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="relative z-10">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xl:gap-6">
                  {textFields.map((field) => (
                    <div key={field.name}>
                      <label className={`${styles.p2} ${styles.labelBase}`}>
                        {field.label}<span className="text-red-500">*</span>
                      </label>
                      <input
                        type={field.type}
                        value={formData[field.name as keyof typeof formData] as string}
                        onChange={(e) => handleChange(field.name, e.target.value)}
                        onBlur={() => handleBlur(field.name)}
                        className={`${styles.inputBase} ${errors[field.name] ? styles.inputError : styles.inputNormal} ${styles.p4}`}
                        placeholder={field.name === "fullName" ? "Enter your full name" : "Enter your email address"}
                      />
                      {errors[field.name] && (
                        <p className={styles.errorText}>{errors[field.name]}</p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xl:gap-6">
                  <div>
                    <label className={`${styles.p2} ${styles.labelBase}`}>
                      Phone Number<span className="text-red-500">*</span>
                    </label>
                    <div className="relative" ref={countryDropdownRef}>
                      <div className={`${styles.phoneInputContainer} ${errors.phone || errors.countryCode ? styles.inputError : styles.inputNormal}`}>
                        <button
                          type="button"
                          onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                          onBlur={() => handleBlur("countryCode")}
                          className={styles.phoneCodeButton}
                        >
                          <span className="text-left">
                            {selectedCountry ? `${selectedCountry.flag}${selectedCountry.code}` : "+92"}
                          </span>
                          <ChevronDown className={`${styles.chevronIcon} ${isCountryDropdownOpen ? "rotate-180" : ""}`} />
                        </button>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          onBlur={() => handleBlur("phone")}
                          className={`${styles.phoneInput} ${styles.p4}`}
                          placeholder="Enter phone number"
                        />
                      </div>
                      {isCountryDropdownOpen && (
                        <div className={`${styles.dropdownContainer} w-[280px]`}>
                          <div className={styles.dropdownSearchContainer}>
                            <div className="relative">
                              <Search className={styles.searchIcon} />
                              <input
                                type="text"
                                value={countrySearch}
                                onChange={(e) => setCountrySearch(e.target.value)}
                                placeholder="Search country..."
                                className={styles.dropdownSearchInput}
                                autoFocus
                              />
                            </div>
                          </div>
                          <div className={styles.dropdownList}>
                            {filteredCountries.length > 0 ? (
                              filteredCountries.map((item) => (
                                <button
                                  key={item.code}
                                  type="button"
                                  onClick={() => {
                                    handleChange("countryCode", item.code);
                                    setIsCountryDropdownOpen(false);
                                    setCountrySearch("");
                                  }}
                                  className={`${styles.dropdownItem} ${styles.countryItem} ${formData.countryCode === item.code ? styles.dropdownItemActive : ""}`}
                                >
                                  <span className={styles.countryFlag}>{item.flag}</span>
                                  <span className={styles.countryName}>{item.country}</span>
                                  <span className={styles.countryCode}>{item.code}</span>
                                </button>
                              ))
                            ) : (
                              <div className={styles.dropdownNoResults}>No country found</div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    {(errors.phone || errors.countryCode) && (
                      <p className={styles.errorText}>{errors.phone || errors.countryCode}</p>
                    )}
                  </div>

                  <div>
                    <label className={`${styles.p4} ${styles.labelBase}`}>
                      Region<span className="text-red-500">*</span>
                    </label>
                    <Dropdown
                      isOpen={isRegionDropdownOpen}
                      setIsOpen={setIsRegionDropdownOpen}
                      search={regionSearch}
                      setSearch={setRegionSearch}
                      dropdownRef={regionDropdownRef}
                      filteredItems={filteredRegions}
                      selectedValue={formData.region}
                      error={errors.region}
                      onSelect={(value) => handleChange("region", value)}
                      placeholder="None"
                      searchPlaceholder="Search region..."
                      renderItem={(item) => <span>{item}</span>}
                      renderButton={() => <span className="truncate">{formData.region || "None"}</span>}
                    />
                    {errors.region && <p className={styles.errorText}>{errors.region}</p>}
                  </div>
                </div>

                <div>
                  <label className={`${styles.p4} ${styles.labelBase}`}>
                    Project Details<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.projectDetails}
                    onChange={(e) => handleChange("projectDetails", e.target.value)}
                    onBlur={() => handleBlur("projectDetails")}
                    rows={4}
                    className={`${styles.inputBase} ${errors.projectDetails ? styles.inputError : styles.inputNormal} ${styles.p4} resize-none placeholder:text-gray-400`}
                    placeholder="Enter your project details"
                  />
                  {errors.projectDetails && (
                    <p className={styles.errorText}>{errors.projectDetails}</p>
                  )}
                </div>

                <div className="border-b border-gray-300 pb-4">
                  <label className={`${styles.p4} ${styles.labelBase}`}>
                    Services you&apos;re looking for<span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    {servicesOptions.map((service) => (
                      <label key={service} className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          onBlur={() => handleBlur("services")}
                          className={styles.checkboxBase}
                        />
                        <span className={`${styles.p4} ${styles.checkboxText}`}>{service}</span>
                      </label>
                    ))}
                  </div>
                  {errors.services && <p className={styles.errorText}>{errors.services}</p>}
                </div>

                <div className="space-y-3">
                  {checkboxes.map((checkbox) => (
                    <label key={checkbox.name} className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={formData[checkbox.name as keyof typeof formData] as boolean}
                        onChange={(e) => handleChange(checkbox.name, e.target.checked)}
                        className={styles.checkboxBase}
                      />
                      <span className={`${styles.p4} ${styles.checkboxText}`}>{checkbox.label}</span>
                    </label>
                  ))}
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="ps-0 xl:ps-24 lg:col-span-5 xl:col-span-6">
            <div className="sticky top-8">
              <div className="w-full h-[370px] md:h-[410px] lg:h-[600px] rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps?q=Mumtaz+Market,+Gujranwala,+Punjab,+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Qubitars Technologies Location"
                />
              </div>
              <div className="mt-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className={`${styles.p3} text-black font-semibold mb-1 font-inter`}>Address</p>
                    <p className={`${styles.p4} text-blackish font-inter`}>
                      Qubitars Technologies, Mumtaz Market, Gujranwala, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
