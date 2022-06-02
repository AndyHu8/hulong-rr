import "./EinSkill.css"

export default function EinSKill(props) {
    return (
        <div className="einSkillContainer">
            <div className="einSkillContent">
                <h3>{props.headline}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}