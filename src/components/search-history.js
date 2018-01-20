import React from 'react';

const SearchHistory = ({ searchHistory }) => {
  const history = searchHistory.map((search) => {
    return (
      <li key={search} >{search}</li>
    )
  });

  return (
    <div className="col-lg-2" id="side-menu">
      <div className="row">
        <ul>
          {history}
        </ul>
      </div>
    </div>
  );
}

export default SearchHistory;
