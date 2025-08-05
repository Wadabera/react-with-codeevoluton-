import React from 'react'
import  Childlist from './Childlist'

function Parentlist() {
  const mylist = [
    { id:1,name:'wada Abera', sex:'male', age:22, education:"software enginering"},
     {name:'tola Gudata', sex:'male', age:23, education:"computer science"},
     {id:2,name:'chaltu Bekele', sex:'female', age:22, education:"information technology"},
     {id:3,name:'beka gudduna', sex:'male', age:22, education:"software enginering"},
     {id:4,name:'durettii Ayyana', sex:'female', age:22, education:"information science"}
   ]
  return (
    <div>
      <h1>this the list of students at jimma university</h1>
      <Childlist student={mylist}></Childlist>
      
    </div>
  )
}

export default Parentlist

