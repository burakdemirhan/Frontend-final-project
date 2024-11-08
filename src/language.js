import pizza from "./assets/pizza-project.png"
import watchlist from "./assets/watchlist.png"
import fimler from "./assets/fimler.png"


export const ceviri = {
    tr: {
    skills: "Yetenekler",
    projects: "Projeler",
    hireme: "Beni işe al",
    title: "Eğer Bir Şeyi Severseniz, Kaplan Değilse Onu Serbest Bırakın",
    desc: `Merhaba, ben Burak. Full Stack Developer adayıyım. Eğer bu pozisyon için en yetenekli kişiyi arıyorsanız, muhtemelen o kişi ben değilim. Ancak, hayalleri her zaman yaptığı ve yapacaklarından daha büyük biriyle çalışmak istiyorsanız, doğru kişiyle tanışmak üzeresiniz. Jeff Bezos’un da dediği gibi: “Yetenek sizi bir süreliğine bir yere getirebilir, ancak tutku ve azim uzun vadede başarıyı getirir.” `,
    java:"JavaScript, web sayfalarını etkileşimli hale getiren bir programlama dilidir. HTML ve CSS ile birlikte çalışarak duyarlı, dinamik web deneyimleri oluşturur ve modern web geliştirme için önemlidir.",
    react: "React, kullanıcı arayüzleri oluşturmak için geliştirilmiş bir JavaScript kütüphanesidir. Facebook tarafından geliştirilmiş ve günümüzde geniş bir topluluk tarafından desteklenmektedir. React, bileşen bazlı yapısı sayesinde karmaşık kullanıcı arayüzlerinin daha hızlı ve düzenli bir şekilde geliştirilmesine olanak tanır. Tek sayfa uygulamalar (SPA) ve mobil uygulamalar için yaygın olarak kullanılır.",
    node: "Node.js, sunucu tarafında JavaScript çalıştırmayı sağlayan bir platformdur. Chrome’un V8 JavaScript motoru üzerine kuruludur ve hızlı ve ölçeklenebilir ağ uygulamaları geliştirmek için kullanılır. Node.js, asenkron ve olay güdümlü yapısı sayesinde yüksek performans sağlar, bu yüzden özellikle gerçek zamanlı uygulamalarda tercih edilir.",
    profile: "Profil",
    profileDetails: {
        name: { label: "Ad Soyad", value: "Burak Demirhan" },
        city: { label: "İkamet Şehri", value: "Ankara" },
        education: { label: "Eğitim Durumu", value: "Üniversite Mezunu" },
        role: { label: "Tercih Ettiği Rol", value: "Harika Developer" },
      },
    about:"Hakkımda",
    info1: "2000 yılının Ağustos ayında Ankara’da doğdum. İlköğretim, ortaöğretim ve lise eğitimimiolarak sporla ilgilendim ve bu süreçte Kick Boks Milli Takımı’nda yer alarak ülkemi temsil ettim.",
    info2:"Üniversite eğitimime Eskişehir'de Anadolu Üniversitesi Sosyoloji Bölümü'nde devam ettim ve 2024 yılında mezun oldum. Hayatta en büyük korkum, dünyanın gerisinde kalmak. Yazılım öğrenme isteğimin ve bu alanda bir kariyer hedeflememin en önemli nedeni de bu.",
    proje:"Projeler",
    projectsList: [
        {
          ptitle: "Pizza",
          pdesc: "Eğer lezzetli bir pizza yemek istiyorsanız, İtalya'ya gitmenize gerek yok. Bu proje, benim çıraklık dönemimde ortaya çıkan ilk işlerden biri.",
          technologies: ["React", "Redux", "Axios"],
          github: "https://github.com/burakdemirhan/pizza-project",
          site: "https://pizza-project-mocha.vercel.app/",
          image: pizza,
        },
        {
          ptitle: "Film Listesi",
          pdesc: "Bir film listeleme uygulaması. React ve Redux kullanarak geliştirilmiş bir uygulama.",
          technologies: ["React", "Redux", "Axios"],
          github: "https://github.com/burakdemirhan/fsweb-s10g3-redux-watchlist-solution",
          site: "https://fsweb-s10g3-redux-watchlist-solution-omega.vercel.app/",
          image: watchlist,
        },
        {
          ptitle: "Filmler",
          pdesc: "Birçok popüler veya daha az bilinen filmi seçip o gün izleyebilir veya favori listenize ekleyerek gelecekte izlemek üzere saklayabilirsiniz.",
          technologies: ["React", "Redux", "Axios"],
          github: "https://github.com/burakdemirhan/fsweb-s10g2-redux-filmler",
          site: "https://fsweb-s10g2-redux-filmler-henna.vercel.app/movies",
          image: fimler,
        },
      ],
      ftitle: "Bir sonraki projede beraber çalışalım."

    },

    en: {
    skills: "Skills",
    projects: "Projects",
    hireme:"Hire me",
    title: "If You Love Something Set It Free Unless It's A Tiger",
    desc: "Hello, I'm Burak. I am a Full Stack Developer candidate. If you're looking for the most talented person for this position, I’m probably not the one. However, if you want to work with someone whose dreams are bigger than what they’ve already accomplished, then you’re about to meet the right person. As Jeff Bezos said, `Talent can get you somewhere for a short period, but passion and determination will bring long-term success.` ",
    java:"JavaScript is a programming language that makes web pages interactive. It works with HTML and CSS to create responsive, dynamic web experiences and is essential for modern web development.",
    react:"React is a JavaScript library for building user interfaces. Developed by Facebook, it’s now widely supported by a broad community. React’s component-based architecture enables faster and more organized development of complex user interfaces. It’s commonly used for single-page applications (SPAs) and mobile apps.",
    node:"Node.js is a platform that enables JavaScript to run on the server side. Built on Chrome’s V8 JavaScript engine, it’s used to develop fast and scalable network applications. With its asynchronous, event-driven architecture, Node.js delivers high performance, making it ideal for real-time applications.",
    profile: "Profile",
    profileDetails: {
        name: { label: "Name", value: "Burak Demirhan" },
        city: { label: "City of Residence", value: "Ankara" },
        education: { label: "Education", value: "University Graduate" },
        role: { label: "Preferred Role", value: "Amazing Developer" },
      },
    about:"About Me",
    info1:"I was born in Ankara in August 2000 and completed my primary, middle, and high school education there. From the age of 10 to 19, I was actively involved in sports and represented my country as part of the Kickboxing National Team.",
    info2:  "I continued my education at Anadolu University in Eskişehir, majoring in Sociology, and graduated in 2024. My biggest fear in life is falling behind the rest of the world, which is also my main motivation for wanting to learn software development and pursue a career in this field.",
    proje:"Projects",
    projectsList: [
        {
          ptitle: "Pizza",
          pdesc: "If you want to eat a delicious pizza, you don't have to go to Italy. This project is one of my first works during my apprentice period.",
          technologies: ["React", "Redux", "Axios"],
          github: "https://github.com/burakdemirhan/pizza-project",
          site: "https://pizza-project-mocha.vercel.app/",
          image: pizza,
        },
        {
          ptitle: "Watchlist",
          pdesc: "A movie watching app. Developed using React and Redux.",
          technologies: ["React", "Redux", "Axios"],
          github: "https://github.com/burakdemirhan/fsweb-s10g3-redux-watchlist-solution",
          site: "https://fsweb-s10g3-redux-watchlist-solution-omega.vercel.app/",
          image: watchlist,
        },
        {
          ptitle: "Movies",
          pdesc: "You can choose from a variety of popular or lesser-known movies to watch today, or add them to your watchlist to save for later.",
          technologies: ["React", "Redux", "Axios"],
          github: "https://github.com/burakdemirhan/fsweb-s10g2-redux-filmler",
          site: "https://fsweb-s10g2-redux-filmler-henna.vercel.app/movies",
          image: fimler,
        },
      ],
   ftitle: "Let’s work together on your next product."
    }
}