import { useState } from "react";
import "./Navigation.css"

export default function Navigation() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    
    function showNav() {
        const MobileUl = document.querySelector(".mobileNav");
        if(!isNavOpen || "") {
            MobileUl.style.display = "block";
            setIsNavOpen(true);
        }
        else {
            MobileUl.style.display = "none";
            setIsNavOpen(false);
        }
    }

    return (
        <>
        <div className="navigationContainer">
            <div onClick={() => window.location.reload()}>安迪</div>
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

        <div className="mobileNav">
            <ul>
                <div>
                    <a href="#StartseiteSection"><li className="firstLi">Startseite | 主页</li></a>
                </div>
                <div>
                    <a href="#AboutSection"><li className="firstLi">Über mich | 关于我</li></a>
                </div>
                <div>
                    <li className="firstLi">Skills | 技能</li>
                </div>
                <div>
                    <li className="firstLi">Projekte | 项目</li>
                </div>
                <div>
                    <li className="firstLi">Kontakt | 联系</li>
                </div>
            </ul>
        </div>
        </>
    )
}