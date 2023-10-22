import React from 'react';
import './style.scss';

const Header = () => {
  const handleShowFavorites = () => {
    
  }
  return (
    <>
        <div className='header'>
              <p>Filter by:</p>
              <div style={{ display:'flex',gap:10,marginLeft:20, alignItems:'center'}}>
                <button>Unread</button>
                <button>Read</button>
                <button onClick={ handleShowFavorites }>Favourites</button>
              </div>
        </div>
    </>
  )
}

export default Header