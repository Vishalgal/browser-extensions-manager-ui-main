import Header from "./component/Header";
import Home from "./component/Home";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
    const [isDark, setIsDark] = useLocalStorage('isDark',false);
    return (
        <div
            className={`min-h-[100vh] ${
                isDark
                    ? "bg-gradient-to-b from-[hsl(225,71%,5%)] to-[hsl(227,75%,14%)]"
                    : "bg-gradient-to-b from-[hsl(215,74%,95%)] to-[hsl(185,48%,95%)]"
            } mx-auto px-4 py-4 ${
              isDark
                  ? "text-[hsl(200,60%,99%)]"
                  : "text-[hsl(227,75%,14%)]"
          } sm:px-8 sm:py-8 md:px-16`}
        >
            <Header them={[isDark, setIsDark]} />
            <Home isDark={isDark} />
        </div>
    );
}

export default App;
