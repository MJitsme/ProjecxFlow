import React from 'react';
import '../styles/CardComponent.css';

const CardComponent = ({ title,type,year,handleClick }) => {
  return (
    <div className="card">
      <div className="card-content" onClick={handleClick} style={{color:'white', opacity:'0.8'}}>
        <h1 className="card-title">{title}</h1>
        <div className='holder_title'>
        <p className="card-type">{type}</p>
        <h2 className="card-year">{year}</h2>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
