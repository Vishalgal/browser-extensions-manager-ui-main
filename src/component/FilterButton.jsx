export default function FilterButton({
    value,
    lebal,
    isDark,
    activeFilter,
    setActiveFilter,
}) {
    return (
        <button
            className={`text-xl py-[8px] px-[18px] rounded-3xl border-[2px] outline-2 outline-offset-2 outline-[hsl(3,_71%,_56%)] focus:outline ${
                activeFilter === value
                    ? isDark
                        ? "text-[hsl(227,75%,14%)] bg-[hsl(3,86%,63%)] border-[hsl(3,_71%,_56%)] hover:bg-[hsl(3,_71%,_56%)]"
                        : "text-[hsl(200,60%,99%)] bg-[hsl(3,77%,44%)] border-[hsl(3,_71%,_56%)] hover:bg-[hsl(3,_71%,_56%)]"
                    : isDark
                    ? "bg-[hsl(225,23%,24%)] border-[hsl(226,_11%,_37%)] hover:bg-[hsl(226,_11%,_37%)]"
                    : "bg-[hsl(200,60%,99%)] hover:bg-[hsl(0,0%,93%)]"
            }`}
            value={value}
            onClick={(e) => setActiveFilter(e.target.value)}
        >
            {lebal}
        </button>
    );
}
