import { useState } from "react";
import useTheme from "../components/themeHook";

const Articles = () => {
  const { isLightMode } = useTheme(); // Global state kullanımı
  const [expandedArticleId, setExpandedArticleId] = useState(null);

  const articles = [
    {
      id: 1,
      title: "React ile Komponent Tabanlı Web Geliştirme",
      shortDescription: "React, bileşen tabanlı yapısı ile modern web geliştirme süreçlerinde devrim yarattı.",
      fullDescription: `React, Facebook tarafından geliştirilen ve bileşen (component) tabanlı bir JavaScript kütüphanesidir. 
      React'in en büyük avantajlarından biri, UI bileşenlerini tekrar kullanılabilir parçalara ayırarak modüler ve sürdürülebilir kod yazmayı sağlamasıdır.
      \nVirtual DOM sayesinde, React sadece değişen bileşenleri güncelleyerek yüksek performans sunar. Bu sayede, büyük ölçekli projelerde bile yüksek hızda 
      çalışan kullanıcı arayüzleri geliştirmek mümkündür. Ayrıca, React Hooks ile fonksiyonel bileşenlerde state yönetimi oldukça kolay hale gelmiştir.
      \nBu makalede, React’in temel bileşen yapısını, Virtual DOM’un nasıl çalıştığını ve dinamik kullanıcı arayüzleri oluştururken dikkat edilmesi gereken noktaları inceleyeceğiz.`,
    },
    {
      id: 2,
      title: "Node.js ile Backend Geliştirme",
      shortDescription: "Node.js, JavaScript'i yalnızca tarayıcıda değil, sunucu tarafında da kullanmanızı sağlar.",
      fullDescription: `Node.js, asenkron ve olay güdümlü yapısı sayesinde yüksek performanslı ve ölçeklenebilir backend uygulamaları geliştirmeye olanak tanır. 
      Özellikle Express.js gibi framework'lerle birlikte kullanıldığında, API geliştirme süreçleri oldukça kolay ve hızlı bir hale gelir.
      \nNode.js’in en büyük avantajlarından biri, JavaScript'i hem frontend hem de backend tarafında kullanarak tam bir full-stack geliştirme deneyimi sunmasıdır. 
      Aynı zamanda, paket yönetim sistemi olan npm sayesinde binlerce açık kaynaklı modüle erişim sağlanabilir.
      \nBu makalede, Node.js’in temel bileşenlerini, Express.js ile API geliştirme süreçlerini ve veritabanı entegrasyonlarını ele alacağız.`,
    },
    {
      id: 3,
      title: "Tailwind CSS ile Modern Tasarımlar",
      shortDescription: "Tailwind CSS, hız ve esneklik sunarak modern web tasarımını kolaylaştırır.",
      fullDescription: `Tailwind CSS, önceden tanımlanmış bileşenler yerine utility-first yaklaşımı ile çalışan bir CSS framework’üdür. 
      Bu sayede, geliştiriciler doğrudan HTML içerisinde sınıfları kullanarak hızlı ve özelleştirilebilir tasarımlar oluşturabilir.
      \nBootstrap gibi geleneksel CSS framework’lerinden farklı olarak, Tailwind ile tasarım tamamen geliştiricinin kontrolündedir. 
      Özellikle responsive tasarım yapmak için mobil öncelikli sınıfları sayesinde büyük kolaylık sağlar.
      \nBu makalede, Tailwind CSS’in temel kullanımını, avantajlarını ve modern projelerde nasıl uygulanabileceğini öğreneceksiniz.`,
    },
    {
      id: 4,
      title: "Tailwind CSS ile Responsive Tasarım",
      shortDescription: "Mobil uyumlu ve ölçeklenebilir web arayüzleri oluşturmak artık daha kolay.",
      fullDescription: `Tailwind CSS ile responsive tasarım oluşturmak, esnek grid sistemleri ve hazır medya sorguları sayesinde oldukça kolaydır. 
      Mobil öncelikli (mobile-first) tasarım yaklaşımı, küçük ekranlar için optimize edilmiş bir deneyim sunarken, daha büyük ekranlara ölçeklenebilir.
      \nÖrneğin, Tailwind’in "sm", "md", "lg", "xl" gibi sınıfları sayesinde her ekran boyutuna özel stiller belirlenebilir. 
      \nBu makalede, Tailwind CSS kullanarak mobil ve geniş ekranlar için uyumlu tasarımlar oluşturmanın en iyi yöntemlerini keşfedeceğiz.`,
    },
  ];

  const toggleArticle = (id) => {
    setExpandedArticleId(expandedArticleId === id ? null : id);
  };

  return (
    <div
      id="articles"
      className={`min-h-screen transition-all duration-500 px-8 py-16 ${
        isLightMode
          ? "bg-white text-black"
          : "bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white"
      }`}
    >
      <h1 className="text-4xl font-bold text-center mb-10">
        <span className={`${isLightMode ? "text-gray-900" : "text-teal-500"}`}>MAKALELERİM</span>
      </h1>

      {/* Makaleler Listesi */}
      <div className="space-y-4 max-w-6xl mx-auto">
        {articles.map((article) => (
          <div
            key={article.id}
            className={`rounded-lg p-8 transition-all duration-300 shadow-md hover:shadow-xl ${
              isLightMode
                ? "bg-gray-100 text-gray-900 shadow-gray-400"
                : "bg-gray-800 text-white shadow-teal-500"
            }`}
          >
            <h2
              className={`text-xl font-bold cursor-pointer mb-4 ${
                isLightMode ? "text-gray-800" : "text-teal-500"
              }`}
              onClick={() => toggleArticle(article.id)}
            >
              {article.title}
            </h2>
            <p className="text-lg">
              {expandedArticleId === article.id ? article.fullDescription : article.shortDescription}
            </p>

          
            <button
              onClick={() => toggleArticle(article.id)}
              className={`mt-4 px-4 py-2 rounded-lg transition-all ${
                isLightMode ? "bg-gray-700 text-white hover:bg-gray-900" : "bg-teal-600 hover:bg-teal-800"
              }`}
            >
              {expandedArticleId === article.id ? "Daha Az Göster" : "Devamını Oku"}
            </button>
          </div>
        ))}
      </div>

      {/* Medium Hesabı Butonu */}
      <div className="text-center mt-16">
        <p className="text-2xl mb-6">Daha fazla makale için Medium hesabımı takip etmeyi unutmayın! 😊</p>
        <a
          href="https://medium.com/@isfurkan0411"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block group"
        >
          <span className="absolute inset-0 w-full h-full bg-gray-500 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></span>
          <span className="relative px-8 py-3 font-semibold bg-gray-700 text-white rounded-full group-hover:bg-gray-800 transition-all duration-300">
            Medium Hesabım
          </span>
        </a>
      </div>
    </div>
  );
};

export default Articles;
