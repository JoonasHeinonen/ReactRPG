const CharacterPickValue = (props) => {
    return (
        <div>
            <p className="skillValue"><b>{props.name}:</b> {props.value}</p>
        </div>
    );
}

export default CharacterPickValue;