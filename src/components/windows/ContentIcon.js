import './ContentIcon.scss';

const ContentIcon = (props) => {

    const { name, icon } = props;

    return ( 
        <label className="file">
            <span className="image">
                <img src={`icons/${icon}.png`} alt={name} /></span>
            <span className="text">{name}</span>
        </label>
    );
}

export default ContentIcon;