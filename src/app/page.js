'use client'

import { useState } from 'react';
import SymbolTable from '../components/SymbolTable';
import InputForm from '../components/InputForm';

const Home = () => {
  const [symbols, setSymbols] = useState([]);

  const handleFormSubmit = (inputValue) => {
    const newSymbols = inputValue
      .split('')
      .filter((symbol) => /[a-zA-Z0-9\{\}\[\]\(\)!]/.test(symbol));
    setSymbols(newSymbols);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center text-3xl font-bold text-cyan-600 my-8">
        Symbol Table
      </div>
      <InputForm onSubmit={handleFormSubmit} />
      {symbols.length > 0 && <SymbolTable symbols={symbols} />}
    </div>
  );
};

export default Home;
