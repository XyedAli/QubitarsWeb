import Icons from "../../public/assets/icons";
import { ChartNoAxesCombined, MapPin, Atom, Diameter, HeartPlus, GraduationCap, Rocket, LandPlot, Users, Handshake, ThumbsUp, Linkedin, Facebook, Instagram, Plug, Users2, UserPlus } from "lucide-react";
import { headerImages, industriesImages, companyImages } from "../../public/assets/images";

export const capabilitiesData = [
    {
        id: "ai-ml",
        title: "AI & ML Development",
        image: headerImages.top,
        items: [
            {
                id: "ai-consultation",
                name: "AI Consultation",
                icon: { type: "icon", component: Icons.AI }
            },
            {
                id: "ai-development",
                name: "AI Development & Integration",
                icon: { type: "icon", component: Icons.Development }
            },
            {
                id: "ai-agent",
                name: "AI Agent",
                icon: { type: "icon", component: Icons.Agent }
            },
            {
                id: "ai-workflow",
                name: "AI Workflow Automation",
                icon: { type: "icon", component: Icons.Workflow }
            },
            {
                id: "generative-ai",
                name: "Generative AI Solutions",
                icon: { type: "icon", component: Icons.Generative }
            }
        ]
    },
    {
        id: "digital-transformation",
        title: "Digital Transformation",
        items: [
            {
                id: "ui-ux",
                name: "UI/UX Design",
                icon: { type: "icon", component: Icons.Design }
            },
            {
                id: "custom-software",
                name: "Custom Software Development",
                icon: { type: "icon", component: Icons.Custom }
            },
            {
                id: "web-app",
                name: "Web App Development",
                icon: { type: "icon", component: Icons.Browser }
            },
            {
                id: "mobile-app",
                name: "Mobile App Development",
                icon: { type: "icon", component: Icons.Mobile }
            },
            {
                id: "mvp-development",
                name: "MVP Development",
                icon: { type: "icon", component: Icons.MVP }
            },
            {
                id: "saas-development",
                name: "SAAS Development",
                icon: { type: "icon", component: Icons.Saas }
            },
            {
                id: "low-code",
                name: "Low-Code/No-Code Development",
                icon: { type: "icon", component: Icons.LowCode }
            }
        ]
    }
];

export const additionalServices = [
    { id: "product-design", name: "Product Design" },
    { id: "quality-assurance", name: "Quality Assurance" },
    { id: "devops", name: "DevOps" },
    { id: "staff-augmentation", name: "Staff Augmentation" }
];


interface CompanyLogo {
    id: string;
    name: string;
    image: string;
    alt: string;
}

interface Testimonial {
    id: string;
    quote: string;
    author: string;
    position: string;
    company: string;
    avatar: string;
}

interface Industry {
    id: string;
    name: string;
    icon: React.ComponentType<{ width: number; height: number; className: string }>;
    description: string;
    title: string;
    companies?: CompanyLogo[];
    testimonials?: Testimonial[];
    hasSpecialContent?: boolean;
}

export const industries: Industry[] = [
    {
        id: "real-estate",
        name: "Real Estate",
        icon: ChartNoAxesCombined,
        description: "We empower real estate professionals with smart digital solutions—streamlining property management, simplifying transactions, and enhancing customer journeys from search to close.",
        title: "Real Estate Solutions",
        hasSpecialContent: true,
        companies: [
            { id: "1", name: "Deal Closer", image: industriesImages.clogo1, alt: "Deal Closer" },
            { id: "2", name: "Cash Flow", image: industriesImages.clogo2, alt: "Cash Flow" },
            { id: "3", name: "Republic", image: industriesImages.clogo3, alt: "Republic" },
            { id: "4", name: "Roofing", image: industriesImages.clogo4, alt: "Roofing" },
            { id: "5", name: "Faraway", image: industriesImages.clogo5, alt: "Faraway" },
            { id: "6", name: "Faraway", image: industriesImages.clogo6, alt: "Faraway" },
            { id: "7", name: "Faraway", image: industriesImages.clogo7, alt: "Faraway" },
            { id: "8", name: "Faraway", image: industriesImages.clogo8, alt: "Faraway" },
            { id: "9", name: "Faraway", image: industriesImages.clogo9, alt: "Faraway" },
            { id: "10", name: "Faraway", image: industriesImages.clogo10, alt: "Faraway" },
            { id: "11", name: "Faraway", image: industriesImages.clogo11, alt: "Faraway" },
            { id: "12", name: "Faraway", image: industriesImages.clogo12, alt: "Faraway" },
            { id: "13", name: "Faraway", image: industriesImages.clogo13, alt: "Faraway" },
            { id: "14", name: "Faraway", image: industriesImages.clogo14, alt: "Faraway" },
            { id: "15", name: "Faraway", image: industriesImages.clogo15, alt: "Faraway" },
            { id: "16", name: "Faraway", image: industriesImages.clogo16, alt: "Faraway" },
            { id: "17", name: "Faraway", image: industriesImages.clogo17, alt: "Faraway" },
            { id: "18", name: "Faraway", image: industriesImages.clogo18, alt: "Faraway" },



        ],
        testimonials: [
            {
                id: "jake-peters",
                quote: "Qubitars is an integral part of our team and we probably wouldn't be here today without them. Some of their team has worked with us for 5-8 years and we've built a trusted business relationship. We share successes together.",
                author: "Jake Peters",
                position: "CEO & CO-Founder",
                company: "PayPerks",
                avatar: industriesImages.man
            }
        ]
    },
    {
        id: "travel",
        name: "Travel & Hospitality",
        icon: MapPin,
        description: "Elevating guest experiences through smart technology solutions. We help travel businesses modernize operations and deliver exceptional service.",
        title: "Travel & Hospitality Innovation"
    },
    {
        id: "energy",
        name: "Oil Gas & Energy",
        icon: Atom,
        description: "Powering the future of energy with advanced digital solutions. Our expertise helps optimize operations and drive sustainable practices.",
        title: "Energy Sector Technology"
    },
    {
        id: "banking",
        name: "Banking & FinTech",
        icon: Diameter,
        description: "Revolutionizing financial services with cutting-edge technology. We enable secure, efficient, and user-friendly banking experiences.",
        title: "FinTech Solutions"
    },
    {
        id: "healthcare",
        name: "Healthcare",
        icon: HeartPlus,
        description: "Advancing healthcare delivery through digital transformation. Our solutions improve patient care and streamline medical operations.",
        title: "Healthcare Innovation"
    },
    {
        id: "edtech",
        name: "EdTech",
        icon: GraduationCap,
        description: "Revolutionizing learning through innovative digital solutions. We help create engaging and effective educational experiences.",
        title: "Educational Technology"
    },
    {
        id: "startups",
        name: "Startups",
        icon: Rocket,
        description: "Helping startups build and scale their businesses through innovative digital solutions. We provide the right tools and expertise to help them succeed.",
        title: "Startups Solutions"
    }
];

interface CompanyDataItem {
    type: "testimonialSlide" | "statistic" | "companyLink" | "insideQubitarsLink" | "careersLink" | "blogPost" | "socialLink";
    id: string;
    title?: string;
    label?: string;
    name?: string;
    value?: string;
    href?: string;
    image?: string;
    alt?: string;
    logo?: string;
    logoAlt?: string;
    icon?: React.ComponentType<{ width: number; height: number; className?: string }>;
}

export const companyData: CompanyDataItem[] = [
    { type: "testimonialSlide", id: "slide-1", title: "A Technology Partnership That Goes Beyond Code", logo: "/images/Header/lorem.svg", logoAlt: "Logo Qubitars" },
    { type: "testimonialSlide", id: "slide-2", title: "Innovation Through Collaboration", logo: "/images/Header/lorem.svg", logoAlt: "Logo Qubitars" },
    { type: "testimonialSlide", id: "slide-3", title: "Building Trust Through Excellence", logo: "/images/Header/lorem.svg", logoAlt: "Logo Qubitars" },
    { type: "statistic", id: "client-retention", icon: Users, value: "95%", label: "Client Retention" },
    { type: "statistic", id: "automation-efficiency", icon: LandPlot, value: "90%", label: "Automation Efficiency" },
    { type: "statistic", id: "users-impacted", icon: Handshake, value: "100+", label: "Users Impacted" },
    { type: "statistic", id: "client-recommendations", icon: ThumbsUp, value: "10/10", label: "Client Recommendations" },
    { type: "companyLink", id: "about-us", label: "About Us", href: "/" },
    { type: "companyLink", id: "success-stories", label: "Success Stories", href: "/" },
    { type: "companyLink", id: "blogs", label: "Blogs", href: "/" },
    { type: "insideQubitarsLink", id: "life-at-qubitars", label: "Life at Qubitars", href: "/" },
    { type: "careersLink", id: "fresh-graduates", label: "Fresh Graduates", href: "/" },
    { type: "careersLink", id: "open-positions", label: "Open Positions", href: "/" },
    { type: "blogPost", id: "blog-1", image: companyImages.blog1, alt: "Blog 1", title: "Adaptive Learning for Neurodivergent Students" },
    { type: "blogPost", id: "blog-2", image: companyImages.blog2, alt: "Blog 2", title: "Adaptive Learning for Neurodivergent Students" },
    { type: "blogPost", id: "blog-3", image: companyImages.blog3, alt: "Blog 3", title: "Adaptive Learning for Neurodivergent Students" },
    { type: "socialLink", id: "linkedin", name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/qubitars" },
    { type: "socialLink", id: "facebook", name: "Facebook", icon: Facebook, href: "https://www.facebook.com/qubitars" },
    { type: "socialLink", id: "instagram", name: "Instagram", icon: Instagram, href: "https://www.instagram.com/qubitars" },
    { type: "socialLink", id: "whatsapp", name: "WhatsApp", icon: Icons.Whatsapp, href: "https://wa.me/923026469153" }
];

interface EngagementDataItem {
    type: "service" | "testimonial";
    id: string;
    icon?: React.ComponentType<{ width?: number; height?: number; className?: string }>;
    title?: string;
    description?: string;
    quote?: string;
    clientAvatar?: string;
    clientName?: string;
    clientTitle?: string;
}

export const engagementData: EngagementDataItem[] = [
    {
        type: "service",
        id: "software-outsourcing",
        icon: Plug,
        title: "Software Outsourcing",
        description: "Qubitars Software Outsourcing handles your project end-to-end, saving you time, cost, and hassle."
    },
    {
        type: "service",
        id: "dedicated-teams",
        icon: Users2,
        title: "Dedicated Teams",
        description: "Providing Dedicated Teams that work like your in-house team, minus the overhead."
    },
    {
        type: "service",
        id: "staff-augmentation",
        icon: UserPlus,
        title: "Staff Augmentation",
        description: "Qubitars Staff Augmentation boosts your team with the right talent to speed up delivery."
    },
    {
        type: "testimonial",
        id: "testimonial-1",
        quote: "Qubitars Technologies partnered with Travelliance (TVA) to develop Accounting, Reporting, & Operations solutions. We helped cut downtime to zero, providing 24/7 support, and making sure their database of 7 millionusers functions smoothly.",
        clientAvatar: companyImages.jake,
        clientName: "Dori Hotoran",
        clientTitle: "Director Global Operations - Travelliance"
    },
    {
        type: "testimonial",
        id: "testimonial-2",
        quote: "Qubitars has been instrumental in our digital transformation journey. Their expertise and dedication to our success is unmatched.",
        clientAvatar: companyImages.jake,
        clientName: "Sarah Mitchell",
        clientTitle: "CTO - TechCorp Solutions"
    },
    {
        type: "testimonial",
        id: "testimonial-3",
        quote: "Working with Qubitars transformed our business operations. They delivered beyond our expectations and became a true partner in our growth.",
        clientAvatar: companyImages.jake,
        clientName: "Michael Chen",
        clientTitle: "VP of Technology - InnovateNow"
    }
];