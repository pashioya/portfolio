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
            "Build and maintain API integrations and Django services for the internal back-office platform.",
            "Ship backend features for EV charge-point management, from data modeling to production rollout.",
            "Own roaming integrations with external operators so customers can charge seamlessly across partner networks.",
            "Maintain hardware interoperability across multiple charging-station vendors and protocol variants.",
            "Diagnose and resolve backend incidents tied to station behavior, session flows, and charging telemetry.",
        ],
        tags: ["Python", "Django", "Java", "AWS"],
        isCurrent: true,
    },
    {
        title: "Full-Stack System Engineer",
        company: "Ag Solution",
        period: "Jun 2024 - Oct 2024",
        responsibilities: [
            "Delivered enterprise industrial applications with a focus on reliability and long-term maintainability.",
            "Implemented security controls and deployment workflows across multiple runtime environments.",
        ],
        tags: ["Full-Stack", "Security", "DevOps"],
    },
    {
        title: "Software Engineer Intern",
        company: "Tryve EU",
        period: "Apr 2024 - Jun 2024",
        responsibilities: [
            "Built TaskTrove, a mobile product connecting monday.com workflows with real-time GPS task routing.",
            "Implemented monday OAuth with GDPR-compliant storage, access control, and consent-aware flows.",
            "Added geofencing, offline execution, and map-based task views for field teams.",
        ],
        tags: ["React Native", "monday.com API", "OAuth", "GDPR"],
    },
];

export const education: Education[] = [
    {
        degree: "Applied Computer Science, B.S.",
        institution: "Karel de Grote",
        period: "2021 - 2024",
        highlights: [
            "Focused on machine learning, NLP, deep learning, and MLOps using Python-based tooling.",
            "Built end-to-end AI-enabled applications with emphasis on architecture, testing, and DevOps delivery.",
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
        label: "Notes",
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
