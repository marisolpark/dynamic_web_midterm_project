import "../app/globals.css"
import AdviceCard from "../app/components/AdviceCard";
import ZodiacCard from "../app/components/ZodiacCard";
import Data from "../app/components/zodiacData";
import Header from "../app/components/Header";

const sign = "Aries"
const day = "Today"
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
    console.log(secondAPIData)
    return(
      <>
      <Header />
        <main>
            <h1>Horoscope and advice of the day!</h1>
            {Data.map ((horoscope) => (
              <ZodiacCard 
                key={horoscope.id}
                zodiacId={horoscope.id}
                zodiacDate={horoscope.range}
                zodiacBlurb={horoscope.horoscopes}
              />
            ))}
            <p>Click around the header to your Zodiac sign to check out your horoscope and your advice for the day!</p>
            <AdviceCard
              todayadvice={secondAPIData.slip.advice}
            />
        </main>
        </>
    );
}
