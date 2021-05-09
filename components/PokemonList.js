import { useContext } from 'react'
import styled from '@emotion/styled'
import { FilterContext } from '../components/FilterReducer'
import { animationProps, zeroPadding } from '../components/Utility'
import { motion } from 'framer-motion'
import { device } from '../components/MediaQuery'
import LazyImage from '../components/LazyImage'

export default function PokemonList() {
  console.log('Render PokemonList')
  const { state, dispatch } = useContext(FilterContext)
  return (
    <>
      <ListWrap>
        {state.showingPokemonList.map((pokemon, index) => (
          <Card
            key={index}
            layoutId={index + 1}
            animate={animationProps.animate}
            exit={animationProps.exit}
            onClick={() => {
              dispatch({
                type: 'setShowDetailPokemonTarget',
                showDetailPokemonTarget: index + 1,
              })
              dispatch({
                type: 'setIsDrawerOpen',
                isDrawerOpen: false,
              })
            }}
          >
            <CardContents>
              <CardContentsInner>
                <NameWrapper>
                  <NameEnglish>{pokemon.name.english}</NameEnglish>
                  <NameJapanese>{pokemon.name.japanese}</NameJapanese>
                </NameWrapper>
                <ImageWrapper>
                  <LazyImage
                    key={index}
                    src={`/images/pokemon/${zeroPadding(pokemon.id)}.png`}
                    alt={pokemon.name.japanese}
                    width={400}
                    height={400}
                    modal={false}
                  />
                </ImageWrapper>
              </CardContentsInner>
            </CardContents>
            <ListNumber>No.{`${pokemon.id}`}</ListNumber>
          </Card>
        ))}
      </ListWrap>
    </>
  )
}

const ListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2%;
  width: 100%;
  list-style: none;
`
const Card = styled(motion.li)`
  width: 49%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-bottom: 2%;
  @media ${device.mobileL} {
    width: 32%;
  }
  @media ${device.tablet} {
    width: 23.5%;
  }
  @media ${device.laptop} {
    width: 15%;
  }
  @media ${device.desktop} {
    width: 9%;
  }
`
const CardContents = styled.a`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all ease-in-out 0.5s;
  will-change: transform, box-shadow;
`
const CardContentsInner = styled.div``
const NameWrapper = styled.div``
const NameJapanese = styled.div`
  text-align: center;
  font-size: 1.1vw;
`
const NameEnglish = styled.div`
  font-family: mr-eaves-modern, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 1.6vw;
  text-transform: uppercase;
  text-align: center;
`
const ImageWrapper = styled.div`
  transition: all ease-in-out 0.3s;
  will-change: transform;
  &:hover {
    transform: scale(1.1);
  }
`
const ListNumber = styled.p`
  font-size: 14px;
  text-align: center;
`
