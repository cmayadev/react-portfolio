import './ContentIcon.scss';

const ContentIcon = (props) => {

    const { name, icon } = props;

    const style = { "--icon-image": `url('/icons/${icon}.png')` };

    return (
        <div className='file-icon'>
            <div className='icon-wrapper'>
                <img src={`icons/${icon}.png`} alt={name} />
                <div className={'selection-effect ' + icon} style={style}></div>
            </div>
            <div className="title">{name}</div>
        </div>
    );
}

export default ContentIcon;