import "./EinHobby.css"

export default function EinHobby(props) {
    return (
        <div className={props.klasse}>
            <div className="logo">{props.logo}</div>
            <h2>{props.headline}</h2>
            <p>{props.text}</p>
            <div className="mehrInfos" onClick={() => window.open(`${props.link}`)} >Mehr erfahren <i className="fa fa-solid fa-arrow-right"></i></div>
        </div>
    )
}