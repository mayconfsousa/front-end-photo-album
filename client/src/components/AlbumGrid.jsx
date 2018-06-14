import React from 'react';
import _ from 'lodash';
import Photo from './Photo';
import './AlbumGrid.css';

const photos = _.times(20).map(i => ({
  id: i + 1,
  src: `http://placehold.it/120x120&text=image${i + 1}`
}));

const AlbumGrid = () => (
  <div id="album-grid">{photos.map(photo => <Photo key={photo.id} src={photo.src} />)}</div>
);

export default AlbumGrid;
