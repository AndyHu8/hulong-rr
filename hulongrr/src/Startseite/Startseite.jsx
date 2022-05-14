import "./Startseite.css"
import HulongRR from "../Bilder/hulongrr.jpg"

export default function Startseite() {
    return (
        <div className="startseiteContainer">
            <div>
                <p className="hiIchBin">Hi, ich bin</p>
                <h2>Hulong RR - <span>Junior Entwickler</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In cupiditate dolor fugiat necessitatibus magnam consectetur. Ducimus magni at, aperiam error, aspernatur consequatur tenetur, explicabo iste minus velit deleniti assumenda ab!</p>
                <ul>
                    <li><i class="fa fa-brands fa-instagram"></i></li>
                    <li><i class="fa fa-brands fa-github"></i></li>
                    <li><i class="fa fa-brands fa-youtube"></i></li>
                    <li><i class="fa fa-brands fa-twitter"></i></li>
                </ul>
                <div className="mehrErfahren">Mehr erfahren <i className="fa fa-solid fa-arrow-right"></i></div>
            </div>
            <div>
                <div className="hulongRRDiv">
                    <div className="gradient blurry"/>
                    <img src={HulongRR} alt="Hulong RR Profil"/>
                </div>
            </div>
        </div>
    )
}