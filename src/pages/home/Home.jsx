import React, { useState } from 'react';
import './home.css';
import Gato from './cat.png';

// import banner from './banner.jpeg'
import { Link } from 'react-router-dom';

function Home() {


  return (
  <>
  <br/>
  <div id='pai'>
    <div id='filho1'>
      <div id='neto1'>
      <h1 id='teste'>Cuidando da saúde do seu pet com carinho</h1>

      </div>
      <div id='neto2'>
      <img src={Gato} id='img10' />

      </div>
    </div>
    <div id='filho2'>

    </div>
  </div>

  


  
  </>
  );
}

export default Home;
