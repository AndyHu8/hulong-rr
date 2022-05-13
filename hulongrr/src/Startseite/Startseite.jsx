import "./Startseite.css"
import HulongRR from "../Bilder/hulongrr.jpg"

export default function Startseite() {
    return (
        <div className="startseiteContainer">
            <div>
                <h2>Hulong RR - <span>Junior Entwickler</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In cupiditate dolor fugiat necessitatibus magnam consectetur. Ducimus magni at, aperiam error, aspernatur consequatur tenetur, explicabo iste minus velit deleniti assumenda ab!</p>
                <div className="mehrErfahren">Mehr erfahren</div>
            </div>
            <div>
                <div className="hulongRRDiv">
                    <div className="gradient blurry"/>
                    <img src={HulongRR} alt="Hulong RR Profil" />
                </div>
            </div>
        </div>
    )
}