import { FaHome } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { IoBusinessSharp } from "react-icons/io5";
import { homeImages } from "@/lib/assets/images";

export const businessTypes = [
  {
    icon: FaHome,
    title: "Startups",
    description: "Qubitars helps startups turn bold ideas into scalable digital products. We design and build high-impact solutions that enable rapid growth, faster market entry, and long-term competitiveness.",
  },
  {
    icon: MdBusinessCenter,
    title: "Small Businesses",
    description: "Qubitars delivers practical, scalable digital solutions that help small businesses operate smarter, improve efficiency, and connect more meaningfully with customers—without unnecessary complexity.",
  },
  {
    icon: IoBusinessSharp,
    title: "Enterprises",
    description: "We partner with enterprises to design and engineer robust, secure, and scalable digital platforms that streamline operations, enhance productivity, and support long-term transformation at scale.",
  },
];

export const awards = [
  {
    id: 1,
    name: "Clutch",
    image: homeImages.himg1,
  },
  {
    id: 2,
    name: "TopDevelopers",
    image: homeImages.himg2,
  },
  {
    id: 3,
    name: "DesignRush",
    image: homeImages.himg3,
  },
  {
    id: 4,
    name: "GoodFirms",
    image: homeImages.himg4,
  },
  {
    id: 5,
    name: "Trustpilot",
    image: homeImages.himg6,
  },
  {
    id: 6,
    name: "DesignFirms",
    image: homeImages.himg7,
  },
];

