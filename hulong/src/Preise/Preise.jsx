import "./Preise.css"
import EinPreis from "./EinPreis"

export default function Preise() {
    return (
        <div className="preiseContainer" id="PreiseSection">
            <div className="chinStartseite">价格</div>
            <h2>PREISE</h2>
            <p className="aboutTextProjects">Hier sind die Preise & dementsprechende Leistungen aufgelistet. Wenn du einer dieser Dienstleistungen in Anspruch nehmen möchtest,
            dann kontaktiere mich gerne unter dem Reiter "Kontakt". Ich freue mich auf deine Nachricht!</p>

            <div className="preisUebersicht">
                <h2>Preisübersicht</h2>
                <div className="flexContainer">
                    <EinPreis headline="One Pager" preis="10" desc="Das ist eine Beschreibung."/>
                    <EinPreis headline="Normale Website" preis="10" desc="Das ist eine Beschreibung."/>
                    <EinPreis headline="Online Shop" preis="10" desc="Das ist eine Beschreibung."/>
                </div>
            </div>
        </div>
    )
}