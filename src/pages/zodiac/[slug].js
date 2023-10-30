import { useRouter } from "next/router";
import ZodiacCard from "../../app/components/ZodiacCard";
import Data from "../../app/components/zodiacData";
import Header from "../../app/components/Header";
import AdviceCard from "../../app/components/AdviceCard";

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

  export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
    }
}

export default function ZodiacArticle({secondAPIData}) {
    const router = useRouter();
    const slug = router.query.slug;
    const zodiacData = Data.find((horoscope) => horoscope.id === slug);
    //console.log(zodiacData)
    if (!zodiacData) return null;
    return (
        <>
        <Header />
        <main>
            <div>
                <ZodiacCard 
                    key={zodiacData.id}
                    zodiacId={zodiacData.id}
                    zodiacDates={zodiacData.range}
                    zodiacBlurb={zodiacData.horoscopes}
                    zodiacLove={zodiacData.love}
                    zodiacMoney={zodiacData.money}
                />
            </div>
            <div>
              <AdviceCard todayadvice={secondAPIData.slip.advice}/>
            </div>
        </main>
        </>
    )
}