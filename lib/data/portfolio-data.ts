import { FileText, SquareUserRound } from "lucide-react";
import { IconType } from "react-icons";
import { MdEmail } from "react-icons/md";
import { SiBluesky, SiCalendly, SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

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
        icon: FaLinkedin,
        label: "LinkedIn",
    },
];
