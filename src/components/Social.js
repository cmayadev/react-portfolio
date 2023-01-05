const Social = (props) => {

    const { name, slug, link } = props.social;

    return ( 
        <li>
            <a href={link} title={name} target="_blank" rel="noreferrer">
                <img src={`socials/${slug}.svg`} alt={name} width="30px" height="30px" />
            </a>
        </li>
    );
}

export default Social;