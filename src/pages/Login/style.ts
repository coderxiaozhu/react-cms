import styled from 'styled-components'
import bgImg from '../../assets/img/login-bg.svg'

export const XZloginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background: url(${bgImg});
  h1 {
    text-align: center;
    font-weight: 700;
    padding-top: 20px;
  }
  .loginPanel {
    width: 320px;
    margin-bottom: 20px;
    background-color: white;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%), 0 0 6px 0 rgb(0 0 0 / 4%);
    .submit {
      width: 100%;
      margin-left: 65px;
      margin-top: 5px;
    }
  }
`
