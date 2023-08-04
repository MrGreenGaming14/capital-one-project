import React from 'react';
import { data } from '../data/adviceData';
import { Link } from 'react-router-dom';
import AdviceTemplate from './FinancialAdviceTemplate';
import './AdviceList.css';

const testIng = {
    title: 'Contact: ',
    email: 'email: xxx@gmail.com',
    Github: ' Github: ',
    linkedin: 'linkedin: '
};

const Advice = () => {
  return (
    <div className="container">
      <h1 className="title">Click the tiles below to learn more about your finances.</h1>
      <div className="adviceContainer">
        {data.map((advice, index) => (
          <Link to={advice.web} key={index}>
            <AdviceTemplate name={advice.name} image={advice.image} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Advice;

// import {data} from '../data/adviceData';
// import {useState} from 'react';
// import AdviceTemplate from './FinancialAdviceTemplate';
// import './AdviceList.css';
// import {Link} from 'react-router-dom';

// const Advice = () => {
//     return (
//         <div className="container">
//             <h1 className="title">Click the tiles below to learn more about your finances.</h1>
//             <div className="adviceContainer">
//                 {data.map((advice, index) => (
//                     <AdviceTemplate name={advice.name} image={advice.image} key={index}/>
//                 ))}



//             </div>
//         </div>
//     );
// }

// export default Advice;

{/* <div className="links">
<Link to= web> </Link>
<Link to="/transactions">Transactions</Link>
<Link to="/advice">Financial Advice</Link>
<Link to="/goals">Goals</Link>
</div> */}