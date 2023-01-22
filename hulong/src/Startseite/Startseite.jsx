import "./Startseite.css"
import Xiaohu from "../Bilder/xiaohu_profile.jpg"

export default function Startseite() {
    return (
            <div className="startseiteContainer" id="StartseiteSection">
            <div>
                <div className="chinStartseite">主页</div>
                <p className="hiIchBin">Hi, ich bin</p>
                <h2>Andy "Xiaohu" Hu - <span className="JrDev" onClick={() => window.open("https://devskiller.com/de/junior-entwickler/#:~:text=Kandidaten%20f%C3%BCr%20eine%20Junior%2DEntwickler,der%20Erstellung%20von%20Software%20haben")}>Junior Developer</span></h2>
                <p>Seit 2018 gehe ich diese Tätigkeit privat, sowie 2019 beruflich an: Coden. Jeder Anfang ist schwer, aber es lohnt sich dran zu bleiben und die Erfahrungen mitzunehmen. Seit dieser Zeit, bin ich von Tag eins mit Leidenschaft dabei und werde nie ausgelernt haben. #CodingIsFuture</p>
                <ul>
                    <li onClick={() => window.open("https://www.instagram.com/xiaohu_chn")}><i class="fa fa-brands fa-instagram"></i></li>
                    <li onClick={() => window.open("https://github.com/AndyHu8")}><i class="fa fa-brands fa-github"></i></li>
                    <li onClick={() => window.open("https://www.youtube.com/channel/UCm_LK9R9h0h_Kw6MWG3H7RQ")}><i class="fa fa-brands fa-youtube"></i></li>
                    <li onClick={() => window.open("https://twitter.com/xiaohu_chn")}><i class="fa fa-brands fa-twitter"></i></li>
                </ul>
                <a href="#AboutSection"><div className="mehrErfahren">Mehr erfahren <i className="fa fa-solid fa-arrow-right"></i></div></a>
                
            </div>
            <div>
                <div className="hulongRRDiv">
                    <div className="gradient blurry"/>
                    <img src={Xiaohu} alt="Xiaohu Profil"/>
                </div>
            </div>
        </div>
    )
}