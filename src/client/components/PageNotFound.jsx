import React from 'react';

const PageNotFound = (props) => {
  const returnHome = () => {
    props.history.push('/');
  };
  
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Page not found</h1>
      <p>The page you are looking for doesn't exist.</p>
      <br/>
      <button
          className="button--primary" 
          onClick={returnHome}>
        Return Home
      </button>
    </div>
  );
};

export default PageNotFound;
