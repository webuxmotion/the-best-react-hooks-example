import React, { useContext } from 'react';
import { DepositContext } from './context/DepositContext';

function DepositApp() {
  const { onChangeAmount, onChangeProcents, calculate, profit, simpleProfit, amount, procents } = useContext(DepositContext);

  return (
    <div className="deposit">
      <input type="text" placeholder="amount" onChange={onChangeAmount} value={amount} />грн &nbsp;&nbsp;
      <input type="text" placeholder="procents" onChange={onChangeProcents} value={procents} />% &nbsp;&nbsp;
      <button onClick={calculate}>Сalculate</button>
      <h2>Всего за год: {profit} грн</h2>
      <h2>Прибыль в месяц: {(profit / 12).toFixed(2)} грн</h2>
      <hr/>
      <h2>Всего за год без капитализации: {simpleProfit} грн</h2>
      <h2>Прибыль в месяц без капитализации: {(simpleProfit / 12).toFixed(2)} грн</h2>
      <hr/>
      <h2>Потеря за год по сравнению с капитализацией: {profit - simpleProfit} грн</h2>
      <h2>Прибыль в месяц по сравнению с капитализацией: {((profit / 12) - (simpleProfit / 12)).toFixed(2)} грн</h2>
    </div>
  )
}

export { DepositApp };