import {useState, useEffect} from "react";

export const useUserScrolltoTop = () => {
    const [showScrolltop, setShowScrolltop] = useState(false);
    // add smooth scroll
    useEffect(()=>{
        document.documentElement.style.scrollBehavior = "smooth";
    
        const handleScroll = ()=>{
            setShowScrolltop(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);

        return ()=>{
            window.removeEventListener("scroll", handleScroll);
            document.documentElement.style.scrollBehavior = "auto";
        };
    }, []);

    return showScrolltop;
};