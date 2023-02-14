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
                <div className="flexContainer">
                    <EinPreis headline="OnePager" preis="mind. 10" blur={false} desc="OnePager sind Webseiten, wie diese. Sie sind simpel angeordnet & der ganze Content ist auf einer übersichtlichen Seite aufgebaut. Solche sind ideal für User, die nicht vom Thema abschweifen sollen, in Unterseiten nicht verlaufen sollen & den Lesefluss nicht stören sollen."/>
                    <EinPreis headline="Homepage" preis="mind. 15" blur={false} desc="Homepages mit Unterseiten sind gut geeignet für ausführlichen Inhalten, die ein Thema tiefer durchdringen. Außerdem schließt diese Art die Zielgruppe ältere Menschen ein. Diese sind oft mit Menüs groß geworden. Sie erwarten “unten auf einer Seite” keine anderen Themen als oben."/>
                    <EinPreis headline="Online Shop" preis="mind. 25" blur={true} desc="Bald verfügbar."/>
                </div>
                <br />
                <p>Falls Sie zurzeit eine Website benötigen & diese Preise in Ordnung sind, zögern Sie nicht mich zu kontaktieren. Meine Kontakte finden Sie einen Reite drunter.</p>
            </div>
        </div>
    )
}