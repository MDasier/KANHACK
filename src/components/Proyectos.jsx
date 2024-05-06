import React, { useState } from "react";
import ListItem from "./ListItem";

function Proyectos(props) {

  return (
    <div id="home-main">
      <div className="col1">
        <h4>PROYECTO 1</h4>
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
      <div className="col2"><h4>PROYECTO 2</h4>
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
      <div className="col3"><h4>PROYECTO 3</h4>
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
