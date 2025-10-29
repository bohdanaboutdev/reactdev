import React, { useState } from "react";

function Container() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <>
            <div>This is our counter Application</div>
            <div className="flex justify-center ">
                <button onClick={decrement}>-</button>
                <span>Clicks {count}</span>
                <button onClick={increment}>+</button>
            </div>
            {count === 5 && (
                <div>
                    <h2>Hi! This the table</h2>
                    <table>
                        <tr>
                            <th>Company</th>
                            <th>Contact</th>
                            <th>Country</th>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>Mexico</td>
                        </tr>
                    </table>
                </div>
            )}
        </>
    );
}

export default Container;