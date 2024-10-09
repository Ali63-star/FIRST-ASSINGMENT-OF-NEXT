import Link from "next/link"
import styles from "../contact/contact.module.css"


const Contact = () => {
  return (
    <div className={styles.container}>
    <h1 className ={styles.header}>This is my contact page</h1>

    <ul>

<li><Link href="/"> GO TO Home PAGE</Link></li>
<li><Link href="about"> GO TO ABOUT PAGE</Link></li>
<li><Link href="services">GO TO SERVICE PAGE</Link></li>

      </ul>

    </div>
  )
}

export default Contact;