import Styles from "./authorization.module.css"
import Facebook from "../../assets/images/facebook.png"
import Search from "../../assets/images/search.png"
import Image from "next/image";

const Authorization = () => {
    return (
        <>
            <div className={Styles.border}>
                <span>یا</span>
            </div>
            <div className={Styles.icons_login}>
                <Image src={Facebook} width={32} height={32} />
                <Image src={Search} width={32} height={32} />
            </div>
        </>
    )
}
export { Authorization };