import * as React from 'react';

function WithdrawButton({ onWithdraw }) {
  return <button
    className="button"
    type="button"
    onClick={() => onWithdraw(10)}
  >
    Withdraw
  </button>;
}

export { WithdrawButton };