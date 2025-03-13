import { FaBriefcase, FaGraduationCap } from "react-icons/fa"; // React Icons
import useTheme from "../components/themeHook"; // Dark/Light mode için hook

const About = () => {
  const { isLightMode } = useTheme(); // Global state kullanımı

  const experience = [
    { 
      year: "2024", 
      title: "Başarı Belgesi - Web Tasarımı Eğitimi", 
      description: "Web tasarım eğitimi sürecinde, modern ve kullanıcı dostu web projeleri geliştirdim. Eğitim boyunca yaptığım projelerde tasarım prensiplerine uygun çalışarak başarılı sonuçlar elde ettim."
    },
    { 
      year: "2024", 
      title: "Başarı Belgesi - JavaScript Eğitimi", 
      description: "JavaScript eğitiminde dinamik ve etkileşimli web uygulamaları geliştirme üzerine çalışmalar yaptım. Eğitim sürecinde tamamladığım projelerde işlevsellik ve verimlilik açısından başarılı oldum."
    }
];

  const education = [
    { 
      year: "2019-2022", 
      title: "Frontend & Backend Geliştirme", 
      school: "Udemy Eğitim Programı", 
      description: "HTML, CSS, JavaScript ve React gibi frontend teknolojileriyle modern web arayüzleri geliştirme konusunda eğitim aldım. Backend tarafında ise Node.js ve veritabanı yönetimi üzerine çalışmalar yaptım."
    },
    { 
      year: "2023-2024", 
      title: "Full Stack Yazılım Geliştiricisi", 
      school: "Digiway Akademi", 
      description: "Full stack geliştirme eğitimi aldım. React ve Tailwind CSS ile modern arayüzler oluştururken, backend tarafında C# ve .NET Core teknolojilerini öğrendim. MVC yapıları, RESTful API geliştirme ve MSSQL veritabanı yönetimi üzerine projeler geliştirdim."
    },
    { 
      year: "2024", 
      title: "JavaScript & React Geliştirme", 
      school: "Arı Bilgi Akademi", 
      description: "JavaScript ekosistemi, React ve Vite kullanımı üzerine yoğunlaşarak modern web uygulamaları geliştirme konusunda eğitim aldım. Performans optimizasyonları, bileşen bazlı yapı ve API entegrasyonu üzerine çalışmalar yaptım."
    }
];



  const skills = [
    { name: "HTML", level: 100, color: "bg-blue-500" },
    { name: "CSS", level: 100, color: "bg-green-500" },
    { name: "JavaScript", level: 95, color: "bg-yellow-500" },
    { name: "React", level: 85, color: "bg-purple-500" },
    { name: "Node.js", level: 75, color: "bg-red-500" },
    { name: "C#", level: 85, color: "bg-teal-500" },
    { name: "Tailwind CSS", level: 90, color: "bg-sky-500" },
  ];

  return (
    <div id="about" className={`min-h-screen transition-all duration-500 px-8 py-16 ${isLightMode ? "bg-gray-100 text-black" : "bg-gray-900 text-white"}`}>
      
      <h1 className="text-5xl font-bold text-center mb-4 text-teal-500">HAKKIMDA</h1>

      <p className="text-xl leading-relaxed text-center max-w-4xl mx-auto mb-12">
        Merhaba! Ben Furkan İs. Yazılım geliştirme ve tasarım konularında uzmanlaşmış bir yazılım geliştiricisiyim.
        Modern teknolojilerle projelere değer katmayı amaçlıyorum. Hem frontend hem de backend geliştirme konusunda yetenekliyim.
        Hedefim, kullanıcı dostu, hızlı ve etkili çözümler sunan uygulamalar geliştirmektir.
      </p>

      {/* Sertifikalar ve Eğitim */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Sertifikalarım */}
        <div>
          <h2 className="text-3xl font-semibold mb-8 text-teal-400">Sertifikalarım</h2>
          {experience.map((item, index) => (
            <div key={index} className="flex items-start space-x-4 mb-6 border-b pb-4 border-teal-400">
              <div className="flex items-center justify-center shadow-lg p-3 rounded-full bg-teal-500 text-white">
                <FaBriefcase className="text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-md text-gray-400">{item.year}</p>
                <p className="text-sm mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Eğitim Bilgileri */}
        <div>
          <h2 className="text-3xl font-semibold mb-8 text-teal-400">Eğitim</h2>
          {education.map((item, index) => (
            <div key={index} className="flex items-start space-x-4 mb-6 border-b pb-4 border-teal-400">
              <div className="flex items-center justify-center shadow-lg p-3 rounded-full bg-teal-500 text-white">
                <FaGraduationCap className="text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{item.title} <span className="text-gray-400"> - {item.school}</span></h3>
                <p className="text-md text-gray-400">{item.year}</p>
                <p className="text-sm mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Yetkinliklerim */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center text-teal-400">Yetkinliklerim</h2>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-lg font-semibold">{skill.name}</span>
                <span className="text-lg font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-6">
                <div className={`h-6 rounded-full ${skill.color}`} style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
