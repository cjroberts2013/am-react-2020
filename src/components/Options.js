import React from 'react';
import Option from './Option'

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions} >Remove All Options</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            <div>
                {props.options.map((x, i) => (
                    <Option
                        key={i}
                        optionText={x}
                        handleDeleteOption={props.handleDeleteOption} />
                ))}
            </div>
        </div>
    )
}

export default Options