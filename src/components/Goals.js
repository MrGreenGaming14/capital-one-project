import React, {useState} from 'react';
import { Line, Circle } from 'rc-progress';

let whatToSave = 40;
let saved;

const GoalInput = ({onProgressChange}) => {


    const [details, setDetails] = useState ({
        whatToSave,
        saved
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setDetails((prev) => {
            return {...prev, [name]: value}
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(details)
        whatToSave = details.whatToSave;
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>How much to you want to save: </h3> {" "} 
            <input type="number" name="whatToSave" onChange={handleChange}/>
            <h3>How much have you saved already: </h3> {" "}
            <input type="number" name="saved" onChange={handleChange}/>
            <button type="submit">Submit Form</button> 
    </form>
    );
};

export default GoalInput;
export {
    whatToSave
};

