import { FaHome, FaUser, FaBook, FaEnvelope } from "react-icons/fa";
import useTheme from "../components/themeHook";

const Navbar = () => {
  const { isLightMode } = useTheme();

  
  const buttonBaseClass = "w-12 h-12 rounded-full shadow-md flex items-center justify-center transition-all";
  const buttonLightClass = "bg-gray-300 hover:bg-gray-400 text-black";
  const buttonDarkClass = "bg-gray-800 hover:bg-gray-700 text-white";

  const tooltipClass = "absolute left-14 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-sm font-semibold py-1 px-3 rounded-lg transition-all";

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 space-y-6 z-50">
      {/* Ana Sayfa */}
      <a href="#home" className="group relative flex items-center">
        <button className={`${buttonBaseClass} ${isLightMode ? buttonLightClass : buttonDarkClass}`}>
          <FaHome className="w-6 h-6" />
        </button>
        <span className={tooltipClass}>Ana Sayfa</span>
      </a>

      {/* Hakkımda */}
      <a href="#about" className="group relative flex items-center">
        <button className={`${buttonBaseClass} ${isLightMode ? buttonLightClass : buttonDarkClass}`}>
          <FaUser className="w-6 h-6" />
        </button>
        <span className={tooltipClass}>Hakkımda</span>
      </a>

      {/* Makalelerim */}
      <a href="#articles" className="group relative flex items-center">
        <button className={`${buttonBaseClass} ${isLightMode ? buttonLightClass : buttonDarkClass}`}>
          <FaBook className="w-6 h-6" />
        </button>
        <span className={tooltipClass}>Makalelerim</span>
      </a>

      {/* İletişim */}
      <a href="#contact" className="group relative flex items-center">
        <button className={`${buttonBaseClass} ${isLightMode ? buttonLightClass : buttonDarkClass}`}>
          <FaEnvelope className="w-6 h-6" />
        </button>
        <span className={tooltipClass}>İletişim</span>
      </a>
    </div>
  );
};

export default Navbar;
