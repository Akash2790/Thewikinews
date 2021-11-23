import {useEffect, useState} from "react";
import axios from "axios";
import './App.css';
import NavNews from './Component/NavNews';
import { NewsContent } from './Component/NewsComponent/NewsContent';
// import apikey from "./data/config";

function App() {

  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();

  const newsApi = async () => {
    try {

      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=550694457dbe49c485d6528ef00e7c1b`);
      console.log(news.data.articles);
      // console.log(news);
    }catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, []);

  return (
    <div className="App">
      <NavNews setCategory={setCategory} />
      <NewsContent/>
    </div>
  );
}

export default App;
