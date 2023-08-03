import {data} from '../data/adviceData';
import AdviceTemplate from './FinancialAdviceTemplate';
import './AdviceList.css';

const Advice = () => {
    return (
        <div>
            <h1 className="title">Welcome to the Banking Education App!</h1>
            <div className="advice">
                {data.map((advice, index) => (
                    <AdviceTemplate name={advice.name} type={advice.type} image={advice.img} key={index}/>
                ))}
            </div>
        </div>
    );
}

export default Advice;