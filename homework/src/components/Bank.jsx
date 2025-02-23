import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { depositAction, withdrawAction } from '../redux/bankSlice';

export const Bank = () => {
    const dispatch = useDispatch();
    const [depositAmount, setDepositAmount] = useState(0);
    const [withdrawAmount, setWithdrawAmount] = useState(0);
    const depositHandler = () => {
        dispatch(depositAction(parseInt(depositAmount)));
    }
    const withdrawHandler = () => {
        dispatch(withdrawAction(parseInt(withdrawAmount)));
    }
    return (
        <div className='w-1/2 flex flex-col justify-center'>
            <h1 className='text-3xl'>Bank System</h1>
            <div className='flex flex-col'>
                <h2 className='text-2xl'>Deposit Amount</h2>
                <input type='text' className='border-2 rounded p-1' onChange={(e) => { setDepositAmount(e.target.value) }}></input>
                <button type='' className='border-2 rounded' onClick={() => { depositHandler() }}>Deposit</button>
            </div>
            <div>
                <h2 className='text-2xl'>Withdraw Amount</h2>
                <input type='text' className='border-2 rounded p-1' onChange={(e) => { setWithdrawAmount(e.target.value) }}></input>
                <button type='' className='border-2 rounded' onClick={() => { withdrawHandler() }}>Withdraw</button>
            </div>
        </div>
    )
}
