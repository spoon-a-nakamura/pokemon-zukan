import { useState, useContext } from 'react'
import styled from '@emotion/styled'
import { FilterContext } from '../components/FilterReducer'
import { animationProps, zeroPadding } from '../components/Utility'
import { motion } from 'framer-motion'
import { device } from '../components/MediaQuery'

export default function PokemonList() {
  // Providerから渡ってくるContextをstateとdispatchに分割代入
  const { state, dispatch } = useContext(FilterContext)

  // 画像がロードされたかどうかの管理
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <>
      <ListWrap>
        {state.showingPokemonList.map((pokemon, index) => (
          <Card
            key={index}
            layoutId={index + 1}
            animate={animationProps.animate}
            exit={animationProps.exit}
            onClick={() =>
              dispatch({
                type: 'setShowDetailPokemonTarget',
                showDetailPokemonTarget: index + 1,
              })
            }
          >
            <CardContents loaded={isLoaded}>
              <CardContentsInner loaded={isLoaded}>
                <NameWrapper>
                  <NameEnglish>{pokemon.name.english}</NameEnglish>
                  <NameJapanese>{pokemon.name.japanese}</NameJapanese>
                </NameWrapper>
                <Image
                  src={`/images/pokemon/${zeroPadding(pokemon.id)}.png`}
                  alt={pokemon.name.japanese}
                  onLoad={() => setIsLoaded(true)}
                  width={400}
                  height={400}
                  loading='lazy'
                />
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
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  cursor: pointer;
  transition: all ease-out 0.5s;
  will-change: background, transform, box-shadow;
  background: ${({ loaded }) =>
    loaded
      ? '#fff'
      : '#eee url(/images/common/pokemon_ball.gif) center / 100px no-repeat'};
  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
  }
`

const CardContentsInner = styled.div`
  transition: all ease-out 0.5s;
  will-change: opacity, transform;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transform: ${({ loaded }) => (loaded ? 'scale(1)' : 'scale(0.5)')};
`
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
const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
`

const ListNumber = styled.p`
  font-size: 14px;
  text-align: center;
  margin-top: 15px;
`
