import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

function AppContextProvider({ children }) {
    const [amount, setAmount] = useState(localStorage.getItem('amount') || 0);

    function deposit(value) {
        setAmount(+amount + value);
    }

    function withdraw(value) {
        const newAmount = +amount - value;
        setAmount(newAmount < 0 ? 0 : newAmount);
    }

    useEffect(() => {
        localStorage.setItem('amount', amount);
    }, [amount]);

    const defaultContext = {
        amount,
        deposit,
        withdraw
    };

    return (
        <AppContext.Provider value={defaultContext}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppContextProvider };