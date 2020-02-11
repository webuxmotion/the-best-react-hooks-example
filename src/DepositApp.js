import React, { useContext } from 'react';
import { DepositContext } from './context/DepositContext';

function DepositApp() {
  const { onChangeAmount, onChangeProcents, calculate, profit, simpleProfit, amount, amountOld, procents } = useContext(DepositContext);

  return (
    <div className="deposit">
      <div className="deposit__header">
        <h1>Расчет депозита</h1>
        <input type="text" placeholder="Сумма" className="amount" onChange={onChangeAmount} value={amount} />грн
        <br/>
        <br/>
        <input type="text" placeholder="%" className="procent" onChange={onChangeProcents} value={procents} />% годовых
      </div>
      <div className="deposit__wrapper">
        <div className="deposit__content">
          <button onClick={calculate} className="deposit__button-calculate">Рассчитать</button>
          <br/>
          <br/>
          <p className="infoP">
            Через год ваши <b>{amountOld} грн</b> превратятся в <b>{(amountOld + profit).toFixed(2)} грн</b>, <br/> 
            если вы включите капитализацию
          </p>
          <p className="infoP">
            Чистая прибыль будет составлять <b>{(profit).toFixed()} грн</b>.<br/>
            Получается, вы сможете жить только на проценты от депозита, если вы сможете прожить на <b>{(profit / 12).toFixed()} грн</b> в месяц
          </p>
          <p className="infoP">
            Если капитализация процентов будет выключена, то через год вы получите <b>{(amountOld + simpleProfit).toFixed(2)} грн</b>, <br/> 
            то есть на <b>{((amountOld + profit) - (amountOld + simpleProfit)).toFixed(2)} грн</b> меньше
          </p>
          
        </div>
      </div>
    </div>
  )
}

export { DepositApp };