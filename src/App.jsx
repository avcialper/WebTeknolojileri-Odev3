import "./App.css";
import React from "react";

function Arama({ aramaMetni, onSearch }) {
  const handleChange = (event) => onSearch(event);
  return (
    <div>
      <label htmlFor="arama">Ara: </label>
      <input
        id="arama"
        type="text"
        onChange={handleChange}
        value={aramaMetni}
      />
    </div>
  );
}

function Yazi({ id, url, baslik, yazar, yorum_sayisi, puan }) {
  return (
    <li key={id}>
      <span>
        <a href={url}>{baslik}</a>,
      </span>
      <span>
        <b>Yazar:</b> {yazar},{" "}
      </span>
      <span>
        <b>Yorum Sayısı:</b> {yorum_sayisi},{" "}
      </span>
      <span>
        <b>Puan:</b> {puan}
      </span>
    </li>
  );
}

// Bileşenlerin baş harfi büyük olmalı
function Liste(props) {
  return (
    <ul>
      {props.yazilar.map(function (yazi) {
        return <Yazi key={yazi.id} {...yazi} />;
      })}{" "}
    </ul>
  );
}

function App() {
  const [aramaMetni, setAramaMetni] = React.useState(
    localStorage.getItem("aranan") || "React"
  );

  React.useEffect(() => {
    localStorage.setItem("aranan", aramaMetni);
  }, [aramaMetni]);

  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Sinan Yüksel",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Asım Yüksel",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },
    {
      baslik: "React Native",
      url: "wwww.google.com.tr",
      yazar: "Alper Avcı",
      yorum_sayisi: 20,
      puan: 4.5,
      id: 2,
    },
    {
      baslik: "React Native",
      url: "wwww.google.com.tr",
      yazar: "Zekican Dönmez",
      yorum_sayisi: 2,
      puan: 5,
      id: 3,
    },
    {
      baslik: "Java",
      url: "wwww.google.com.tr",
      yazar: "Mustafa Murat Coşkun",
      yorum_sayisi: 200,
      puan: 5,
      id: 4,
    },
    {
      baslik: "C#",
      url: "wwww.google.com.tr",
      yazar: "Engin Demiroğ",
      yorum_sayisi: 2232,
      puan: 5,
      id: 5,
    },
    {
      baslik: "Bilgisayar Kavramları",
      utl: "www.google.com.tr",
      yazar: "Şadi Evren Şeker",
      yorum_sayisi: 5032,
      puan: 5,
      id: 6
    }
  ];

  const arananYazilar = yaziListesi.filter(
    (item) =>
      item.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      item.yazar.toLowerCase().includes(aramaMetni.toLowerCase())
  );

  // 1. aşama callback handler fonksiyonunu yazdık
  const handleSearch = (event) => setAramaMetni(event.target.value);

  return (
    // React.Fragment'ta yazılabilir, harici div kullanımını önler
    <>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch} />
      <p>
        <strong>{aramaMetni + " aranıyor.."}</strong>
      </p>
      <hr />
      {arananYazilar.length === 0 ? (
        <b style={{ color: "red", fontSize: 28 }}>ARANAN İÇERİK BULUNAMADI!</b>
      ) : (
        <Liste yazilar={arananYazilar} />
      )}
    </>
  );
}
export default App;
