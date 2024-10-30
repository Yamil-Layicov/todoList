import { useState } from 'react';
import toast from 'react-hot-toast';

interface ListType {
  id: number;
  title: string;
  cards: string[];
}

const useBoard = () => {
  const [lists, setLists] = useState<ListType[]>([
    { id: 1, title: 'TODO', cards: ['Header', 'Footer', 'Modal'] },
    { id: 2, title: 'IN PROGRESS', cards: ['Project structure'] },
    { id: 3, title: 'DONE', cards: ['Dependencies and libs installation'] }
  ]);

  const addList = (newListTitle: string) => {
    if (!newListTitle.trim()) {
      toast.error('Başlıq boş ola bilməz!'); 
      return;
    }
    setLists([...lists, { id: Date.now(), title: newListTitle, cards: [] }]);
    toast.success('Yeni siyahı əlavə edildi!'); 
  };

  const deleteList = (listId: number) => {
    setLists(lists.filter(list => list.id !== listId));
    toast.success('Siyahı uğurla silindi'); 
  };

  return {
    lists,
    addList,
    deleteList,
  };
};

export default useBoard;
