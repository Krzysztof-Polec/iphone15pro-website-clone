import styles from "./Footer.module.scss"

const Footer = () => {
  return(
    <footer className={styles.footer}>
      <div className={styles.footerHeader}>
        <h2>iPhone</h2>
      </div>
      <div className={styles.footerContent}>
        <div>
          <h3>Explore iPhone</h3>
          <ul>
            <li className={styles.elevated}>Explore All iPhone</li>
            <li className={styles.elevated}>iPhone 15 Pro</li>
            <li className={styles.elevated}>iPhone 15</li>
            <li className={styles.elevated}>iPhone 14</li>
            <li className={styles.elevated}>iPhone 13</li>
            <li className={styles.elevated}>iPhone SE</li>
            <li className={styles.baseWithMargin}>Compare iPhone</li>
            <li>Switch from Android</li>
          </ul>
        </div>
        <div>
          <h3>Shop iPhone</h3>
          <ul>
            <li>Shop iPhone</li>
            <li>iPhone Accessories</li>
            <li>Apple Trade In</li>
            <li>Carrier Deals at Apple</li>
            <li>Financing</li>
          </ul>
        </div>
        <div>
          <h3>Go Further</h3>
          <ul>
            <li>iPhone Support</li>
            <li>AppleCare+ for iPhone</li>
            <li>iOS 18 Preview</li>
            <li>Apple Intelligence</li>
            <li>Apps by Apple</li>
            <li>iPhone Privacy</li>
            <li>iCloud+</li>
            <li>Wallet, Pay, Card</li>
            <li>Siri</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer