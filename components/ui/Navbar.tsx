import Image from "next/image"
import NextLink from "next/link"
import { Text, useTheme, Spacer, Link } from "@nextui-org/react"

export const Navbar = () => {

    const{theme} = useTheme()
  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0x 20px',
        backgroundColor: theme?.colors.black.value
    }}>
        <Image 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="icono de la app"
        width={70}
        height={70}
        priority
        />

        <Link href='/' as={NextLink} >
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okémon</Text>
        </Link>

        <Spacer css={{flex:1}}/>

        <Link css={{marginRight:"50px"}} href='/favorites' as={NextLink} >
          <Text color='white' h2>F</Text>
          <Text color='white' h3>avoritos</Text>
        </Link>
    </div>
  )
}
