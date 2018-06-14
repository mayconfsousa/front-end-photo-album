import React from 'react';
import './SearchBox.css';

const SearchBox = () => (
  <div className="row">
    <div className="column col-md-12">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Search" />
      </div>
    </div>
  </div>
);

export default SearchBox;
