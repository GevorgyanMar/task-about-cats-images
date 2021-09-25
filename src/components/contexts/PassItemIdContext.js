import React, { useState } from 'react';


export const PassingIdContext = React.createContext({
    itemId: "",
    passItemIdHandler: () => {}
});

const PassItemIdContext = ({ children }) => {
    const [currentId, setCurrentId] = useState("1");

    const passcurrentId = (id) => {
        setCurrentId(id);
    };
    console.log(currentId);

    return (
        <PassingIdContext.Provider 
            value={ {
                    itemId: currentId,
                    passItemIdHandler: passcurrentId
                } }
        >
            { children }
        </PassingIdContext.Provider>
    );
};

export default PassItemIdContext;
