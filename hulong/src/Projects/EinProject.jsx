import "./EinProject.css"

export default function EinProject(props) {
    return (
        <div className="einProjectContainer">
            <div className="einProjectHeader">
                <h2>{props.number}.</h2>
                <h2>Jahr: {props.year}</h2>
            </div>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <div>Website</div>
            <div>GitHub</div>
        </div>
    )
}