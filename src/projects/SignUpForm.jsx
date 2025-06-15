import { useRef } from 'react';
import styled from 'styled-components';

const SignUpForm = () => {
  const containerRef = useRef(null);

  const onSignUpClick = () => {
    // alert('Sign Up button clicked!');
    containerRef.current.classList.toggle('change');
  };

  return (
    <Wrapper>
      <div className={`container`} ref={containerRef}>
        <div className='form-wrapper'>
          <div className='banner'>
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
          </div>
          <div className='green-bg'>
            <button type='button' onClick={onSignUpClick}>
              Sign Up
            </button>
          </div>
          <div className='signup-form'>
            <h1>Create Account</h1>
            <div className='social-media'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-linkedin-in'></i>
            </div>
            <p>or use your email for registration</p>
            <div className='input-group'>
              <i className='fas fa-user'></i>
              <input type='text' placeholder='Name' />
            </div>
            <div className='input-group'>
              <i className='fas fa-envelope'></i>
              <input type='email' placeholder='Email' />
            </div>
            <div className='input-group'>
              <i className='fas fa-lock'></i>
              <input type='password' placeholder='Password' />
            </div>
            <button type='button'>Sign Up</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SignUpForm;

const Wrapper = styled.div`
  background: #ffffff;
  width: 100%;
  display: grid;
  place-items: center;
  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &.change .form-wrapper .banner {
      left: 5rem;
    }

    &.change .form-wrapper .green-bg {
      width: 40%;
    }

    &.change .form-wrapper .signup-form {
      left: 40%;
    }

    .form-wrapper {
      width: 100rem;
      height: 70rem;
      background-color: #eee;
      border-radius: 3rem;
      box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
      position: relative;
      overflow: hidden;
    }

    .banner {
      position: absolute;
      top: 25%;
      left: -30rem;
      text-align: center;
      color: white;
      width: 30rem;
      z-index: 100;
      transition: left 0.8s;
    }

    .banner h1 {
      font-size: 4rem;
      margin-bottom: 3rem;
    }

    .banner p {
      font-size: 2rem;
    }

    .green-bg {
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, #3ab19b, #4cbf91);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 50;
      transition: width 1.5s cubic-bezier(0.19, 1, 0.22, 1);
    }

    .green-bg button {
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translateX(-50%);
      width: 16rem;
      height: 5rem;
      background-color: transparent;
      border: 0.1rem solid #fff;
      border-radius: 3rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      color: #fff;
      cursor: pointer;
    }

    .signup-form {
      width: 60rem;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 10rem 0;
      transition: left 1.5s cubic-bezier(0.19, 1, 0.22, 1);
    }

    .signup-form h1 {
      font-size: 4rem;
      color: #3aaf9f;
    }

    .social-media {
      display: flex;
    }

    .social-media i {
      width: 4rem;
      height: 4rem;
      border: 0.1rem solid #777;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 2rem;
      font-size: 2rem;
      color: #555;
    }

    .signup-form p {
      font-size: 1.8rem;
      color: #555;
      margin-bottom: 2rem;
    }

    .input-group {
      position: relative;
    }

    .input-group input {
      width: 28rem;
      height: 5rem;
      padding: 1rem 1rem 1rem 3rem;
      background-color: #ddd;
      border: none;
      border-radius: 0.5rem;
    }

    .input-group i {
      position: absolute;
      top: 50%;
      left: 1rem;
      transform: translateY(-50%);
      font-size: 1.2rem;
      color: #555;
    }

    .signup-form button {
      width: 16rem;
      height: 5rem;
      background-color: #3aaf9f;
      border: none;
      border-radius: 3rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      color: #fff;
      cursor: pointer;
    }
  }
`;
