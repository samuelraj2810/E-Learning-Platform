import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate, Navigate } from 'react-router-dom';
import CustomButton from './Common/CustomButton';
import CustomInput from './Common/CustomInput';
import { useMessageContext } from './Common/CustomMessage';
// import forgetBg from "../Assets/Images/forgetbg.png"
import forgetBg from "../Assets/Images/forgetbg.jpg"

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const showMessage = useMessageContext()
    const navigate = useNavigate()
    message && showMessage("success",message)
    error && showMessage("error",error)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        try {
            const response = await axios.post('http://localhost:3000/forgotpassword', { email });
            setMessage(response.data.message);
            if(response.status === 200){
                navigate("/resetpass/:token")
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className='h-screen w-screen bg-gray-100 flex flex-col items-center justify-center'>
            <form className='md:h-4/5 z-40 bg-white md:w-4/5 h-full flex items-center flex-col gap-10 w-full shadow rounded-lg p-4 relative overflow-hidden'>
            <img src={forgetBg} className='-z-0 absolute bottom-0 lg:top-0 object-cover '/>
            <div className='bg-Primary/5 rounded-tl-full h-full w-1/2 absolute lg:top-0 md:top-40 right-0 top-[400px]'/>
            <h2 className='text-3xl z-10 mt-10 md:text-[40px] bg-white text-[#2b4454] lg:text-[60px] font-bold tracking-wider p-2'>Forgot Password</h2>
                <CustomInput 
                    type="email" 
                    value={email} 
                    placeholder='Enter Email'
                    titleClassName="lg:text-2xl"
                    containerClassName=" w-4/5 p-2"
                    className='p-2'
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <CustomButton title="Submit" size='large' className='bg-[#03d1bb] shadow-md shadow-[#2b4454] font-bold' color='solid' onClick={handleSubmit}>Submit</CustomButton>
            </form>
        </div>
    );
};

export default ForgotPassword;
