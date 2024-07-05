import React from 'react';

const QuoteCard = ({ quote, saveQuote }) => {
  return (
    <div className="quote-card">
      <p className='text-xl font-thin my-4'>"{quote}"</p>
      <button className='px-6 py-2 m-3 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400' onClick={saveQuote}>Save to List</button>
    </div>
  );
};

export default QuoteCard;
