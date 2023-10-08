import React, {useState} from 'react'
import { IncrStyle } from './style';

const IncrDecrUseState = () => {
    const [count, setCount] = useState(0);
    document.title = `ReactApp(${count})`;
    return (
        <>
            <IncrStyle>
                <div className="center_div">
                    <h2 className='text-center' style={{color: "#fff"}}>useState</h2>
                    <p>{count}</p>
                    <div class="button2" onClick={() => setCount(count > 0 ?count - 1 : 0)}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        DECR
                    </div>
                    <div class="button2" onClick={() => setCount(count + 1)}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        INCR
                    </div>
                </div>
            </IncrStyle>
        </>
    )
}

export default IncrDecrUseState