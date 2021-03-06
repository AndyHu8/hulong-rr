import EinSKill from "./EinSkill"
import "./Skills.css"

export default function Skills() {
    return (
        <div className="skillsContainer" id="SkillsSection">
            <div className="skillsContent">
                <div className="chinStartseite">技能</div>
                <h2>MEINE SKILLS</h2>
                <p className="aboutTextProjects">Hier sind meine Skills aufgelistet. Mit HTML habe ich gestartet und immer weiter im Frontend-Entwicklung ins Detail gegangen. Hierzu fehlt natürlich CSS nicht und auch JavaScript, sowie React. Dies sind die grundlegenden Skills, die man benötigt.
                Hier unten findest du alle Skills aufgelistet.
                </p>
                <div className="alleSkillsContainer">
                    <EinSKill headline="HTML" text="Mit HTML habe ich meine ersten Webseiten gebaut. Es ist ein Grundbaustein für die Sktruktur &amp; allgemein für die Webentwicklung."/>
                    <EinSKill headline="CSS" text="CSS habe ich als zweites gelernt, da Webseiten ohne Design einfach nicht schön aussehen. Also auch ein wesentlicher Baustein und ein Muss."/>
                    <EinSKill headline="JavaScript" text="JavaScript, auch JS genannt, habe ich später gelernt, da ich Webseiten, zur Darstellung von Informationen, erstellt habe. Trotzdem ist dies auch ein wichtiger Teil der Webentwicklung."/>
                    <EinSKill headline="React.js" text="React habe ich das erste mal in meiner beruflichen Laufbahn erlernt und seitdem alles in React &amp; mit React-Components geschrieben. Auch diese Website wurde mit React erstellt."/>
                    <EinSKill headline="TypeScript" text="TypeScript oder auch TS habe ebenfalls in der beruflichen Linie erlernt. Dies bringt aufjedenfall viele Vorteile mit sich."/>
                    <EinSKill headline="C#" text="C# oder auch CSharp habe ich als erstes in meiner Ausbildung, im beruflichen als auch im schulischen gelernt. Für die Arbeit essentiell."/>
                    <EinSKill headline="Frameworks" text="CSS Frameworks habe ich etwas später als CSS angeschaut. Erst im Beruf bin ich drauf gestoßen. Dies vereinfacht das Schreiben von CSS &amp; ist für den User auch gut anzusehen."/>
                    <EinSKill headline="Git" text="Git ist eine Versionsverwaltung für die Zusammenarbeit innerhalb eines Teams. Dies habe ich während meiner Ausbildung gut gelernt. Dadurch können Teams effizienter zsm. arbeiten."/>
                    <EinSKill headline="Hosting" text="Hosting habe ich erst gelernt, als ich meine ersten Websiten gebaut habe. Diese müssen ja irgendwo gehostet werden. Somit musste ich mir auch diesen Skill aneignen."/>
                </div>
            </div>
        </div>
    )
}