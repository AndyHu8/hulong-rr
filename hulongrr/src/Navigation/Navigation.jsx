import "./Navigation.css"

export default function Navigation() {
    
    function showNav() {
        const MobileUl = document.querySelector(".mobileNav");
        const MobileBg = document.querySelector(".mobileNavContainer");
        MobileBg.style.display = "block";
        MobileUl.style.display = "block";
    }

    return (
        <>
        <div className="navigationContainer">
            <div>胡龙日日</div>
            <ul>
                <div>
                    <li className="firstLi">Startseite</li>
                    <li className="secondLi">主页</li>
                </div>
                <div>
                    <li className="firstLi">Über mich</li>
                    <li className="secondLi">关于我</li>
                </div>
                <div>
                    <li className="firstLi">Skills</li>
                    <li className="secondLi">技能</li>
                </div>
                <div>
                    <li className="firstLi">Projekte</li>
                    <li className="secondLi">项目</li>
                </div>
                <div>
                    <li className="firstLi">Kontakt</li>
                    <li className="secondLi">联系</li>
                </div>
            </ul>
            <div className="burger" onClick={showNav}><i className="fa fa-solid fa-bars"></i></div>
        </div>

        <div className="mobileNavContainer"></div>
        <div className="mobileNav">
            <ul>
                <div>
                    <li className="firstLi">Startseite</li>
                    <li className="secondLi">主页</li>
                </div>
                <div>
                    <li className="firstLi">Über mich</li>
                    <li className="secondLi">关于我</li>
                </div>
                <div>
                    <li className="firstLi">Skills</li>
                    <li className="secondLi">技能</li>
                </div>
                <div>
                    <li className="firstLi">Projekte</li>
                    <li className="secondLi">项目</li>
                </div>
                <div>
                    <li className="firstLi">Kontakt</li>
                    <li className="secondLi">联系</li>
                </div>
            </ul>
        </div>
        </>
    )
}