import { useEffect, useState } from "react"
import SAA from "./darkmode";
import TouchCarousel from "./page";


export default function SAA2() {
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        const html = document.getElementsByTagName('html')[0];
        if (isDark) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <>
            <div>
                <div><button onClick={() => { setIsDark(!isDark) }}>
                    toggle</button></div>
                <div>ddddd</div>                
                <TouchCarousel></TouchCarousel>
            </div>
        
        </>
    )
}