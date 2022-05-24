export default function EinProject(props) {
    return (
        <div className="einProjectContainer">
            <div>
                <h2>{props.number}</h2>
                <h2>{props.year}</h2>
            </div>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <div>GitHub</div>
            <div>Website</div>
        </div>
    )
}