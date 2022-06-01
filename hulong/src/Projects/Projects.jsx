import EinProject from "./EinProject"
import "./Projects.css"

export default  function Projects() {
    return (
        <div className="projectsContainer" id="ProjectsSection">
            <div className="projectsContent">
            <div className="chinStartseite">项目</div>
            <h2>MEINE PROJEKTE</h2>
            <p className="aboutTextProjects">Hier sind meine Projekte aufgelistet. Die Projekte sind nach der Reihenfolge, die ich diese umgesetzt habe, auch mit einer Nummer gekennzeichnet. Hinzu kommt noch das Jahr, wo es entstand und eine kleine Beschreibung. Zum Abschluss natürlich der Link zur jeweiligen Website &amp; zum Code behind auf Github.
            </p>
                <div className="projectsSlider">
                    <EinProject number="1" year="2000" title="Hongkong-Haus" text="Hier sind meine Projekte aufgelistet. Die Projekte sind nach der Reihenfolge, die ich diese umgesetzt habe, auch mit einer Nummer gekennzeichnet. Hinzu kommt noch das Jahr, wo es entstand und eine kleine Beschreibung. Zum Abschluss natürlich der Link zur jeweiligen Website &amp; zum Code behind auf Github." />
                    <EinProject number="1" year="2000" title="Hongkong-Haus" text="Hier sind meine Projekte aufgelistet. Die Projekte sind nach der Reihenfolge, die ich diese umgesetzt habe, auch mit einer Nummer gekennzeichnet. Hinzu kommt noch das Jahr, wo es entstand und eine kleine Beschreibung. Zum Abschluss natürlich der Link zur jeweiligen Website &amp; zum Code behind auf Github." />
                    <EinProject number="1" year="2000" title="Hongkong-Haus" text="Hier sind meine Projekte aufgelistet. Die Projekte sind nach der Reihenfolge, die ich diese umgesetzt habe, auch mit einer Nummer gekennzeichnet. Hinzu kommt noch das Jahr, wo es entstand und eine kleine Beschreibung. Zum Abschluss natürlich der Link zur jeweiligen Website &amp; zum Code behind auf Github." />
                </div>
            </div>
        </div>
    )
}