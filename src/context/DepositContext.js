import React, { createContext, useState, useEffect } from 'react';

const DepositContext = createContext();

function DepositContextProvider({ children }) {
    const [profit, setProfit] = useState(0);
    const [amount, setAmount] = useState(5074);
    const [procents, setProcents] = useState(18);
    const [simpleProfit, setSimpleProfit] = useState(0);

    const onChangeAmount = (e) => {
        setAmount(e.target.value);
    }

    const onChangeProcents = (e) => {
        setProcents(e.target.value);
    }

    const calculateProcent = (amount, procents) => {
        return (amount * procents / 100);
    }

    const calculate = () => {
        function getMonthProfit(sum, p) {
            const profit = calculateProcent(sum, p);
            const freePercentsProfit = profit - calculateProcent(profit, 19.5);
            return freePercentsProfit / 12;
        }
        
        let result = +amount;
        for (let i = 1; i <= 12; i++) {
            result = getMonthProfit(result, procents) + result;
        }
        setProfit(result - amount);
        setSimpleProfit(getMonthProfit(amount, procents) * 12);
    }

    const defaultContext = {
        amount,
        profit,
        simpleProfit,
        procents,
        onChangeAmount,
        onChangeProcents,
        calculate
    };

    return (
        <DepositContext.Provider value={defaultContext}>
            {children}
        </DepositContext.Provider>
    );
}

export { DepositContext, DepositContextProvider };