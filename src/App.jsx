import styled from 'styled-components';
import './App.css';
import NikeProductCard from './projects/NikeProductCard';
import NikeProductCardTailwind from './projects/NikeProductCardTailwind';

function App() {
  return (
    <AppContainer>
      <NikeProductCard />
      <NikeProductCardTailwind />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 1rem; */
  background-color: #e9ecef;
  min-height: 100vh;
  color: black;
`;
