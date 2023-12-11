import axios from "axios";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const response = await axios.get(
        "https://motionless-duck-petticoat.cyclic.app/api/news"
      );
      console.log(response.data);
      setNews(response.data);
    };
    getNews();
  }, []);

  return (
    <>
      <div className="nav-bar w-full h-9 bg-blue-400 items-center fixed top-0">
        <h1 className="text-white font-extrabold text-center text-xl">News Wave</h1>
      </div>
      <div className="items-center">
        {news.map((article) => {
          return (
            <NewsItem
              title={article.title}
              urlToImage={article.imgUrl}
              url={article.url}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
