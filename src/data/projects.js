import { Github } from "lucide-react";
import medbot from '../assets/medbot.png';
import facial from '../assets/emorecog.png';

export const projects = [
    {
        Image: facial,
        title: "Facial Emotion Recognition",
        description: "Emotion recognition using CNN and FER-2013 dataset",
        tech : ["Python", "Keras", "Tensorflow", "OpenCV"],
        github: "https://github.com/MarcelLVC/Facial-Emotion-Recognition"
    },
    {
        Image: medbot,
        title: "Medical Chatbot",
        description: "A chatbot that can answer medical questions using NLP and ML",
        tech : ["Python", "LangChain", "flask", "Gemini","Pinecone"],
        github: "https://github.com/MarcelLVC/medical-chatbot"
    }
]
