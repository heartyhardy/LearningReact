import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div className="pa2">
            <input
             type="search"
             placeholder="Search by robot name"
             className="pa3 ba b--green bg-lightest-blue"
             onChange={searchChange}
             />
        </div>
        
    );
}

export default SearchBox;