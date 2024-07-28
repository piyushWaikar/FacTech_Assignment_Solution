import React, { useState } from 'react';
import PMCard from '../components/PMCard';
import WeekNavigation from '../components/WeekNavigation';

const demoData = {
    25: [
      { id: 1, day: 'Monday', name: 'PM 1', status: 'Open', subPMs: [{ id: 101, name: 'WO 1-1' }, { id: 102, name: 'WO 1-2' }] },
      { id: 2, day: 'Tuesday', name: 'PM 2', status: 'Completed', subPMs: [{ id: 201, name: 'WO 2-1' }] },
      { id: 3, day: 'Wednesday', name: 'PM 3', status: 'WIP', subPMs: [{ id: 301, name: 'WO 3-1' }, { id: 302, name: 'WO 3-2' }] },
      { id: 4, day: 'Thursday', name: 'PM 4', status: 'Future WO', subPMs: [{ id: 401, name: 'WO 4-1' }] },
      { id: 5, day: 'Friday', name: 'PM 5', status: 'Open', subPMs: [{ id: 501, name: 'WO 5-1' }] },
    ],
    26: [
      { id: 1, day: 'Monday', name: 'PM 1', status: 'Completed', subPMs: [{ id: 101, name: 'WO 1-1' }] },
      { id: 2, day: 'Tuesday', name: 'PM 2', status: 'WIP', subPMs: [{ id: 201, name: 'WO 2-1' }] },
      { id: 3, day: 'Wednesday', name: 'PM 3', status: 'Future WO', subPMs: [{ id: 301, name: 'WO 3-1' }, { id: 302, name: 'WO 3-2' }] },
      { id: 4, day: 'Thursday', name: 'PM 4', status: 'Open', subPMs: [{ id: 401, name: 'WO 4-1' }] },
      { id: 5, day: 'Friday', name: 'PM 5', status: 'Completed', subPMs: [{ id: 501, name: 'WO 5-1' }, { id: 502, name: 'WO 5-2' }] },
    ],
    27: [
      { id: 1, day: 'Monday', name: 'PM 1', status: 'WIP', subPMs: [{ id: 101, name: 'WO 1-1' }] },
      { id: 2, day: 'Tuesday', name: 'PM 2', status: 'Future WO', subPMs: [{ id: 201, name: 'WO 2-1' }] },
      { id: 3, day: 'Wednesday', name: 'PM 3', status: 'Open', subPMs: [{ id: 301, name: 'WO 3-1' }, { id: 302, name: 'WO 3-2' }] },
      { id: 4, day: 'Thursday', name: 'PM 4', status: 'Completed', subPMs: [{ id: 401, name: 'WO 4-1' }] },
      { id: 5, day: 'Friday', name: 'PM 5', status: 'WIP', subPMs: [{ id: 501, name: 'WO 5-1' }] },
    ],
    28: [
      { id: 1, day: 'Monday', name: 'PM 1', status: 'Future WO', subPMs: [{ id: 101, name: 'WO 1-1' }, { id: 102, name: 'WO 1-2' }] },
      { id: 2, day: 'Tuesday', name: 'PM 2', status: 'Open', subPMs: [{ id: 201, name: 'WO 2-1' }] },
      { id: 3, day: 'Wednesday', name: 'PM 3', status: 'Completed', subPMs: [{ id: 301, name: 'WO 3-1' }, { id: 302, name: 'WO 3-2' }] },
      { id: 4, day: 'Thursday', name: 'PM 4', status: 'WIP', subPMs: [{ id: 401, name: 'WO 4-1' }] },
      { id: 5, day: 'Friday', name: 'PM 5', status: 'Future WO', subPMs: [{ id: 501, name: 'WO 5-1' }] },
    ],
    29: [
      { id: 1, day: 'Monday', name: 'PM 1', status: 'Open', subPMs: [{ id: 101, name: 'WO 1-1' }] },
      { id: 2, day: 'Tuesday', name: 'PM 2', status: 'Completed', subPMs: [{ id: 201, name: 'WO 2-1' }] },
      { id: 3, day: 'Wednesday', name: 'PM 3', status: 'WIP', subPMs: [{ id: 301, name: 'WO 3-1' }] },
      { id: 4, day: 'Thursday', name: 'PM 4', status: 'Future WO', subPMs: [{ id: 401, name: 'WO 4-1' }] },
      { id: 5, day: 'Friday', name: 'PM 5', status: 'Open', subPMs: [{ id: 501, name: 'WO 5-1' }] },
    ],
    30: [
      { id: 1, day: 'Monday', name: 'PM 1', status: 'Open', subPMs: [{ id: 101, name: 'WO 1-1' }, { id: 102, name: 'WO 1-2' }] },
      { id: 2, day: 'Tuesday', name: 'PM 2', status: 'Completed', subPMs: [{ id: 201, name: 'WO 2-1' }] },
      { id: 3, day: 'Wednesday', name: 'PM 3', status: 'WIP', subPMs: [{ id: 301, name: 'WO 3-1' }] },
      { id: 4, day: 'Thursday', name: 'PM 4', status: 'Future WO', subPMs: [{ id: 401, name: 'WO 4-1' }] },
      { id: 5, day: 'Friday', name: 'PM 5', status: 'Open' },
    ],
    31: [
      { id: 1, day: 'Monday', name: 'PM 1', status: 'Completed', subPMs: [{ id: 101, name: 'WO 1-1' }] },
      { id: 2, day: 'Tuesday', name: 'PM 2', status: 'WIP', subPMs: [{ id: 201, name: 'WO 2-1' }, { id: 202, name: 'WO 2-2' }] },
      { id: 3, day: 'Wednesday', name: 'PM 3', status: 'Future WO', subPMs: [{ id: 301, name: 'WO 3-1' }] },
      { id: 4, day: 'Thursday', name: 'PM 4', status: 'Open', subPMs: [{ id: 401, name: 'WO 4-1' }] },
      { id: 5, day: 'Friday', name: 'PM 5', status: 'Completed' },
    ],
    32: [
      { id: 1, day: 'Monday', name: 'PM 1', status: 'WIP', subPMs: [{ id: 101, name: 'WO 1-1' }] },
      { id: 2, day: 'Tuesday', name: 'PM 2', status: 'Future WO', subPMs: [{ id: 201, name: 'WO 2-1' }] },
      { id: 3, day: 'Wednesday', name: 'PM 3', status: 'Open', subPMs: [{ id: 301, name: 'WO 3-1' }] },
      { id: 4, day: 'Thursday', name: 'PM 4', status: 'Completed', subPMs: [{ id: 401, name: 'WO 4-1' }] },
      { id: 5, day: 'Friday', name: 'PM 5', status: 'WIP', subPMs: [{ id: 501, name: 'WO 5-1' }] },
    ],
    33: [
      { id: 1, day: 'Monday', name: 'PM 1', status: 'Future WO', subPMs: [{ id: 101, name: 'WO 1-1' }, { id: 102, name: 'WO 1-2' }] },
      { id: 2, day: 'Tuesday', name: 'PM 2', status: 'Open', subPMs: [{ id: 201, name: 'WO 2-1' }] },
      { id: 3, day: 'Wednesday', name: 'PM 3', status: 'Completed', subPMs: [{ id: 301, name: 'WO 3-1' }, { id: 302, name: 'WO 3-2' }] },
      { id: 4, day: 'Thursday', name: 'PM 4', status: 'WIP', subPMs: [{ id: 401, name: 'WO 4-1' }] },
      { id: 5, day: 'Friday', name: 'PM 5', status: 'Future WO', subPMs: [{ id: 501, name: 'WO 5-1' }] },
    ],
    34: [
      { id: 1, day: 'Monday', name: 'PM 1', status: 'Open', subPMs: [{ id: 101, name: 'WO 1-1' }] },
      { id: 2, day: 'Tuesday', name: 'PM 2', status: 'Completed', subPMs: [{ id: 201, name: 'WO 2-1' }] },
      { id: 3, day: 'Wednesday', name: 'PM 3', status: 'WIP', subPMs: [{ id: 301, name: 'WO 3-1' }] },
      { id: 4, day: 'Thursday', name: 'PM 4', status: 'Future WO', subPMs: [{ id: 401, name: 'WO 4-1' }] },
      { id: 5, day: 'Friday', name: 'PM 5', status: 'Open', subPMs: [{ id: 501, name: 'WO 5-1' }] },
    ],
    35: [
      { id: 1, day: 'Monday', name: 'PM 1', status: 'Completed', subPMs: [{ id: 101, name: 'WO 1-1' }] },
      { id: 2, day: 'Tuesday', name: 'PM 2', status: 'WIP', subPMs: [{ id: 201, name: 'WO 2-1' }] },
      { id: 3, day: 'Wednesday', name: 'PM 3', status: 'Future WO', subPMs: [{ id: 301, name: 'WO 3-1' }, { id: 302, name: 'WO 3-2' }] },
      { id: 4, day: 'Thursday', name: 'PM 4', status: 'Open', subPMs: [{ id: 401, name: 'WO 4-1' }] },
      { id: 5, day: 'Friday', name: 'PM 5', status: 'Completed', subPMs: [{ id: 501, name: 'WO 5-1' }, { id: 502, name: 'WO 5-2' }] },
    ],
    36: [
      { id: 1, day: 'Monday', name: 'PM 1', status: 'WIP', subPMs: [{ id: 101, name: 'WO 1-1' }] },
      { id: 2, day: 'Tuesday', name: 'PM 2', status: 'Future WO', subPMs: [{ id: 201, name: 'WO 2-1' }] },
      { id: 3, day: 'Wednesday', name: 'PM 3', status: 'Open', subPMs: [{ id: 301, name: 'WO 3-1' }] },
      { id: 4, day: 'Thursday', name: 'PM 4', status: 'Completed', subPMs: [{ id: 401, name: 'WO 4-1' }] },
      { id: 5, day: 'Friday', name: 'PM 5', status: 'WIP', subPMs: [{ id: 501, name: 'WO 5-1' }] },
    ],
  };
  
  

const Dashboard = () => {
  const [currentWeek, setCurrentWeek] = useState(30);
  const [filters, setFilters] = useState({
    Open: true,
    Completed: true,
    WIP: true,
    'Future WO': true
  });
  const [expandedPMs, setExpandedPMs] = useState({});

  const handlePreviousWeek = () => {
    setCurrentWeek((prev) => prev - 1);
  };

  const handleNextWeek = () => {
    setCurrentWeek((prev) => prev + 1);
  };

  const toggleFilter = (status) => {
    setFilters((prev) => ({
      ...prev,
      [status]: !prev[status]
    }));
  };

  const toggleExpandPM = (pmId) => {
    setExpandedPMs((prev) => ({
      ...prev,
      [pmId]: !prev[pmId]
    }));
  };

  return (
    <div className="p-4">
  <div className='font-semibold mb-2'>Factech Automation Solutions Private Limited.</div>
  <div className='font-medium text-zinc-950 mb-6'>Dashboard</div>

  <div className='mb-10  lg:flex lg:justify-between md:flex md:justify-between bg-gray-50 items-center p-4 rounded-md border-2 border-gray-200'>

{/* checkbox filter  */}
    <div className="flex justify-between items-center flex-wrap mb-4 lg:mb-0 lg:gap-6 md:gap-6">
      {Object.keys(filters).map((status) => (
      <label key={status} className="flex items-center space-x-2">
        <input type="checkbox" checked={filters[status]} onChange={()=> toggleFilter(status)}
        className="form-checkbox h-4 w-4"
        />
        <span>{status}</span>
      </label>
      ))}
    </div>

{/* week navigation button  */}
    <div className='flex flex-wrap justify-center sm:justify-center text-xs'>
      <WeekNavigation week={currentWeek} onPreviousWeek={handlePreviousWeek} onNextWeek={handleNextWeek} />
    </div>

  </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
          <div key={day} className="flex flex-col items-center p-4 border rounded-lg bg-gray-50">
            <h3 className="mb-2 font-semibold">{day}</h3>
            {demoData[currentWeek]
              ?.filter(pm => pm.day === day && filters[pm.status])
              .map((pm) => (
                <div
                  key={pm.id}
                  className={`w-full ${expandedPMs[pm.id] ? 'h-auto' : 'h-12'} transition-height duration-300`}
                >
                  <PMCard
                    id={pm.id}
                    name={pm.name}
                    status={pm.status}
                    onClick={() => toggleExpandPM(pm.id)}
                  />
                  {expandedPMs[pm.id] && pm.subPMs?.map(subPM => (
                    <PMCard
                      key={subPM.id}
                      id={subPM.id}
                      name={subPM.name}
                      status={pm.status}
                      isSubPM
                    />
                  ))}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
