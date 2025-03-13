import useTheme from "../components/themeHook";
import { FaLinkedin, FaGithub, FaInstagram, FaMedium } from "react-icons/fa";
import profilePhoto from "../assets/pp.png";
import darkLogo from "../assets/sitemin-logosu.png";
import lightLogo from "../assets/sitemin-logosu-black.png";

const Home = () => {
  const { isLightMode, setIsLightMode, sideColor } = useTheme();

  return (
    <div
      id="home"
      className={`relative min-h-screen transition-all duration-500 ${
        isLightMode
          ? "bg-gradient-to-r from-gray-100 via-gray-200 to-white text-black"
          : "bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white"
      }`}
    >
      {/* Dekoratif Arka Plan  */}
      <div
        className={`hidden md:block absolute top-0 left-0 h-full w-[25%] ${sideColor} transform -skew-x-12 z-0 transition-all duration-500`}
      > </div>
    {/* Logo */ }
    <header className="absolute -top-16 sm:top-5 md:-top-32 left-1/2 transform -translate-x-1/2 z-50">
  <img
    src={isLightMode ? lightLogo : darkLogo}
    alt="Logo"
    className="w-64 sm:w-72 md:w-80 lg:w-96 transition-all duration-300"
  />
</header>


      {/* Dark Mode Butonu */}
      <div className="absolute top-4 left-4 z-50">
        <button
          onClick={() => setIsLightMode(!isLightMode)}
          className={`w-12 h-12 rounded-full shadow-md flex items-center justify-center transition-colors duration-500 ${
            isLightMode ? "bg-yellow-400" : "bg-gray-800"
          }`}
        >
          {isLightMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/* Ana İçerik */}
      <div className="pt-20 flex flex-col md:flex-row">
        {/* Sol Profil Bölümü */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-5 relative z-10">
          <img
            src={profilePhoto}
            alt="Profile"
            className="rounded-xl shadow-xl w-3/6 h-auto object-cover"
          />
        </div>

        {/* Sağ Bilgilendirme Bölümü */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-5 md:p-10 space-y-6 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold">
            Merhaba, Ben Furkan
          </h1>
          <h2 className="text-3xl md:text-3xl font-bold">
            FULL STACK DEVELOPER
          </h2>
          <p className="text-base md:text-large">
            Yazılım geliştirme ve tasarım konularında uzmanlaşmış bir yazılım
            geliştiricisiyim. Kullanıcı dostu, modern ve yüksek performanslı
            projeler geliştirmek için en güncel teknolojileri kullanıyorum.
            Özellikle <strong>React, JavaScript ve Tailwind CSS</strong> gibi
            araçlarla çalışarak, hem estetik hem de işlevsellik açısından güçlü
            çözümler üretmeye odaklanıyorum.
            <br />
            <br />
            Geliştirdiğim projelerde{" "}
            <strong>hız, erişilebilirlik ve kullanıcı deneyimi</strong>{" "}
            önceliklerim arasında yer alıyor. Kod yazarken sadece teknik
            gereksinimlere odaklanmak yerine, aynı zamanda{" "}
            <strong>kullanıcı dostu ve ölçeklenebilir yapılar</strong>{" "}
            oluşturmayı hedefliyorum.
            <br />
            <br />
            Hedefim, yalnızca kod yazmak değil, aynı zamanda{" "}
            <strong>yaratıcı ve yenilikçi çözümler</strong> sunarak projelere
            gerçek bir değer katmak. Teknolojinin hızla değiştiği günümüzde,
            sürekli öğrenmeye ve gelişmeye açık bir yaklaşımla çalışıyor, en iyi
            çözümleri üretmek için kendimi ve projelerimi sürekli güncelliyorum.
            <br />
            <br />
            İnsan odaklı tasarımlar, yüksek performanslı uygulamalar ve modern
            web çözümleri benim için her zaman öncelikli.
          </p>

          {/* Sosyal Medya İkonları */}
          <div className="flex justify-center item-center  space-x-6 mt-3 w-full">
            <a
              href="https://www.linkedin.com/in/furkan-is/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full bg-blue-600 text-white transition-all duration-300 ease-in-out hover:bg-blue-700 hover:ring-4 hover:ring-blue-500"
            >
              <FaLinkedin className="w-8 h-8 group-hover:scale-110 transition-all duration-300 ease-in-out" />
            </a>
            <a
              href="https://github.com/Furkanis"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full bg-orange-600 text-white transition-all duration-300 ease-in-out hover:bg-gray-900 hover:ring-4 hover:ring-gray-500"
            >
              <FaGithub className="w-8 h-8 group-hover:scale-110 transition-all duration-300 ease-in-out" />
            </a>
            <a
              href="https://www.instagram.com/furkanis.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full bg-red-500 text-white transition-all duration-300 ease-in-out hover:bg-pink-600 hover:ring-4 hover:ring-pink-400"
            >
              <FaInstagram className="w-8 h-8 group-hover:scale-110 transition-all duration-300 ease-in-out" />
            </a>
            <a
              href="https://medium.com/@isfurkan0411"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full bg-green-500 text-white transition-all duration-300 ease-in-out hover:bg-green-800 hover:ring-4 hover:ring-gray-600"
            >
              <FaMedium className="w-8 h-8 group-hover:scale-110 transition-all duration-300 ease-in-out" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
