import { FaLinkedin, FaGithub, FaInstagram, FaMedium, FaWhatsapp } from "react-icons/fa";
import useTheme from "../components/themeHook";

const Contact = () => {
  const { isLightMode } = useTheme(); // Dark/Light mode 

  return (
    <div
      id="contact"
      className={`min-h-screen transition-all duration-500 px-8 py-16 ${
        isLightMode
          ? "bg-gradient-to-r from-gray-100 via-gray-200 to-white text-black"// Light Mode
          : "bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white" // Dark Mode 
      }`}
    >
      <h1 className="text-5xl font-bold text-center mb-6">
        İLETİŞİME <span className={`${isLightMode ? "text-gray-800" : "text-teal-500"}`}>GEÇİN</span>
      </h1>

      {/* Açıklama Metni */}
      <p className={`text-xl text-center max-w-4xl mx-auto mb-10 ${isLightMode ? "text-gray-600" : "text-gray-300"}`}>
        Web siteniz için profesyonel çözümler arıyorsanız, doğru yerdesiniz. Ben Furkan, web tasarımı ve
        geliştirme konusunda uzmanlaşmış bir profesyonelim. Modern araçlarla, hızlı ve etkili çözümler sunuyorum.
      </p>

      {/* Form Alanı */}
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className={`text-3xl font-semibold text-center ${isLightMode ? "text-gray-800" : "text-teal-500"} mb-6`}>
          Bana Ulaşın
        </h2>

        <form
  action="https://formspree.io/f/xqaejdar"
  method="POST"
  className="flex flex-col space-y-4 mb-8"
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    className={`w-full p-4 border rounded-lg focus:outline-none ${
      isLightMode
        ? "bg-gray-200 text-gray-900 border-gray-400"
        : "bg-gray-800 text-white border-gray-700"
    }`}
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    className={`w-full p-4 border rounded-lg focus:outline-none ${
      isLightMode
        ? "bg-gray-200 text-gray-900 border-gray-400"
        : "bg-gray-800 text-white border-gray-700"
    }`}
  />
  <input
    type="text"
    name="subject"
    placeholder="Subject"
    className={`w-full p-4 border rounded-lg focus:outline-none ${
      isLightMode
        ? "bg-gray-200 text-gray-900 border-gray-400"
        : "bg-gray-800 text-white border-gray-700"
    }`}
  />
  <textarea
    name="message"
    placeholder="Your Message"
    rows="5"
    className={`w-full p-4 border rounded-lg focus:outline-none ${
      isLightMode
        ? "bg-gray-200 text-gray-900 border-gray-400"
        : "bg-gray-800 text-white border-gray-700"
    }`}
  />
  <button
    type="submit"
    className={`w-full p-4 rounded-lg transition-all duration-300 ${
      isLightMode
        ? "bg-gray-700 text-white hover:bg-gray-900"
        : "bg-teal-600 hover:bg-teal-800"
    }`}
  >
    SEND MESSAGE
  </button>
</form>


{/* İletişim Bilgileri */}
<div className="text-center text-2xl mb-8 space-y-4">
  {/* WhatsApp Butonu */}
  <a
    href="https://wa.me/905392299320"
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-md 
      ${isLightMode 
        ? "bg-green-600 text-white hover:bg-green-700" 
        : "bg-green-500 text-white hover:bg-green-600"}
    `}
  >
    <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8" /> 
    WhatsApp ile Hızlı İletişime Geç
  </a>
</div>


        {/* Sosyal Medya İkonları */}
        <div className="flex justify-center space-x-8 mb-16">
          <a href="https://www.linkedin.com/in/furkan-is/" target="_blank" rel="noopener noreferrer" className={`group flex items-center justify-center w-16 h-16 rounded-full ${isLightMode ? "bg-gray-400 hover:bg-gray-700" : "bg-teal-400 hover:bg-teal-700"}`}>
            <FaLinkedin className="w-8 h-8 text-gray-900 group-hover:text-white" />
          </a>
          <a href="https://github.com/Furkanis" target="_blank" rel="noopener noreferrer" className={`group flex items-center justify-center w-16 h-16 rounded-full ${isLightMode ? "bg-gray-400 hover:bg-gray-700" : "bg-teal-400 hover:bg-teal-700"}`}>
            <FaGithub className="w-8 h-8 text-gray-900 group-hover:text-white" />
          </a>
          <a href="https://www.instagram.com/furkanis.dev/" target="_blank" rel="noopener noreferrer" className={`group flex items-center justify-center w-16 h-16 rounded-full ${isLightMode ? "bg-gray-400 hover:bg-gray-700" : "bg-teal-400 hover:bg-teal-700"}`}>
            <FaInstagram className="w-8 h-8 text-gray-900 group-hover:text-white" />
          </a>
          <a href="https://medium.com/@isfurkan0411" target="_blank" rel="noopener noreferrer" className={`group flex items-center justify-center w-16 h-16 rounded-full ${isLightMode ? "bg-gray-400 hover:bg-gray-700" : "bg-teal-400 hover:bg-teal-700"}`}>
            <FaMedium className="w-8 h-8 text-gray-900 group-hover:text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
