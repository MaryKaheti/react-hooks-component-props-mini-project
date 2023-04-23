import React from "react";
import blogData from "../data/blog";
import Header from '../Header.test.js'
import ArticleList from "../__tests__/ArticleList.test";
import Article from "../__tests__/Article.test";

console.log(blogData);

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <Header {...blogData} />
      <ArticleList {...blogData} />
      <Article {...blogData} />
    </div>
  );
}

export default App;
