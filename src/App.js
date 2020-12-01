import React from 'react';
import './App.css';
import MovieList from './MovieList';
import AddContact from './AddContact';
import { MovieProvider } from './MovieContext';

function App() {
  return (
    <MovieProvider>
      <div className="appe">
        <AddContact/>
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;