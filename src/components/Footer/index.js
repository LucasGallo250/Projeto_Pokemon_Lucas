import style from './style.module.css'

const Footer = ({footerText}) => {
    return(
        <>
            <footer className={style.footerbg}>      
                <p>{footerText}</p>
            </footer>
        </>
    )
}
//linha 7: <p>Direitos Resevados | Div Magalu | Lucas Gallo</p>
export default Footer;