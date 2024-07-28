import React from 'react';
import { useNavigate } from 'react-router-dom';

const PMCard = ({ id, name, status, isSubPM = false, onClick }) => {
  const navigate = useNavigate();
  const statusColors = {
    Open: 'bg-green-500',
    Completed: 'bg-blue-500',
    WIP: 'bg-yellow-500',
    'Future WO': 'bg-gray-500'
  };

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    } else {
      navigate(`/pm/${id}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer p-2 rounded-lg text-white text-center mb-2 w-full flex justify-evenly ${isSubPM ? 'bg-zinc-700 ml-3' : statusColors[status]}`}
      style={{ overflow: 'hidden' }}>
      {name}
      {!isSubPM && <div className=" ">{status}</div>}
    </div>
  );
};

export default PMCard;
