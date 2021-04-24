import Header from '../components/Header'
import PokemonList from '../components/PokemonList'
import Container from '../components/Container'

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <div>ページ</div>
        <PokemonList />
      </Container>
    </>
  )
}
