import "./Footer.css"
import Pdf from "../Bilder/Impressum_Hulong.pdf"

export default function Footer() {
    return (
        <div className="footerContainer">
            <div>Entwickelt mit ganz viel Liebe und "schnellem" Internet in Berlin, Deutschland.</div>
            <div className="chinFooterText">在德国柏林，用大量的爱和 "快速" 的互联网开发。</div>
            <div className="impressumFooterText" onClick={() => window.open(`${Pdf}`, '_blank')}><span>Zum Impressum</span></div>
        </div>
    )
}