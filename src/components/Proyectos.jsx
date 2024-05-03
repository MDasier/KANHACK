import React, { useState } from "react";
import ListItem from "./ListItem";

function Proyectos(props) {

  return (
    <div id="home-main">
      <div className="col1">PROYECTO 1
      {props.lista
      .filter((eachItem)=>{
        console.log(eachItem)
        return eachItem.title.startsWith(props.searchValue.toUpperCase())
      })
      .map((eachItem, index) => {
        return (
          <div key={eachItem.id}>
            <div className="cards">
              <ListItem eachItem={eachItem} index={index} lista={props.lista} setLista={props.setLista}/>
            </div>
          </div>
        );
      })}
      </div>
      <div className="col2">PROYECTO 2
      {props.lista
      .filter((eachItem)=>{
        console.log(eachItem)
        return eachItem.title.startsWith(props.searchValue.toUpperCase())
      })
      .map((eachItem, index) => {
        return (
          <div key={eachItem.id}>
            <div className="cards">
              <ListItem eachItem={eachItem} index={index} lista={props.lista} setLista={props.setLista}/>
            </div>
          </div>
        );
      })}
      </div>
      <div className="col3">PROYECTO 3
      {props.lista
      .filter((eachItem)=>{
        console.log(eachItem)
        return eachItem.title.startsWith(props.searchValue.toUpperCase())
      })
      .map((eachItem, index) => {
        return (
          <div key={eachItem.id}>
            <div className="cards">
              <ListItem eachItem={eachItem} index={index} lista={props.lista} setLista={props.setLista}/>
            </div>
          </div>
        );
      })}
      </div>
    </div>
    
  );
}

export default Proyectos;
