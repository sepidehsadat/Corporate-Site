import Styles from "./courses_item.module.css"
import Image from 'next/image'
import ImageItem from '../../assets/images/nodejs.png'
import Star from '../../assets/images/star.png'
import Link from "next/link"

const CoursesItem = () => {
    return (
        <>
            <div className={Styles.courses_item}>
                <div className={Styles.parent_content}>
                    <p>نود جی اس</p>
                    <p><span>نام استاد:</span><span className={Styles.gray}>بحرالعلوم</span></p>
                    <p><span>تاریخ شروع دوره:</span><span className={Styles.gray}>1402/02/20</span></p>
                    <p><span>ظرفیت:</span><span className={Styles.gray}>50</span></p>
                    <p><span>قیمت:</span><span className={Styles.gray}>2000</span></p>
                </div>
                <Image className={Styles.image_item} src={ImageItem} width={200} height={100} />
                <div className={Styles.rank}>
                    <Image className={Styles.star} src={Star} width={17} height={17} />
                    <span>4.8</span>
                </div>
                <div className={Styles.border}></div>
            </div>
        </>
    )
}
export default CoursesItem;