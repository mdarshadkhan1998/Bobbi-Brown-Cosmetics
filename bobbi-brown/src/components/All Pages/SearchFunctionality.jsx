import React,{useState} from 'react';
import data from '../db.json';


console.log(data);


export const SearchProduct =() => {
    
    const [searchTerm,setSearchTerm] = useState('')

    return (

      <div className="App">

        <input type="text" placeholder="search product..." onChange={e=>setSearchTerm(e.target.value)} />

        {data.jeans.filter((el)=>{
          if(searchTerm == ""){
            return;
        }
          else if(el.type.toLowerCase().includes(searchTerm.toLowerCase())){
            return el;
          }
        }).map((el)=>{
          return <div>{el.type}</div>
        })}

        {data.data.filter((el)=>{
          if(searchTerm == ""){
            return;
        }
          else if(el.type.toLowerCase().includes(searchTerm.toLowerCase())){
            return el;
          }
        }).map((el)=>{
          return <div>{el.type}</div>
        })}

        {data.mensTshirt.filter((el)=>{
          if(searchTerm == ""){
            return;
        }
          else if(el.type.toLowerCase().includes(searchTerm.toLowerCase())){
            return el;
          }
        }).map((el)=>{
          return <div>{el.type}</div>
        })}

      </div>
    );
  }