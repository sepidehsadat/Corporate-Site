import Styles from "./search.module.css"
import Image from 'next/image'
import SearchIcon from '../../assets/images/search_icon.png'

const Search = () => {
    return (
        <div className={Styles.search}>
            {/* <span>search2</span> */}
            <input className={Styles.input_search} type="text" placeholder="جستوجو دوره" />
            <a className={Styles.btn_search} href="#">
                <Image className={Styles.searchImg} src={SearchIcon} width={22} height={22} />
            </a>
        </div>
    )
}
export default Search;