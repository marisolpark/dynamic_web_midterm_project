import { useRouter } from "next/router";
import ZodiacCard from "../../app/components/ZodiacCard";
import Data from "../../app/components/zodiacData";
import Header from "../../app/components/Header";

export default function ZodiacArticle() {
    const router = useRouter();
    const slug = router.query.slug;
    const zodiacData = Data.find((horoscope) => horoscope.id === slug);
    console.log(zodiacData)
    if (!zodiacData) return null;

    return (
        <>
        <Header />
        <main>
            <div>
                <ZodiacCard 
                    key={zodiacData.id}
                    zodiacId={zodiacData.id}
                    zodiacDate={zodiacData.range}
                    zodiacBlurb={zodiacData.horoscopes}
                />
            </div>
        </main>
        </>
    )
}