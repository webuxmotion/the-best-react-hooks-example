import * as React from 'react';

function Amount({ value }) {
  return (
    <>
      <p className="you-have-saved">You have saved:</p>
      <div className="amount-wrapper">
        <div className="amount-container"> 
          <div className="money-icon">$</div>
          <div className="amount">{value}</div>
        </div>
      </div>
    </>
  );
}

export { Amount };