
import React from "react";
import Error from "./Error";
import { Data } from "./data";
import "./public/styles/content.css";

var json = require('./data2.json');
const PageView = ({ match }) => {

  function Datamake(id, title, prices, thumbnail,image) {
    this.id = id;
    this.title = title;
    this.prices = prices;
    this.thumbnail = thumbnail; 
    this.image = image;
    }     
      
  // const image = Data[parseInt(match.params.id, 10)];
  const page = json.find(p => p.id === match.params.id);
  if (!page) {
    return (
      <div>
        <Error />
      </div> 
    );
  }
 
  return (
    <div className="content page">
      <h1>{page.first_name} {page.last_name} </h1>
      <img className="content-img" src={page.image} />
      <p>{page.content}</p>
    </div>
  );
};

export default PageView;