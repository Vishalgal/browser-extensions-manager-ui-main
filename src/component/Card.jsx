import React, { useState } from "react";

export default function Card({
    image,
    heding,
    description,
    isActive,
    isDark,
    onRemove,
    onChange,
}) {
    const [isOn, setIsOn] = useState(isActive);
    return (
        <div
            className={`card flex flex-col justify-between p-4 border-[2px] rounded-2xl h-[186px] ${
                isDark
                    ? "bg-[hsl(226,25%,17%)] border-[hsl(226,11%,37%)]"
                    : "bg-[hsl(200,60%,99%)] border-[hsl(0,0%,93%)]"
            }`}
        >
            <div className="flex gap-4 items-flex-start">
                <img src={image} alt="Card logo" className="self-start" />
                <div>
                    <h3 className="text-xl font-bold">{heding}</h3>
                    <p className="text-[14px]">{description}</p>
                </div>
            </div>
            <div className="flex justify-between items-center mt-4">
                <button
                    className={`py-[6px] px-[14px] rounded-3xl border-[2px] ${
                        isDark
                            ? "bg-[hsl(226,25%,17%)] border-[hsl(226,_11%,_37%)]"
                            : "bg-[hsl(200,60%,99%)] border-[hsl(0,0%,93%)]"
                    } hover:bg-[hsl(3,71%,56%)] hover:border-[hsl(3,71%,56%)] focus:outline outline-2 outline-offset-2 outline-[hsl(3,_71%,_56%)]`}
                    onClick={()=>onRemove(heding)}
                >
                    Remove
                </button>
                <button
                    className={`relative h-[18px] w-[34px] rounded-full outline-2 outline-offset-2 outline-[hsl(3,_71%,_56%)]  ${
                        isOn
                            ? isDark
                                ? "bg-[hsl(3,86%,64%)] hover:bg-[hsl(3,71%,56%)]"
                                : "bg-[hsl(3,77%,44%)] hover:bg-[hsl(3,71%,56%)]"
                            : isDark
                            ? "bg-[hsl(225,23%,24%)] hover:bg-[hsl(226,11%,37%)]"
                            : "bg-[hsl(0,0%,78%)] hover:bg-[hsl(226,11%,37%)]"
                    } hover:cursor-pointer focus:outline`}
                    onClick={() => {setIsOn(!isOn); onChange(heding)}}
                >
                    <div
                        className={`absolute h-[14px] w-[14px] rounded-full bg-white top-[2px]  ${
                            isOn ? "left-[18px]" : "left-[2px]"
                        }`}
                    ></div>
                </button>
            </div>
        </div>
    );
}
