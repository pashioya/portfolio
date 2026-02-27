import { FileText, SquareUserRound } from "lucide-react";
import { IconType } from "react-icons";
import { MdEmail } from "react-icons/md";
import { SiBluesky, SiCalendly, SiGithub, SiLinkedin } from "react-icons/si";

export interface WorkExperience {
    title: string;
    company: string;
    period: string;
    responsibilities: string[];
    isCurrent?: boolean;
}

export interface Education {
    degree: string;
    institution: string;
    period?: string;
    isWip?: boolean;
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
            "Maintain REST APIs and AMQP queues for EV charging protocols (OCPI, OCHP, OICP)",
            "Debug infrastructure issues ensuring platform reliability globally",
        ],
        isCurrent: true,
    },
    {
        title: "Full-Stack System Engineer",
        company: "Ag Solution",
        period: "Jun 2024 - Oct 2024",
        responsibilities: [
            "Developed enterprise industrial software solutions",
            "Implemented security infrastructure and multi-platform deployments",
        ],
    },
    {
        title: "Software Engineer Intern",
        company: "Tryve EU",
        period: "2024",
        responsibilities: [
            "Built location-based task management mobile app using React Native",
        ],
    },
];

export const education: Education[] = [
    {
        degree: "Applied Computer Science, B.S.",
        institution: "Karel de Grote - Antwerp",
        period: "2021 - 2024",
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
