// Функциональный компонент
import React, { useEffect, useState } from "react"

export const Counter = ({ randomNumber }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {/*отработает при монтировании*/
        console.log('отработает при монтировании');
        return () => {
            console.log('отработает на монтирование компонентов');
        }
    }, []);

    useEffect(() => {/*отработает и при монтировании и при каждом обновлении*/
        console.log('отработает при монтировании и при каждом обновлении');
        return () => {
            console.log('отработает на размонтирование компонентов');
        }
    });

    useEffect(() => {/*отработает при монтировании и при изменении переменной count*/
        console.log('отработает при монтировании и при изменении переменной count');
        return () => {
            console.log('отработает на размонтирование компонентов');
        }
    }, [count]);

    useEffect(() => {/*отработает при монтировании и при изменении переменной count*/
        console.log('отработает при монтировании и при изменении переменной randomNumber');
        return () => {
            console.log('отработает на размонтирование компонентов');
        }
    }, [randomNumber]);

    useEffect(() => {/*отработает при монтировании и при изменении переменной count*/
        console.log('отработает при монтировании и при изменении переменной count + randomNumber');
        return () => {
            console.log('отработает на размонтирование компонентов');
        }
    }, [count, randomNumber]);

    useEffect(() => {/*отработает на монтирование компонентов*/
        return () => {
            console.log('отработает на размонтирование компонентов');
        }
    }, []);

    return (
        <div>
            <h4>{count}</h4>
            <button onClick={() => setCount(count + 1)}>Click!</button>
            <div>{randomNumber}</div>
        </div>
    )


}

//Классовый компонент (в классовом хуки не работают)
// import React from "react";

// export class Counter extends React.Component {
//     state = { count: 0, };

//     clickIncrease = () => this.setState({ count: this.state.count + 1 }) /* увеличить значение в каунтере */
//     // clickDecrease = () => this.setState({ count: this.state.count - 1 }) /* уменьшить значение в каунтере */

//     render() {
//         return (
//             <div>
//                 <h4>{this.state.count}</h4>
//                 <button onClick={this.clickIncrease}>
//                     Click!
//                 </button>
//             </div >
//         );
//     }
// }