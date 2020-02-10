import * as React from 'react';

function DepositButton({ onDeposit }) {
  return <button
    className="button"
    type="button"
    onClick={() => onDeposit(20)}
  >
    Deposit
  </button>;
}

export { DepositButton };