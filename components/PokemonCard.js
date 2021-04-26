import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import ZeroPadding from './ZeroPadding'

export default function PokemonCard({ id, pokemon }) {
  const types = pokemon.type.map((type, index) => {
    return <Type key={index}>{type}</Type>
  })
  return (
    <Card layoutId={id - 1}>
      <NameWrapper>
        <NameEnglish>{pokemon.name.english}</NameEnglish>
        <NameJapanese>{pokemon.name.japanese}</NameJapanese>
      </NameWrapper>
      <Image
        src={`/images/${ZeroPadding(id)}.png`}
        alt={pokemon.name.japanese}
        width={400}
        height={400}
      />
      <TypeListWrap>
        <TypeList>{types}</TypeList>
      </TypeListWrap>
      <StatusListWrap>
        <StatusList>HP：{pokemon.base.HP}</StatusList>
        <StatusList>攻撃力：{pokemon.base.Attack}</StatusList>
        <StatusList>防御力：{pokemon.base.Defense}</StatusList>
        <StatusList>特殊攻撃力：{pokemon.base['Sp. Attack']}</StatusList>
        <StatusList>特殊防御力：{pokemon.base['Sp. Defense']}</StatusList>
        <StatusList>スピード：{pokemon.base.Speed}</StatusList>
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
  background: #fff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  width: fit-content;
  margin: auto;
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
  font-size: 5vw;
  text-transform: uppercase;
  text-align: center;
`
const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
`
const TypeListWrap = styled.ul``
const TypeList = styled.li``
const Type = styled.span``

const StatusListWrap = styled.ul``
const StatusList = styled.ul`
  font-family: tbcgothic-std, sans-serif;
`
