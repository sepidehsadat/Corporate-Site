import Styles from "./button.module.css"
const Button = ({ onclick, title, type }) => {
    return (
        <button type={type} className={Styles.button} onClick={onclick}>{title}</button>
    )
}
export { Button };