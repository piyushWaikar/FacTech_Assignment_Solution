import React from 'react';
import { useParams } from 'react-router-dom';

const demoData = {
  1: { name: 'PM 1', status: 'Open', details: 'Details about PM 1' },
  2: { name: 'PM 2', status: 'Completed', details: 'Details about PM 2' },
  3: { name: 'PM 3', status: 'WIP', details: 'Details about PM 3' },
  4: { name: 'PM 4', status: 'Future WO', details: 'Details about PM 4' },
  101: { name: 'WO 1-1', status: 'Open', details: 'Details about WO 1-1' },
  102: { name: 'WO 1-2', status: 'Open', details: 'Details about WO 1-2' },
  201: { name: 'WO 2-1', status: 'Completed', details: 'Details about WO 2-1' },
  202: { name: 'WO 2-2', status: 'Completed', details: 'Details about WO 2-2' },
  301: { name: 'WO 3-1', status: 'WIP', details: 'Details about WO 3-1' },
  401: { name: 'WO 4-1', status: 'Future WO', details: 'Details about WO 4-1' },
  
};

const PMDetail = () => {
  const { id } = useParams();
  const pm = demoData[id];

  if (!pm) {
    return <div>PM not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{pm.name}</h1>
      <p className="mb-2"><strong>Status:</strong> {pm.status}</p>
      <p><strong>Details:</strong> {pm.details}</p>
    </div>
  );
};

export default PMDetail;
