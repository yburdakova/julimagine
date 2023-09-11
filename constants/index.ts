import { NavDataProps, WorkSlidesProps, ServiceDataProps, TestimonialDataProps, AboutDataProps } from './interfaces';
import { Variants } from 'framer-motion'

// icons
import { HiHome, HiUser, HiViewColumns, HiRectangleGroup, HiChatBubbleBottomCenterText, HiEnvelope } from 'react-icons/hi2';
import { RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket } from "react-icons/rx";
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop } from "react-icons/si";

//fonts
import { Sora } from "next/font/google";

//Layout data
export const sorafont = Sora({
    subsets: ['latin'],
    variable: '--font-sora',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

// Nav data
export const navData: NavDataProps[] = [
    { name: 'home', path: '/', icon: HiHome },
    { name: 'about', path: '/about', icon: HiUser },
    { name: 'services', path: '/services', icon: HiRectangleGroup },
    { name: 'work', path: '/work', icon: HiViewColumns },
    { name: 'testimonials', path: '/testimonials', icon: HiChatBubbleBottomCenterText },
    { name: 'contact', path: '/contact', icon: HiEnvelope}
];

// ServiceSlider data
export const serviceData: ServiceDataProps[] = [
    {
        icon: RxCrop,
        title: 'Branding',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        icon: RxPencil2,
        title: 'Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        icon: RxDesktop,
        title: 'Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        icon: RxReader,
        title: 'Copywriting',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        icon: RxRocket,
        title: 'SEO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
];

//TestimonialSlider data
export const testimonialData: TestimonialDataProps[] = [
    {
        image: '/t-avt-1.png',
        name: 'Anne Smith',
        position: 'Customer',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
    {
        image: '/t-avt-2.png',
        name: 'Jane Doe',
        position: 'Customer',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
    {
        image: '/t-avt-3.png',
        name: 'Jhon Doe',
        position: 'Customer',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
];

//WorkSlider data
export const workSlides: WorkSlidesProps = {
    slides: [
    {
        images: [
        {
            title: 'title',
            path: '/thumb1.jpg',
        },
        {
            title: 'title',
            path: '/thumb2.jpg',
        },
        {
            title: 'title',
            path: '/thumb3.jpg',
        },
        {
            title: 'title',
            path: '/thumb4.jpg',
        },
        ],
    },
    {
        images: [
        {
            title: 'title',
            path: '/thumb1.jpg',
        },
        {
            title: 'title',
            path: '/thumb2.jpg',
        },
        {
            title: 'title',
            path: '/thumb3.jpg',
        },
        {
            title: 'title',
            path: '/thumb4.jpg',
        },
        ],
    },
    {
        images: [
        {
            title: 'title',
            path: '/thumb1.jpg',
        },
        {
            title: 'title',
            path: '/thumb2.jpg',
        },
        {
            title: 'title',
            path: '/thumb3.jpg',
        },
        {
            title: 'title',
            path: '/thumb4.jpg',
        },
        ],
    },
    {
        images: [
        {
            title: 'title',
            path: '/thumb4.jpg',
        },
        {
            title: 'title',
            path: '/thumb1.jpg',
        },
        {
            title: 'title',
            path: '/thumb2.jpg',
        },
        {
            title: 'title',
            path: '/thumb3.jpg',
        },
        ],
    },
    ],
};

// AboutPage data
export const aboutData: AboutDataProps[] = [
    {
        title: 'skills',
        info: [
            {
                title: 'Web Development',
                icons: [ FaHtml5, FaCss3, FaJs, FaReact, SiNextdotjs, SiFramer, FaWordpress ]
            },
            {
                title: 'UI/UX Design',
                icons: [FaFigma, SiAdobexd, SiAdobephotoshop]
            },
        ]
    },
    {
        title: 'awards',
        info: [
            {
                title: 'Webby Awards - Honoree',
                stage: '2011 - 2012',
            },
            {
                title: 'Adobe Design Achievement Awards - Finalist',
                stage: '2009 - 2010',
            },
        ]
    },
    {
        title: 'experience',
        info: [
            {
                title: 'UX/UI Designer - XYZ Company',
                stage: '2012 - 2023',
            },
            {
                title: 'Web Developer - ABC Agency',
                stage: '2010 - 2012',
            },
            {
                title: 'Intern - DEF Corporation',
                stage: '2008 - 2010',
            },
        ],
    },
    {
        title: 'credentials',
        info: [
            {
                title: 'Web Development - ABC University, LA, CA',
                stage: '2011',
            },
            {
                title: 'Computer Science Diploma - AV Technical Institute',
                stage: '2009',
            },
            {
                title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
                stage: '2006',
            },
        ]
    }
];

//Transition Variants
export const transirionVariants: Variants = {
    initial: {
        x:'100%',
        width:'100%',
    },
    animate:{
        x: '0%',
        width: '0%',
    },
    exit:{
        x: ['0%', '100%'],
        width: ['0%', '100%'],
    }
}