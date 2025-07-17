import Card from "./Card";
import FilterButton from "./FilterButton";
import { useLocalStorage } from "../hooks/useLocalStorage";
import InitialData from "../assets/data.json";

export default function ({ isDark }) {
    const [activeFilter, setActiveFilter] = useLocalStorage('activeFilter',"all");
    const [extensionsData, setExtensionsData] = useLocalStorage(
        "extensionsData",
        InitialData
    );

    // Function to handle the removal of a card
    const handleRemove = (name) => {
        // Filter out the card with the matching name
        setExtensionsData(
            extensionsData.filter((extension) => extension.name !== name)
        );
    };

    const isActive = (name) => {
        setExtensionsData(
            extensionsData.map((extension) => {
                if (extension.name === name) {
                    return { ...extension, isActive: !extension.isActive };
                }
                return extension;
            })
        );
    };

    return (
        <>
            <div className="flex flex-col items-center gap-5 mx-auto max-w-6xl mt-10 sm:mt-14 sm:flex-row sm:justify-between">
                <h2 className="text-[32px] font-bold">Extensions List</h2>
                <div className="flex gap-3 items-center">
                    <FilterButton
                        value="all"
                        lebal="All"
                        isDark={isDark}
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                    />
                    <FilterButton
                        value="active"
                        lebal="Active"
                        isDark={isDark}
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                    />
                    <FilterButton
                        value="inActive"
                        lebal="Inactive"
                        isDark={isDark}
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                    />
                </div>
            </div>
            <div className="cardContainer grid grid-cols-[repeat(auto-fill,_minmax(306px,_1fr))] gap-3 mx-auto max-w-6xl mt-[28px]">
                {extensionsData
                    .filter((extension) => {
                        if (activeFilter === "active") {
                            return extension.isActive === true;
                        } else if (activeFilter === "inActive") {
                            return extension.isActive === false;
                        } else {
                            return extension;
                        }
                    })
                    .map((extension, i) => {
                        // function importImage(imagePath) {
                        //     return new URL(imagePath, import.meta.url).href;
                        // }

                        return (
                            <Card
                                key={extension.name}
                                image={extension.logo}
                                heding={extension.name}
                                description={extension.description}
                                isActive={extension.isActive}
                                isDark={isDark}
                                onRemove={handleRemove}
                                onChange={isActive}
                            />
                        );
                    })}
            </div>
        </>
    );
}
