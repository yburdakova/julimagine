import { IconType } from 'react-icons/lib';

export interface NavDataProps {
    name: string;
    path: string;
    icon: IconType;
}

export interface WorkSlidesProps {
    slides: {
        images: {
            title: string;
            path: string;
        }[];
    }[];
}

export interface ServiceDataProps {
    icon: IconType;
    title: string;
    description: string;
}

export interface TestimonialDataProps {
    image: string;
        name: string;
        position: string;
        message: string;
}
interface SkillInfo {
    title: string;
    icons: IconType[];
}

interface AwardInfo {
    title: string;
    stage: string;
}

interface ExperienceInfo {
    title: string;
    stage: string;
}

interface CredentialInfo {
    title: string;
    stage: string;
}

export interface AboutDataProps {
    title: string;
    info: SkillInfo[] | AwardInfo[] | ExperienceInfo[] | CredentialInfo[];
}