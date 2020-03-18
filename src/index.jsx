import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';
import Gif from "./components/Gif";

import '../assets/stylesheets/application.scss';

const App = () => {
  return (
    <div>
      Hello,
      <SearchBar />
      <GifList />
      <Gif />
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
