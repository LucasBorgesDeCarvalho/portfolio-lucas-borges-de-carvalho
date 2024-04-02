import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase
} from 'lucide-react';

const infoData = [
    {
        icon: <User2 size={20}/>,
        text: 'Lucas Borges',
    },
    {
        icon: <PhoneCall size={20}/>,
        text: '(+55) 71 99135-6077',
    },
    {
        icon: <MailIcon size={20}/>,
        text: 'lucas.carvalho30111@gmail.com',
    },
    {
        icon: <Calendar size={20}/>,
        text: 'Born on 30 Jan, 2003',
    },
    {
        icon: <GraduationCap size={20}/>,
        text: 'Computer Science Undergraduate',
    },
    {
        icon: <HomeIcon size={20}/>,
        text: 'Portão, Lauro de Freitas (BA)',
    },
];

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Centro Universitário Jorge Amado - (UNIJORGE)',
                qualification: 'Computer Science Undergraduate',
                years: '2021 - 2024',
            },
            {
                university: 'Kumon',
                qualification: 'Matemática',
                years: '2011 - 2017',
            },
            {
                university: 'Kumon',
                qualification: 'Inglês',
                years: '2018 - 2021',
            },
        ],
    },
    {
        title: 'experience',
        data: [
            {
                company: 'Centro Universitário Jorge Amado - (UNIJORGE)',
                qualification: 'Web Development Tutor',
                years: '2024 - ',
            },
        ],
    },
];

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS',
            },
            {
                name: 'Front-End Development',
            },
            {
                name: 'JavaScript, Node.js',
            },
            {
                name: 'React, Tailwind ui',
            },
            {
                name: 'FIGMA, CANVA',
            },
            {
                name: 'Java, MySQL',
            },
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/figma.svg',
            },
            {
                imgPath: '/about/notion.svg',
            },
        ]
    },
];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };


    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
                <div className='flex flex-col xl:flex-row'>
                    {/*Image*/}
                    <div className='hidden xl:flex flex-1 relative'>
                        <DevImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[350px] h-[350px] bg-no-repeat relative  rounded-full overflow-hidden" imgSrc='/hero/developer.jpeg'/>
                    </div>
                    {/*Tabs*/}
                    <div className='flex-1'>
                        <Tabs defaultValue='personal'>
                            <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualification</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                            </TabsList>
                            {/* tabs content */}
                            <div className="text-lg mt-12 xl:mt-8">
                                {/* personal */}
                                <TabsContent value='personal'>
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">Estudante de Ciências da Computação com Foco em Desenvolvimento Web</h3>
                                        <p className="subtitle max-w-xl mx-auto xl:mx-0">Estudante na UNIJORGE desde março de 2018, dedicado ao aprimoramento em linguagens de programação, com foco atual em React, Node.js e JavaScript. Busca constante melhoria técnica, aplicando conhecimentos em projetos pessoais e acadêmicos, e está aberto a explorar novas tecnologias para consolidar seu aprendizado.</p>
                                    </div>
                                </TabsContent>
                                <TabsContent value='qualifications'>Qualification info</TabsContent>
                                <TabsContent value='skills'>Skills info</TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About