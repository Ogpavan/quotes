import React, { useState, useEffect } from "react";
import QuoteCard from "./components/QuoteCard";
import SavedQuotes from "./components/SavedQuotes";

const App = () => {
  const [quote, setQuote] = useState("");
  const [savedQuotes, setSavedQuotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    const response = await fetch(
      "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
    );
    const data = await response.json();
    setQuote(data[0]);
    setLoading(false);
  };

  const saveQuote = () => {
    if (quote && !savedQuotes.includes(quote)) {
      setSavedQuotes([...savedQuotes, quote]);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
      <div className="bg-yellow-300  flex justify-center items-center h-screen">
        <div className=" md:w-1/2 text-center  p-10 border-2 rounded-lg bg-yellow-400 ">
          <h1 className="text-4xl font-bold">Random Quotes</h1>

          
          <QuoteCard quote={quote} saveQuote={saveQuote} />
          <button
            onClick={fetchQuote}
            className="px-6 py-2 m-3 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
          >
            {loading ? "Loading..." : "New Quote"}
            
          </button>
          <SavedQuotes quotes={savedQuotes} />
        </div>
      </div>
    </>
  );
};

export default App;
