import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { zeroPadding } from '../components/Utility'
import ProgressBar from './ProgressBar'
import LazyImage from '../components/LazyImage'
import pokemonTypes from '../data/types.json'

const LazyImageMemo = React.memo((props) => {
  return (
    <LazyImage
      key={props.key}
      src={`/images/pokemon/${zeroPadding(props.src)}.png`}
      alt={props.alt}
      width={400}
      height={400}
      modal={true}
    />
  )
})
export default function PokemonCard({ id, pokemon }) {
  console.log('Render PokemonCard')
  return (
    <Card layoutId={id}>
      <NameWrapper>
        <NameEnglish>{pokemon.name.english}</NameEnglish>
        <NameJapanese>{pokemon.name.japanese}</NameJapanese>
      </NameWrapper>
      <LazyImageMemo key={id} src={pokemon.id} alt={pokemon.name.japanese} />
      <TypeListWrap>
        {pokemon.type.map((type, index) => {
          return (
            <TypeList key={index}>
              {pokemonTypes.map(
                (pokemonType) =>
                  pokemonType.english === type && pokemonType.japanese
              )}
            </TypeList>
          )
        })}
      </TypeListWrap>
      <StatusListWrap>
        <StatusList>
          <StatusListCaption>HP：{pokemon.base.HP}</StatusListCaption>
          <ProgressBar value={pokemon.base.HP} />
        </StatusList>
        <StatusList>
          <StatusListCaption>攻撃力：{pokemon.base.Attack}</StatusListCaption>
          <ProgressBar value={pokemon.base.Attack} />
        </StatusList>
        <StatusList>
          <StatusListCaption>防御力：{pokemon.base.Defense}</StatusListCaption>
          <ProgressBar value={pokemon.base.Defense} />
        </StatusList>
        <StatusList>
          <StatusListCaption>
            特殊攻撃力：{pokemon.base['Sp. Attack']}
          </StatusListCaption>
          <ProgressBar value={pokemon.base['Sp. Attack']} />
        </StatusList>
        <StatusList>
          <StatusListCaption>
            特殊防御力：{pokemon.base['Sp. Defense']}
          </StatusListCaption>
          <ProgressBar value={pokemon.base['Sp. Defense']} />
        </StatusList>
        <StatusList>
          <StatusListCaption>スピード：{pokemon.base.Speed}</StatusListCaption>
          <ProgressBar value={pokemon.base.Speed} />
        </StatusList>
      </StatusListWrap>
    </Card>
  )
}

const Card = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  box-sizing: border-box;
  width: fit-content;
  height: fit-content;
  margin: auto;
`
const NameWrapper = styled.div`
  margin-bottom: 20px;
`
const NameJapanese = styled.div`
  text-align: center;
  font-size: 1.1vw;
`
const NameEnglish = styled.div`
  font-family: mr-eaves-modern, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 5vw;
  text-transform: uppercase;
  text-align: center;
`
const TypeListWrap = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  text-align: center;
  background: rgba(0, 0, 0, 1);
  padding: 10px 30px 8px;
  border-radius: 100px;
`
const TypeList = styled.li`
  font-size: 14px;
  color: #fff;
  &:not(:last-child) {
    margin-right: 10px;
    padding-right: 10px;
    &::after {
      content: '/';
      display: inline-block;
      margin-left: 20px;
    }
  }
`

const StatusListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  max-height: 190px;
`
const StatusList = styled.li`
  display: flex;
  width: 100%;
  margin: 5px 0;
`
const StatusListCaption = styled.p`
  font-family: tbcgothic-std, sans-serif;
  margin-right: 10px;
`
