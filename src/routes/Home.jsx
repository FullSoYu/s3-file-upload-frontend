import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArticleList from "../Components/ArticleList";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        method: "GET",
        url: "http://localhost:8089/article",
      });
      setArticles(data.data);
    };
    getData();
  }, []);
  return (
    <div className="flex flex-col max-w-2xl m-auto">
      <button
        className="btn btn-outline btn-info ml-auto mr-0 mt-10 "
        onClick={() => {
          navigate("/Write");
        }}
      >
        글 작성
      </button>
      <ArticleList articles={articles} />
    </div>
  );
};

export default Home;
