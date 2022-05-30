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
                    <div onClick={() => window.open("https://www.w3schools.com/html/", "_blank")}>HTML</div>
                    <div onClick={() => window.open("https://www.w3schools.com/css/", "_blank")}>CSS</div>
                    <div onClick={() => window.open("https://www.w3schools.com/js/", "_blank")}>JavaScript</div>
                    <div onClick={() => window.open("https://reactjs.org/", "_blank")}>React.js</div>
                    <div onClick={() => window.open("https://www.typescriptlang.org/", "_blank")}>TypeScript</div>
                    <div onClick={() => window.open("https://docs.microsoft.com/de-de/dotnet/csharp/tour-of-csharp/", "_blank")}>C#</div>
                    <div onClick={() => window.open("https://geekflare.com/de/best-css-frameworks/", "_blank")}>CSS Frameworks</div>
                    <div onClick={() => window.open("https://www.ionos.de/digitalguide/hosting/hosting-technik/was-ist-webhosting/", "_blank")}>Hosting</div>
                </div>
            </div>
        </div>
    )
}