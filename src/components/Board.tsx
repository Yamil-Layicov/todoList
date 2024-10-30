import React, { useState } from 'react';
import List from './List';
import useBoard from '../hooks/useBoard';

const Board: React.FC = () => {
  const { lists, addList, addCard, deleteList } = useBoard();
  const [newListTitle, setNewListTitle] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>(''); 

  const handleAddList = () => {
    if (newListTitle.trim()) {
      addList(newListTitle);
      setNewListTitle('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)} 
        placeholder="Search cards..."
      />
      <div className="board">
        {lists.map(list => (
          <List
            key={list.id}
            list={list}
            onAddCard={addCard}
            onDeleteList={deleteList}
            searchTerm={searchTerm} 
          />
        ))}
        <div className="list new-list">
          <input
            type="text"
            value={newListTitle}
            onChange={e => setNewListTitle(e.target.value)}
            placeholder="Add new list"
          />
          <button  style={{backgroundColor:"#3C82F6", width:"88%", color:"white", padding:"10px 0", borderRadius:"4px"}}  onClick={handleAddList}>Add List</button>
        </div>
      </div>
    </div>
  );
};

export default Board;
