import styled from 'styled-components';
import nikeLogo from '../assets/images/nike.png';
import shoe1 from '../assets/images/shoe1.png';
import shoe2 from '../assets/images/shoe2.png';
import { useRef } from 'react';

const NikeProductCard = () => {
  const containerRef = useRef(null);

  return (
    <Container ref={containerRef}>
      <div class='card-wrapper'>
        <h2>CSS Version</h2>
        <div class='card'>
          <div class='card-top'>
            <img src={nikeLogo} class='logo' />
            <div class='card-top-text'>
              <h1>Air Structure</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                quasi ratione praesentium eum commodi modi neque dignissimos
                eligendi illo officiis!
              </p>
            </div>
            <img src={shoe1} class='shoe-1' />
            <img src={shoe2} class='shoe-2' />
          </div>
          <div class='card-bottom'>
            <h1>Air Structure</h1>
            <div class='badge'>New</div>
            <h3>Running Collections</h3>
            <div class='stars'>
              <i class='fa-solid fa-star'></i>
              <i class='fa-solid fa-star'></i>
              <i class='fa-solid fa-star'></i>
              <i class='fa-solid fa-star'></i>
              <i class='fa-solid fa-star'></i>
            </div>
            <div class='size'>
              <h4>Size</h4>
              <div class='sizes'>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
                <span>11</span>
              </div>
            </div>
            <div class='color'>
              <h4>Color</h4>
              <div class='colors'>
                <div
                  class='color-1'
                  onClick={() =>
                    containerRef.current.classList.remove('change')
                  }
                ></div>
                <div
                  class='color-2'
                  onClick={() => containerRef.current.classList.add('change')}
                ></div>
              </div>
            </div>
            <div class='price'>
              <span>Usd</span>
              <span>350,00</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NikeProductCard;

const Container = styled.div`
  font-family: QuickSand, sans-serif;
  width: 100%;
  height: 100vh;
  background: #262626;
  display: grid;
  place-items: center;

  .card-wrapper {
    width: 50rem;
    height: 70rem;
    background: #ccc;
    padding: 0 10rem;
    display: grid;
    place-items: center;
    overflow: hidden;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 600;
  }

  .card {
    width: 30rem;
    height: 55rem;
    background: #eee;
    border-radius: 2.5rem;
    box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.7);
    position: relative;
  }

  &.change .card-top {
    background: #d35246;
  }

  .card-top {
    width: 100%;
    height: 50%;
    background: #f1ae04;
    padding: 3rem;
    border-radius: 2.5rem 2.5rem 0 0;
    transition: background 0.5s;
  }

  .logo {
    width: 8rem;
    margin-bottom: 2rem;
  }

  .card-top-text {
    color: #fff;
  }

  .card-top-text h1 {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;
  }

  .shoe-1 {
    width: 30rem;
    position: absolute;
    top: -2.5rem;
    right: -10rem;
    transition: transform 1s;
  }

  &.change .shoe-1 {
    transform: translateX(-50rem) rotateZ(45deg);
  }

  .shoe-2 {
    width: 33rem;
    position: absolute;
    top: -10rem;
    right: -45rem;
    transition: transform 1s;
  }

  &.change .shoe-2 {
    transform: translateX(-40rem) rotateZ(-45deg);
  }

  .card-bottom {
    width: 100%;
    height: 50%;
    padding: 2rem 3rem;
    position: relative;
  }

  .card-bottom h1 {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: #333;
    margin-bottom: 0.6rem;
  }
  .badge {
    position: absolute;
    top: 23px;
    right: 5rem;
    width: 3.5rem;
    height: 1.6rem;
    background: #25d390;
    color: #fff;
    display: grid;
    place-items: center;
    border-radius: 0.3rem;
    font-size: 0.9rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }
  .card-bottom h3 {
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 0.6rem;
  }

  .stars {
    margin-bottom: 3rem;
  }
  .stars i:last-child {
    opacity: 0.4;
  }

  .size {
    margin-bottom: 3rem;
  }

  .size h4 {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-bottom: 1.3rem;
  }

  .sizes {
    display: flex;
  }

  .size span {
    font-size: 1.3rem;
    margin-right: 2.5rem;
  }

  .sizes span:nth-child(3) {
    width: 2rem;
    height: 2rem;
    background: #25d393;
    border-radius: 50%;
    display: grid;
    place-items: center;
  }

  .color {
    font-size: l.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;
  }

  .colors {
    display: flex;
  }

  .color-1,
  .color-2 {
    width: 2rem;
    height: 2rem;
    background: red;
    border-radius: 50%;
    cursor: pointer;
  }

  .color-1 {
    background: #1c477a;
    margin-right: 1.5rem;
    box-shadow: 0 1rem 2rem rgba(28, 71, 122, 0.2);
  }

  .color-2 {
    background: #c02244;
    box-shadow: 0 1rem 2rem rgba(192, 34, 68, 0.3);
  }

  &.change .price {
    background: #c02244;
  }

  .price {
    width: 16rem;
    height: 4rem;
    background: #1c477a;
    color: #fff;
    border-radius: 0.5rem;
    position: absolute;
    right: -1rem;
    bottom: 3rem;
    box-shadow: 0 1rem 2rem rgba(28, 71, 122, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.5s;
  }

  .price span {
    font-size: 2rem;
  }

  .price span:first-child {
    font-weight: 300;
    text-transform: uppercase;
    margin-right: 1rem;
  }

  .price span:last-child {
    font-weight: bold;
  }
`;
