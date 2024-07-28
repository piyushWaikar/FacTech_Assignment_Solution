import React from 'react';

const WeekNavigation = ({ week, onPreviousWeek, onNextWeek }) => {
  return (
    <div className="flex justify-between items-center gap-2 lg:gap-3">
      <button onClick={onPreviousWeek} className="px-2 py-1 w-24 bg-blue-500 text-white rounded">Previous Week</button>
      <h2 className="text-lg font-semibold text-sm">Week {week}</h2>
      <button onClick={onNextWeek} className="px-2 py-1 w-24 bg-blue-500 text-white rounded">Next Week</button>
    </div>
  );
};

export default WeekNavigation;
