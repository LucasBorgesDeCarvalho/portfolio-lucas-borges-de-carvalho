import Image from "next/image"

const DevImg = ({containerStyles, imgSrc}) => {
    return <div className={`${containerStyles}`}>
        <Image src={imgSrc} fill property alt=""/>
    </div>;

    
}

export default DevImg