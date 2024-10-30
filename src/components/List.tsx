import React, { useState } from 'react';
import Card from './Card';
import useList from '../hooks/useList';
import toast from 'react-hot-toast'; 

interface ListProps {
  list: {
    id: number;
    title: string;
    cards: string[];
  };
  onAddCard: (listId: number, card: string) => void;
  onDeleteList: (listId: number) => void;
  searchTerm: string; 
}

const List: React.FC<ListProps> = ({ list, onAddCard, onDeleteList, searchTerm }) => {
  const { cards, addCard, deleteCard } = useList(list.cards);
  const [newCardText, setNewCardText] = useState<string>('');

  const handleAddCard = () => {
    if (newCardText.trim()) {
      addCard(newCardText);
      onAddCard(list.id, newCardText);
      setNewCardText('');
    } else {
      toast.error('Kart boş olamaz');
    }
  };

  const filteredCards = cards.filter(card =>
    card.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="list">
      <h3>
        {list.title}
        <button style={{color:"red"}} onClick={() => onDeleteList(list.id)}>x</button>
      </h3>
      <div>
        {filteredCards.map((card, index) => (
          <Card
            key={index}
            text={card}
            onDelete={() => deleteCard(index)}
          />
        ))}
      </div>
      <input
        type="text"
        value={newCardText}
        onChange={e => setNewCardText(e.target.value)}
        placeholder="Add card"
      />
      <button style={{backgroundColor:"#22C55D", width:"88%", color:"white", padding:"10px 0", borderRadius:"4px"}} onClick={handleAddCard}>Add Card</button>
    </div>
  );
};

export default List;
