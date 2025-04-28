import React from 'react';

const Orders = () => {
    return (
        <div className='max-w-sm  mx-auto mt-12'>
            <h2 className='text-2xl text-center pb-3'> Your Order Lists.</h2>
            <div className='rounded-2xl shadow-2xl'>
                <ol className='text-left grid grid-cols-3 p-3'>
                    <li>item- 1</li>
                    <li>item- 2</li>
                    <li>item- 3</li>
                    <li>item- 4</li>
                    <li>item- 5</li>
                    <li>item- 6</li>
                    <li>item- 7</li>
                    <li>item- 8</li>
                    <li>item- 1</li>
                    <li>item- 2</li>
                    <li>item- 3</li>
                    <li>item- 4</li>
                    <li>item- 5</li>
                    <li>item- 6</li>
                    <li>item- 7</li>
                    <li>item- 8</li>
                </ol>
            </div>
        </div>
    );
};

export default Orders;