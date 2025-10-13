import React from "react";
import { Github, Linkedin, Mail, Code, Lightbulb, Goal, Settings} from 'lucide-react';

const About =({hasAnimated}) =>{
    const features =[
        {
            icon: <Code className="w-8 h-8 mb-4 text-black"/>,
            title: "Clean Code",
            description: " Writing clean, maintainable, and efficient code following best practices and coding standards."

        },
        {
            icon: <Goal className="w-8 h-8 mb-4 text-black"/>,
            title: "Current Goal",
            description: " Building full-stack web applications using modern frameworks and technologies."

        },
        {
            icon: <Lightbulb className="w-8 h-8 mb-4 text-black"/>,
            title: "Focus",
            description: " Artifical Intelligence and sofware developement"

        },
        {
            icon: <Settings className="w-8 h-8 mb-4 text-black"/>,
            title: "Tech Stack",
            description: " Python, JavaScript, React"

        }
    ];

    return(
        <section id="about" className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className={`transition-all duration-1000 delay-200 ${hasAnimated.about ? 'opacity-100 translate-y-0':'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg text-gray-700 mb-6">
                                Computer Science undergraduate student at BINUS University with interests in artificial intelligence, machine learning, software development, and data science. Enjoy solving real-world problems through code, algorithms, and data-driven insights. Actively involved in academic and personal projects to enhance technical skills. Eager to learn new things, how to collaborate with professionals, and grow my skills in real-world applications. 
                            </p>
                            
                            <div className="flex space-x-4">
                                <Github className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors"/>
                                <Linkedin className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors"/>
                                <Mail className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors"/>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {features.map((feature, index)=>(
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border broder-gray-200">
                                    {feature.icon}
                                    <h3 className="font-semibold mb-2">
                                    {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm ">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default About;