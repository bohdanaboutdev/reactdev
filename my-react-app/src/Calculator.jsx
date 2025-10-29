import React, { useState } from "react";

function Display({ value }) {
    return <div className="display">{value}</div>;
}

function ButtonPanel({ onButtonClick }) {
    const buttons = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "0", ".", "=", "+"
    ];

    return (
        <div className="button-panel">
            {buttons.map((btn) => (
                <button key={btn} onClick={() => onButtonClick(btn)}>
                    {btn}
                </button>
            ))}
        </div>
    );
}

function Calculator() {
    const [input, setInput] = useState("");

    const handleButtonClick = (value) => {
        if (value === "=") {
            try {
                setInput(eval(input).toString());
            } catch (error) {
                setInput("Error");
            }
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className="calculator">
            <Display value={input} />
            <ButtonPanel onButtonClick={handleButtonClick} />
        </div>
    );
}

export default Calculator;
