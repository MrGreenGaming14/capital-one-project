import './FinancialAdviceTemplate.css';

const AdviceTemplate = ({name, type, image}) => {
    return (
        <div className="adviceView">
            <img src={image} alt={name + "visual of financial tip"}></img>
            <p className="adviceName">{name}</p>
            <p className="adviceType">{type}</p>
        </div>
    );
}

export default AdviceTemplate;