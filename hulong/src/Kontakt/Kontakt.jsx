import "./Kontakt.css"

export default function Kontakt() {
    return (
        <div className="kontaktContainer" id="KontaktSection">
            <div className="chinStartseite">项目</div>
            <h2>KONTAKT</h2>
            <p className="aboutTextProjects">Kontaktiere mich hier unter diese folgenden Social Media Kanälen. Feedback sowie Anfragen sind gerne willkommen.
            Allerdings bin ich bei manchen mehr aktiv, als bei anderen. "Instagram" ist dabei die Top 1. Also gerne da anschreiben, aber auch bei den restlichen Kanälen.
            </p>
            <ul>
                <li onClick={() => window.open("https://www.instagram.com/_hulong")}><i class="fa fa-brands fa-instagram"></i></li>
                <li onClick={() => window.open("https://github.com/AndyHu8")}><i class="fa fa-brands fa-github"></i></li>
                <li onClick={() => window.open("https://www.youtube.com/channel/UCm_LK9R9h0h_Kw6MWG3H7RQ")}><i class="fa fa-brands fa-youtube"></i></li>
                <li onClick={() => window.open("https://twitter.com/hulong_")}><i class="fa fa-brands fa-twitter"></i></li>
            </ul>
        </div>
    )
}