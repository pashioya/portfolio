import { FileText, SquareUserRound } from "lucide-react";
import { IconType } from "react-icons";
import { MdEmail } from "react-icons/md";
import { SiBluesky, SiCalendly, SiGithub, SiLinkedin } from "react-icons/si";

export interface WorkExperience {
    title: string;
    company: string;
    period: string;
    responsibilities: string[];
    tags?: string[];
    isCurrent?: boolean;
}

export interface Education {
    degree: string;
    institution: string;
    period?: string;
    isWip?: boolean;
    highlights?: string[];
}

export interface QuickLink {
    href: string;
    icon: IconType;
    label: string;
    external?: boolean;
}

export interface SocialLink {
    href: string;
    icon: IconType;
    label: string;
}

export const workExperiences: WorkExperience[] = [
    {
        title: "Backend Software Developer",
        company: "Optimile",
        period: "Nov 2024 - Present",
        responsibilities: [
            "Integrate external services into the company's back-office system (APIs, data flows, Django backend components).",
            "Contribute to new features and improvements for the EV charging point management system.",
            "Set up and maintain roaming connections with other charge point operators so customers can charge on partner networks.",
            "Implement and maintain interoperability with charging stations from different hardware manufacturers.",
            "Provide technical support on the backend side for charging station issues (diagnosing, fixing or escalating backend-related problems).",
        ],
        tags: ["Python", "Django", "Java", "AWS"],
        isCurrent: true,
    },
    {
        title: "Full-Stack System Engineer",
        company: "Ag Solution",
        period: "Jun 2024 - Oct 2024",
        responsibilities: [
            "Developed enterprise industrial software solutions.",
            "Implemented security infrastructure and multi-platform deployments.",
        ],
        tags: ["Full-Stack", "Security", "DevOps"],
    },
    {
        title: "Software Engineer Intern",
        company: "Tryve EU",
        period: "Apr 2024 - Jun 2024",
        responsibilities: [
            "Built TaskTrove, a mobile app integrating monday.com with real-time GPS task assignment.",
            "Implemented monday OAuth authentication with GDPR-compliant data handling.",
            "Added geofencing, offline support, and map-based task visualization.",
        ],
        tags: ["React Native", "monday.com API", "OAuth", "GDPR"],
    },
];

export const education: Education[] = [
    {
        degree: "Applied Computer Science, B.S.",
        institution: "Karel de Grote - Antwerp",
        period: "2021 - 2024",
        highlights: [
            "Specialized in AI/ML: machine learning, NLP, deep learning & MLOps with Python.",
            "Built full-stack AI-integrated applications with a focus on software architecture and DevOps.",
        ],
    },
    {
        degree: "International Baccalaureate (I.B.)",
        institution: "Berlin International School",
        period: "2018 - 2021",
    },
    {
        degree: "AWS Software Developer Certificate",
        institution: "In Progress",
        isWip: true,
    },
];

export const quickLinks: QuickLink[] = [
    {
        href: "https://blog.paul-ashioya.com",
        icon: SquareUserRound,
        label: "Blog",
        external: true,
    },
    {
        href: "https://memos.paul-ashioya.com",
        icon: FileText,
        label: "Memo Notes",
        external: true,
    },
    {
        href: "https://calendly.com/john-ashioya/30min",
        icon: SiCalendly,
        label: "Calendly",
        external: true,
    },
    {
        href: "mailto:john.ashioya@gmail.com",
        icon: MdEmail,
        label: "Email",
    },
];

export const socialLinks: SocialLink[] = [
    {
        href: "https://github.com/pashioya",
        icon: SiGithub,
        label: "GitHub",
    },
    {
        href: "https://bsky.app/profile/paul-ashioya.com",
        icon: SiBluesky,
        label: "Bluesky",
    },
    {
        href: "https://www.linkedin.com/in/paul-ashioya/",
        icon: SiLinkedin,
        label: "LinkedIn",
    },
];
