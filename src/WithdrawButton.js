import React, { useContext } from 'react';
import { AppContext } from './context/AppContext';

function WithdrawButton() {
  const { withdraw } = useContext(AppContext);

  return <button
    className="button"
    type="button"
    onClick={() => withdraw(10)}
  >
    Withdraw
  </button>;
}

export { WithdrawButton };