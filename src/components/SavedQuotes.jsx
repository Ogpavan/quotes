import React from 'react';

const SavedQuotes = ({ quotes }) => {
  return (
    <div className="border-2 rounded-lg border-yellow-300 p-4 overflow-auto  h-48">
      <h2 className='text-xl font-semibold '>Saved Quotes</h2>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index} className='text-lg font-thin my-2 '>"{quote}"</li>
        ))}
      </ul>
    </div>
  );
};

export default SavedQuotes;
