

const DesktopIcon = (props) => {

    const { label, icon } = props;

    return ( 
        <div className="desktop-icon my-computer">
            <img src={`icons/${icon}.png`} title={label} alt={label} />{label}
        </div>
    );
}

export default DesktopIcon;