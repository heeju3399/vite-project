import { useEffect, useState } from "react"

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
                <div><button onClick={() => { setIsDark(!isDark) }}>toggle</button></div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptate magnam, porro voluptatum eius ipsam reprehenderit harum earum ea illum dolore est eligendi amet praesentium. Impedit aspernatur totam a aliquid.</div>
                <h1 className="color-primary">안녕 반가워</h1>
            </div>
        </>
    )
}