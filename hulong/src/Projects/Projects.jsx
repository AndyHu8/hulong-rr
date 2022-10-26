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
                    <EinProject number="1" year="2018" title="Hongkong-Haus" text="Meine erste Website, die ich entwickelt habe. Diese Website soll den Online-Auftritt einer familiärischen Gaststätte darstellen. Zur dieser Zeit habe ich dadurch viele Erfahrungen sammeln können. Also mach einfach und falls du Fehler machst, lerne daraus!" websiteLink="https://www.hongkonghaus.de/" githubLink="https://github.com/AndyHu8/HongKong-Haus-Website"/>
                    <EinProject number="2" year="2021" title="Hulong Official" text="Hulong war mein erster Künstlername &amp; auch meine erste eigene Website. Dies war das zweite Projekt, was ich mit dem CSS-Framework 'Bulma' und teils JavaScript entwickelt habe.
                    Aus meinen eigenen Erfahrungen kann ich dieses Framework echt weiterempfehlen, da es einfach zu benutzen ist und gestalterig recht gut aussieht." websiteLink="https://hulongofficial.de/" githubLink="https://github.com/AndyHu8/Hulong-Website"/>
                    <EinProject number="3" year="2021" title="三合会 Triaden" text="Diese Website habe ich nur aus Interesse erstellt. Da ich mich für die chinesische Mafia interessiere, habe ich mir gedacht, darüber eine eigene Informationsseite zu erstellen. Dadurch konnte ich wieder viele Erfahrungen sammeln &amp; hier ein neues Projekt hinzufügen." websiteLink="https://triaden.netlify.app/" githubLink="https://github.com/AndyHu8/Triaden-Website"/>
                    <EinProject number="4" year="2021" title="Deep Triads" text="Eine weitere Seite der Triaden wurde erstellt. Hierbei geht es um Informationen, die nicht allzu bekannt sind. Auch diese Seite dient nur zur Informations- und Erfahrungsgewinnung." websiteLink="https://deeptriads.netlify.app/" githubLink="https://github.com/AndyHu8/DeepTriads"/>
                    <EinProject number="5" year="2022" title="RAF Camora RR" text="Diese Seite soll einen kleinen Einblick in dem Künstler RAF Camora verschaffen. Ich habe hier seine Biografie, sowie seine Alben &amp; Social Media Links dargestellt, und zwar im Stil von seinen Webseiten, die im Internet zu finden sind." websiteLink="https://raf-camora-rr.netlify.app/" githubLink="https://github.com/AndyHu8/raf-camora"/>
                    <EinProject number="6" year="2022" title="Planet Camora RR" text="Das ist ein Klon von einer Website im Namen von dem Künstler RAF Camora. Er hat im Jahre 2022 ein neues NFT-Projekt ins Leben gerufen &amp; dafür auch eine Seite erstellen lassen. Als Übung für mich, habe ich diese nachgebaut." websiteLink="https://planet-camora-rr.netlify.app/" githubLink="https://github.com/AndyHu8/planet-camora-rr"/>
                    <EinProject number="7" year="2022" title="Xiaohu 小胡" text="Diese Seite ist diese, die du dir gerade hier anschaust. Es ist eine Version 2.0 von meiner alten eigenen Webiste 'Hulong Official'." websiteLink="https://xiaohu.netlify.app/" githubLink="https://github.com/AndyHu8/hulong-rr"/>
                </div>
            </div>
        </div>
    )
}