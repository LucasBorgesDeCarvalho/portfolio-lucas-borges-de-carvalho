import Link from "next/link"

import Image from "next/image"
/*Trocar a LOGO*/
const Logo = () => {
    return (
        <Link href={'/'}>
            <Image src='/logo.jpg' width={54} height={54} priority alt='' style={{ borderRadius: '50%' }}/>
        </Link>
    )
}

export default Logo