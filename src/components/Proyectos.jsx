import React, { useState } from "react";
import ListItem from "./ListItem";

function Proyectos(props) {

  return (

    <div id="home-main">
      
      <div className="col1">
        <h4>TO DO</h4>
      {props.lista
      .filter((eachItem)=>{
        console.log(eachItem)
        return eachItem.status === "To Do"
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
      <div className="col2"><h4>IN PROGRESS</h4>
      {props.lista
      .filter((eachItem)=>{
        console.log(eachItem)
        return eachItem.status === "In Progress"
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
      <div className="col3"><h4>DONE</h4>
      {props.lista
      .filter((eachItem)=>{
        console.log(eachItem)
        return eachItem.status === "Done"
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
      {props.searchValue === "" ? "":<div className="colFind"><h4>SEARCH RESULTS</h4>
      
      {props.lista.filter((each) => {
        return each.title.toUpperCase().includes(props.searchValue.toUpperCase()) 
      }).map((eachItem, index) => {
        return (
          <div  key={eachItem.id}>
            <div className="cards">
              <ListItem eachItem={eachItem} index={index} lista={props.lista} setLista={props.setLista}/>
              
            </div>
          </div>
        );
      })}
      </div>}
    </div>
    
  );
}

export default Proyectos;
