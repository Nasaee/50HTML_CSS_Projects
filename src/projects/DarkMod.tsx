import styled from 'styled-components';

const DarkMod = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='toggle'>
          <i className='far fa-sun'></i>
        </div>
        <div className='card'>
          <img src='images/map.png' className='card-map' />
          <div className='card-left'>
            <h3 className='card-type'>Mastercard</h3>
            <img src='images/chip.png' className='card-chip' />
            <div>
              <div className='card-num'>1234 4321 5678 8765</div>
              <div className='card-text'>Valid through</div>
              <div className='card-date'>08/26</div>
              <div className='card-holder'>John Smith</div>
            </div>
          </div>
          <div className='card-right'>
            <div className='red-circle'></div>
            <div className='orange-circle'></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DarkMod;

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Quicksand, sans-serif;

  .container {
    width: 100vw;
    height: 100vh;
    position: relative;
    display: grid;
    place-items: center;
    /* background-color: red; */
  }

  .toggle {
    width: 6rem;
    height: 6rem;
    background-color: #eee8e1;
    position: absolute;
    top: 7rem;
    right: 7rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    cursor: pointer;
  }

  .toggle i {
    font-size: 4rem;
    color: #777;
  }

  .card {
    width: 48rem;
    height: 25rem;
    border-radius: 2rem;
    position: relative;
    display: flex;
    box-shadow: 1rem 1rem 3rem rgba(0, 0, 0, 0.4);
  }

  .card-map {
    width: 35rem;
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.2;
  }

  .card-left {
    width: 70%;
    height: 100%;
    padding: 1rem 0 1rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #777;
    z-index: 10;
  }

  .card-type {
    font-size: 2.5rem;
    letter-spacing: 0.1rem;
  }

  .card-chip {
    width: 6rem;
  }

  .card-num {
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
  }

  .card-text {
    font-size: 1.1rem;
  }

  .card-date {
    font-size: 1.6rem;
    font-weight: 600;
  }

  .card-holder {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .card-right {
    display: flex;
    align-items: flex-end;
    padding: 0 0 2rem 2rem;
    z-index: 10;
  }

  .red-circle,
  .orange-circle {
    width: 6rem;
    height: 6rem;
    background-color: red;
    border-radius: 50%;
  }

  .red-circle {
    background-color: #eb001b;
  }

  .orange-circle {
    background-color: #ff5f00;
    margin-left: -2rem;
    opacity: 0.7;
  }
`;
