import React from 'react';
import Gif from './Gif';

class GifList extends React.Component {
  render() {
    return (
      <>
        <h1>GifList</h1>
        <ul>
          <Gif />
        </ul>
      </>
    );
  }
}

export default GifList;
