import { useState, useEffect, useRef, useMemo } from 'react';
import { companyData } from '@/data';

interface UseNavbarReturn {
  activeDropdown: string | null;
  setActiveDropdown: (id: string | null) => void;
  mobileDropdown: string | null;
  setMobileDropdown: (id: string | null) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  headerRef: React.RefObject<HTMLDivElement | null>;
  socialLinks: typeof companyData;
  handleDropdownToggle: (dropdownId: string) => void;
  handleMobileToggle: (dropdownId: string) => void;
  closeMenu: () => void;
}

export const useNavbar = (): UseNavbarReturn => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const socialLinks = useMemo(
    () => companyData.filter((item) => item.type === "socialLink"),
    []
  );

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle keyboard events (Escape key)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setMobileDropdown(null);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const handleDropdownToggle = (dropdownId: string) => {
    setActiveDropdown((prev) => (prev === dropdownId ? null : dropdownId));
  };

  const handleMobileToggle = (dropdownId: string) => {
    setMobileDropdown((prev) => (prev === dropdownId ? null : dropdownId));
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setMobileDropdown(null);
  };

  return {
    activeDropdown,
    setActiveDropdown,
    mobileDropdown,
    setMobileDropdown,
    isMenuOpen,
    setIsMenuOpen,
    headerRef,
    socialLinks,
    handleDropdownToggle,
    handleMobileToggle,
    closeMenu,
  };
};

