import styled from 'styled-components';

export const NavStyles = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  font-size: 2rem;

  .show {
    opacity: 1;
    visibility: visible;
    transition: 0.2s;
    position: fixed;
    left: 0;
    top: 0;
    background: #100e17f2;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: calc(100vh);
    height: 100%;
    margin: 0;
    padding: 0;

    > ul {
      flex-direction: column;
      opacity: none;
      visibility: visible;
      justify-content: center;
    }
  }

  .close-button {
    border: none;
    background: 0 0;
    display: none;
    cursor: pointer;
    position: relative;
    top: 0;
    right: 0;

    svg {
      width: 50px;
      height: 50px;
    }
  }

  .hamburger-button {
    display: block;
    border: none;
    cursor: pointer;
    outline: none;
    background: transparent;

    svg {
      width: 50px;
      height: 50px;
    }

    @media (min-width: 950px) {
      display: none;
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  visibility: hidden;

  a,
  button {
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-size: 1.7rem;
    background: none;
    font-family: ${(props) => props.theme.fontPrimary};
    letter-spacing: 0.05em;
    font-weight: 500;
    border: 0;
    cursor: pointer;
    color: ${(props) => props.theme.white};
    padding: 0px 15px;
    &:hover {
      color: #3eaca8;
    }
  }

  @media (min-width: 950px) {
    visibility: visible;
    margin: 0;
  }

  .show {
    a {
      display: block;
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const NavContainer = styled.div`
  display: flex;
`;
