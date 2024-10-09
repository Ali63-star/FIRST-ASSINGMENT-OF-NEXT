import Link from "next/link";
import styles from "../service/service.module.css"

const ServicePage =() => {
    return(
        <div className ={styles.container}>
            <h1 className ={styles.header}>This is service page</h1>
<ul className ={styles.list}>
<li><Link href="/services/graphic-design">THIS IS A GRAPHIC PAGE</Link></li>
<li><Link href="/services/video-editing">THIS IS A VIDEO EDITING PAGE</Link></li>
</ul>
        </div>
    )
}
export default ServicePage;