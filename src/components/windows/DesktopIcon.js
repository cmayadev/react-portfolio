

const DesktopIcon = (props) => {

    const { label, icon } = props;

    return ( 
        <div className="desktop-icon my-computer">
            <img src={`https://win98icons.alexmeub.com/icons/png/${icon}.png`} title={label}/>{label}
        </div>
    );
}

export default DesktopIcon;