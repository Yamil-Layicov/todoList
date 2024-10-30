import { useState } from 'react';
import toast from 'react-hot-toast';

const useList = (initialCards: string[]) => {
  const [cards, setCards] = useState<string[]>(initialCards);

  const addCard = (card: string) => {
    if (!card.trim()) {
      toast.error('Card boş ola bilmez');
    } else {
      setCards(prevCards => [...prevCards, card]);
      toast.success('Card uğurla əlavə edildi'); 
    }
  };

  const deleteCard = (cardIndex: number) => {
    setCards(prevCards => prevCards.filter((_, index) => index !== cardIndex));
    toast.success('Card uğurla silindi'); 
  };

  return {
    cards,
    addCard,
    deleteCard,
  };
};

export default useList;
