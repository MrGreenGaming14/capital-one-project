import {data} from '../data/adviceData';
import {useState} from 'react';
import AdviceTemplate from './FinancialAdviceTemplate';
import './AdviceList.css';

const Advice = () => {
    return (
        <div className="container">
            <h1 className="title">Click the tiles below to learn more about your finances.</h1>
            <div className="adviceContainer">
                {data.map((advice, index) => (
                    <AdviceTemplate name={advice.name} image={advice.image} key={index}/>
                ))}
            </div>
        </div>
    );
}

export default Advice;
