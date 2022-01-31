import styled from "@emotion/styled";
import AutoSizer from "react-virtualized-auto-sizer";
import Header from "./Header";
import PokemonList from "./PokemonList";

const AppContent = () => (
  <Root>
    <Header />
    <ContentWrapper>
    <AutoSizer>{({ width, height }) => <PokemonList width={width} height={height} />}</AutoSizer>
    </ContentWrapper>
  </Root>
);

export default AppContent;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(var(--vh, 1vh) * 100);
`

const ContentWrapper = styled.div`
  flex-grow: 1;
`