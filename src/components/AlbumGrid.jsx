import React from 'react';
import './AlbumGrid.css';

const Photo = () => (
  <div className="item">
    <img alt="" src="https://cdn-images-1.medium.com/max/800/1*EntHChgUyirgbZ9A3zTxkA.png" />
  </div>
);

const AlbumGrid = () => (
  <div id="album-grid">
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
  </div>
);

export default AlbumGrid;
