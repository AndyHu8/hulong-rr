import "./EinPreis.css"

export default function EinPreis(props) {
    return (
        <div className="einPreisContainer">
            <h2>{props.headline}</h2>
            <p>Einmalig</p>
            <h2 className={props.blur ? "blur" : "preis"}>{props.preis},-€</h2>
            <p className="desc">{props.desc}</p>
        </div>
    )
}