import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    color: #4b0082;
    transition: color 0.2s;
    &:hover {
      color: #8b008b;
    }
    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  header {
    display: flex;
    align-items: center;
    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      margin-right: 24px;
    }
    div {
      display: flex;
      flex-direction: column;
      strong {
        font-size: 36px;
        color: #4b0082;
      }
      span {
        font-size: 18px;
        color: #fff;
        margin-top: 4px;
      }
    }
  }
  ul {
    display: flex;
    margin-top: 40px;
    li {
      display: flex;
      flex-direction: column;
      & + li {
        margin-left: 80px;
      }
      strong {
        font-size: 36px;
        color: #4b0082;
      }
      span {
        font-size: 18px;
        color: #fff;
      }
    }
  }
`;

export const Issues = styled.div`
  margin: 80px 0;
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    transition: transform 0.2s;
    display: flex;
    align-items: center;
    &:hover {
      transform: translateX(15px);
    }
    & + a {
      margin-top: 16px;
    }
    div {
      margin: 0 16px;
      flex: 1;
      display: flex;
      flex-direction: column;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      span {
        font-size: 18px;
        color: #a8a8a3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
    }
  }
`;
