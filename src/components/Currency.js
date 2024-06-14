import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {currency, dispatch } = useContext(AppContext);

    const changeCurrency = (newCurrency)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: newCurrency,
            })
    }
    return (
                    <div className='alert alert-secondary'>
                    <span>Currency {Currency}</span>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => changeCurrency(event.target.value)}>
                        <option value="$">Dollar($)</option>
                        <option value="£">Pound(£)</option>
                        <option value="€">Euro(€)</option>
                        <option value="₹">Ruppee(₹)</option>

                  </select>
                </div>
    );
    };
export default Currency; 