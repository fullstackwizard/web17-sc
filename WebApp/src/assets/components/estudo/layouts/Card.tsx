import './Card.css';


const CardComponent = (props) => {

    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || 'F00',
    }
    return (
        <div className='Card' style={cardStyle}>
            <div className='Title'>{ props.title }</div>
            <div className='Content' >
                {props.children}
            </div>
        </div>
    );
};

export default CardComponent;
