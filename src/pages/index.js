import "../app/globals.css"
import styles from "../app/page.module.css"
import Header from "../app/components/Header";

const SECOND_API = `https://api.adviceslip.com/advice`; //advice

export async function getStaticProps() {
  const responseSecondAPI = await fetch(SECOND_API);
  const secondAPIData = await responseSecondAPI.json(); // This might be different for each API
  return {
    props: {
      secondAPIData,
    },
  };
}


export default function Home({secondAPIData}) {
    return(
      <>
      <Header />
        <main>
            <h1 className={styles.landingTitle}>Take a look at your Horoscope and advice of the day!</h1>
            {/* How do I make it appear? */}
            <img className={styles.landingImg} src="https://cdn.vox-cdn.com/thumbor/dkaf9pENycqMNmke3d9rcVXBjX0=/0x0:970x970/1200x800/filters:focal(408x408:562x562)/cdn.vox-cdn.com/uploads/chorus_image/image/63379331/1200x1200_PI_horoscope._SX970._CB488496935_._SX970_.0.jpg" alt="zodiac signs"></img> 
        </main>
        </>
    );
}
