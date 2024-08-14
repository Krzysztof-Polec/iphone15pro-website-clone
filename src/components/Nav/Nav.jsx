import appleImg from "../../images/apple.svg"
import bagImg from "../../images/bag.svg"
import searchImg from "../../images/search.svg"
import hamburgerImg from "../../images/hamburger.svg"
import styles from "./Nav.module.scss"

const Nav = () => {
  return(
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <img src={appleImg} alt="Apple"></img>
        <div>
          <ul>
            <li>Store</li>
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Watch</li>
            <li>Vision</li>
            <li>AirPods</li>
            <li>TV & Home</li>
            <li>Entertainment</li>
            <li>Accessories</li>
            <li>Support</li>
          </ul>
        </div>
        <div className={styles.navIcons}>
          <img src={searchImg} alt="search"></img>
          <img src={bagImg} alt="bag"></img>
          <img src={hamburgerImg} alt="hamburger"></img>
        </div>
      </div>
    </nav>
  )
}

export default Nav