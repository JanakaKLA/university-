import React from 'react'
import "./index.css";

const About = ({ name, id}) => {
  return (
    <div className= "about"> 
      <p>This is my about section</p>
      <p>I am a student of university of ruhuna</p>
      <p>{name}</p>
      <p>{id}</p>
    </div>
  );
};

export default About;
