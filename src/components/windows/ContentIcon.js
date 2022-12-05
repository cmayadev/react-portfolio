import './ContentIcon.scss';

const ContentIcon = (props) => {

    const { name, icon } = props;

    return ( 
        <label class="file">
            <span class="image">
                <img src={`icons/${icon}.png`} /></span>
            <span class="text">{name}</span>
        </label>
    );
}

export default ContentIcon;