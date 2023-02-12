import { useState } from "react";
import "./Navigation.css"
import Logo from "../Bilder/xh_logo.jpg"

export default function Navigation() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    function showNav() {
        const MobileUl = document.querySelector(".mobileNav");
        const burgerIcon = document.querySelector(".burger");
        if (!isNavOpen || "") {
            MobileUl.style.display = "block";
            setIsNavOpen(true);
            burgerIcon.classList.add("logoRotate");
        }
        else {
            MobileUl.style.display = "none";
            setIsNavOpen(false);
            burgerIcon.classList.remove("logoRotate");
        }
    }

    return (
        <>
            <div className="navigationContainer">
                <div className="xhlogo_div" onClick={() => window.location.reload()}>
                    <img className="xhlogo" src={Logo} alt="XH 187" />
                </div>
                <ul>
                    <div>
                        <a href="#StartseiteSection"><li className="firstLi">Startseite</li></a>
                        <a href="#StartseiteSection"><li className="secondLi">主页</li></a>
                    </div>
                    <div>
                        <a href="#AboutSection"><li className="firstLi">Über mich</li></a>
                        <a href="#AboutSection"><li className="secondLi">关于我</li></a>
                    </div>
                    <div>
                        <a href="#SkillsSection"><li className="firstLi">Skills</li></a>
                        <a href="#SkillsSection"><li className="secondLi">技能</li></a>
                    </div>
                    <div>
                        <a href="#ProjectsSection"><li className="firstLi">Projekte</li></a>
                        <a href="#ProjectsSection"><li className="secondLi">项目</li></a>
                    </div>
                    <div>
                        <a href="#PreiseSection"><li className="firstLi">Preise</li></a>
                        <a href="#PreiseSection"><li className="secondLi">价格</li></a>
                    </div>
                    <div>
                        <a href="#KontaktSection"><li className="firstLi">Kontakt</li></a>
                        <a href="#KontaktSection"><li className="secondLi">联系</li></a>
                    </div>
                </ul>
                <div className="burger" onClick={showNav}><i className="fa fa-solid fa-bars"></i></div>
            </div>

            <div className="mobileNav">
                <ul>
                    <div>
                        <a href="#StartseiteSection"><li className="firstLi">Startseite</li></a>
                    </div>
                    <div>
                        <a href="#AboutSection"><li className="firstLi">Über mich</li></a>
                    </div>
                    <div>
                        <a href="#SkillsSection"><li className="firstLi">Skills</li></a>
                    </div>
                    <div>
                        <a href="#ProjectsSection"><li className="firstLi">Projekte</li></a>
                    </div>
                    <div>
                        <a href="#PreiseSection"><li className="firstLi">Preise</li></a>
                    </div>
                    <div>
                        <a href="#KontaktSection"><li className="firstLi">Kontakt</li></a>
                    </div>
                </ul>
            </div>
        </>
    )
}