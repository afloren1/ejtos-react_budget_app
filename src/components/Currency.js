import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch } = useContext(AppContext);

    const changeCurrency = (value)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: value,
            })
    }
    return (
                    <div className='alert alert-secondary' style={{ backgroundColor: 'lightgreen', color: 'white' }}>
                    Currency {
                  <select className="Currency" id="Currency" onChange={(event) => changeCurrency(event.target.value)}
                  style={{ backgroundColor: 'lightgreen', width:'8rem', border: 'lightgreen' }}>
                        <option value="$">Dollar ($)</option>
                        <option value="£">Pound (£)</option>
                        <option value="€">Euro (€)</option>
                        <option value="₹">Ruppee (₹)</option>

                  </select>
                    }
                </div>
    );
    };
export default Currency; 