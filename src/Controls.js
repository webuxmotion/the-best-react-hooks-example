import * as React from 'react';
import { DepositButton } from './DepositButton';
import { WithdrawButton } from './WithdrawButton';

function Controls({ onDeposit, onWithdraw }) {
  return (
    <div className="buttons-container">
      <DepositButton onDeposit={onDeposit} />
      <WithdrawButton onWithdraw={onWithdraw} />
    </div>
  )
}

export { Controls };