import styles from "./Ios17Section.module.scss"
import ios17Img from "../../images/ios17.avif"

const Ios17Section = () => {
  return(
    <section className={styles.ios17Section}>
      <div className={styles.ios17SectionHeader}>
        <h3>iOS 17.</h3>
        <h4>Style it out. Swap it over. Sticker it up.</h4>
      </div>
      <div className={styles.ios17SectionContent}>
        <div className={styles.imgWrapper}>
          <img src={ios17Img} alt="Screens from iOS 17 features being shown including Contact Poster, NameDrop, and Live Stickers"></img>
        </div>
      </div>
      <div className={styles.ios17SectionInformations}>
        <p><span>Contact Poster.</span> Create your own poster that contacts will see when you call. Pick a favorite pic or Memoji, pair it with a favorite font, and there you have it — your very own calling card.</p>
        <p><span>NameDrop.</span> Want to swap contact info with someone? Just bring your iPhone close to theirs. You can both choose what you want to share, and the information transfers instantly.</p>
        <p><span>Live Stickers.</span> Touch and hold an object in a photo to lift it from the background and create a sticker. Add effects like Puffy and Shiny. Or create animated stickers from Live Photos.</p>
      </div>
      <div className={styles.ios17SectionCta}>
        <button>
          <p>Find out more about iOS 17</p>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 
              224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 
              32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
            />
          </svg>
          </div>
        </button>
      </div>
    </section>
  )
}

export default Ios17Section