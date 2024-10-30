import React from 'react';

interface CardProps {
  text: string;
  onDelete: () => void; 
}


const Card: React.FC<CardProps> = ({ text, onDelete }) => {
  return (
    <div className="card">
      {text}
      <button style={{border:"none", color:"red"}} onClick={onDelete}>x</button>
    </div>
  );
};

export default Card;
