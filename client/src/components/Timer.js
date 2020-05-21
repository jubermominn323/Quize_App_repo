import React, { useState } from 'react';

const Timer = () => {
    const { count , setCount } = useState(10);

    return (
        <div>
            <h1> Time : { setCount (count-1) } </h1>
        </div>
        )
}
export default Timer;