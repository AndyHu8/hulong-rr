import "./About.css"
import EinHobby from "./EinHobby"

export default function About() {
    return (
        <div className="aboutContainer" id="AboutSection">
            <div className="chinStartseite">关于我</div>
            <h2>WHO IS <span>HU</span> ?</h2>
            <p className="aboutText">Mein Name lautet Andy "Xiaohu" Hu.<br/>
            Ich bin zurzeit, wo ich diese Website entwickelt habe, 23 Jahre alt. Bin in Berlin aufgewachsen, aber komme ursprünglich aus China, "das Land der Mitte". Das Coden tue ich mittlerweile schon mehrere Jahre und bin immernoch mit Leidenschaft bei der Sache.
            Neben dem Coden, spiele ich auch liebend gern Online Games, höre gefühlt 24/7 Deutschrap und betätige mich sportlich. Das darf bei so einem Job natürlich nicht fehlen!
            </p>
            <p className="top1">Hier sind die Top 1 der jeweiligen Hobbys aufgelistet</p>
            <div className="downIconContainer">
                <div><i className="fa fa-solid fa-arrow-down"></i></div>
            </div>
            <div className="hobbysContainer">
                <EinHobby klasse="einHobbyContainer" logo={<i class="fa fa-solid fa-headset"></i>} headline="League of Legends" text="Video Games spiele ich schon lange. Alles hat mit den früheren Call of Dutys angefangen bis hinzu Star Wars auf der PS3. Dazwischen war das eine Spiel, dass ich mittlerweile seit 2012 spiele: League of Legends. Wenn du mehr darüber erfahren möchtest, gehe auf den Link hier unten." link="https://www.leagueoflegends.com/de-de/"/>
                <EinHobby klasse="einHobbyContainerMittel" logo={<i class="fa fa-brands fa-spotify"></i>} headline="RAF Camora" text="Deutschrap habe ich früher gar nicht gehört, es war wahrscheinlich auch nicht im Trend. Aber ab einem Zeitpunkt habe ich immer gehört: Das Lied Kontrollieren von Bonez MC &amp; RAF Camora feat. Gzuz &amp; Maxwell im Jahre 2017. Seit dem höre ich gefühlt nur noch Deutschrap &amp; besonders den Künstler: RR. Höre hier die Lieder von ihm an." link="https://open.spotify.com/artist/0Dvx6p8JDyzeOPGmaCIH1L"/>
                <EinHobby klasse="einHobbyContainer" logo={<i class="fa fa-solid fa-dumbbell"></i>} headline="Fitness" text="Früher hat man noch Fußball gespielt, aber heutzutage ist Fitness ein Trend geworden. Auch bei der jungen Generation. Knapp nach meiner Pubertät, habe ich mit dem Kraftsport angefangen und bis heute es in meinem Alltag intergriert. Tue auch du was für dein Körper." link="https://www.mcfit.com/de/"/>
            </div>
        </div>
    )
}