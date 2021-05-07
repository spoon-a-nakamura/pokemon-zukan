import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { zeroPadding } from '../components/Utility'
import ProgressBar from './ProgressBar'

export default function PokemonCard({ id, pokemon }) {
  const types = pokemon.type.map((type, index) => {
    return <TypeList key={index}>{type}</TypeList>
  })
  return (
    <Card layoutId={id - 1}>
      <NameWrapper>
        <NameEnglish>{pokemon.name.english}</NameEnglish>
        <NameJapanese>{pokemon.name.japanese}</NameJapanese>
      </NameWrapper>
      <Image
        src={`/images/pokemon/${zeroPadding(id)}.png`}
        alt={pokemon.name.japanese}
        width={400}
        height={400}
      />
      <TypeListWrap>{types}</TypeListWrap>
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
  background: #fff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  width: fit-content;
  height: fit-content;
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
  max-width: 70%;
  height: auto;
  object-fit: contain;
  margin: auto;
`
const TypeListWrap = styled.ul`
  display: flex;
  margin: 20px 0;
`
const TypeList = styled.li`
  font-size: 20px;
  margin-right: 5px;
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
