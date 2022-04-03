import React, { createContext, useState } from 'react';
import Father from '../../Father/Father';
import Aunty from '../Aunty/Aunty';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

// ====== context api
// 1. call createContext with a default value
// 2. set a variable of the context with uppercase
// 3. Make sure you export the context to use it in other places
// 4. Wrap your child content using Exa:- RingContext.provider
// 5. provide a value
// 6. to consume the context from child component 
// 7. useContext hook and you will need to pass the contextName
// 8. Make sure you take notes ......

export const RingContext = createContext('ring')

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const ornament = 'Kada Matir ring'
    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa'>
                <h4>Grandpa</h4>
                <button onClick={handleBuyAHouse}>Buy a House</button>
                <p>House: {house}</p>
                <section style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;