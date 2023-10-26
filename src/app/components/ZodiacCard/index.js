"use-client";

const ZodiacCard = ({zodiacId, zodiacBlurb, zodiacDates}) => {
    return (
        <div>
            <h2>{zodiacId}</h2>
            <p>{zodiacDates}</p>
            <p>{zodiacBlurb}</p>
            <p>hello</p>
        </div>
    )
}

export default ZodiacCard;