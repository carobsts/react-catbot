import React from 'react';
import './Select.css';

const Select = ({ options, handleSelectedOptions }) => {
    return (
        <div className='selector-container'>
            <div className='selector-content'>
                { options.map((option, index) =>
                    <div key={index} className='selector-options' onClick={ () => handleSelectedOptions(option.id) } >
                        <label> {option.text} </label>
                    </div>
                )}
            </div>
        </div>
    )
};

export default Select;