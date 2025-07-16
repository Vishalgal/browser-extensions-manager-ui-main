import React from "react";
import moonIcon from "../assets/images/icon-moon.svg";


export default function Header({ them }) {
    const [isDark, setIsDark] = them;
    return (
        <header
            className={`${
                isDark ? "bg-[hsl(226,25%,17%)]" : "bg-[hsl(200,60%,99%)]"
            } p-3 mx-auto max-w-6xl mb-10 flex justify-between items-center rounded-2xl`}
        >
            <img src="./images/logo.svg" alt="Website Logo" />
            <button
                className={`${
                    isDark ? "bg-[hsl(225,23%,24%)]" : "bg-[hsl(0,0%,93%)]"
                } p-3 rounded-xl outline-2 outline-offset-2 outline-[hsl(3,71%,56%)] ${
                    isDark
                        ? "hover:bg-[hsl(226,11%,37%)]"
                        : "hover:bg-[hsl(0,0%,78%)]"
                } focus:outline`}
                onClick={() => setIsDark(!isDark)}
            >
                <img
                    src={isDark ? "./images/icon-sun.svg" : "./images/icon-moon.svg"}
                    alt={`${isDark ? "Sun" : "Moon"} Icon`}
                />
            </button>
        </header>
    );
}
