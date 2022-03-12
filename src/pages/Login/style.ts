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
  }
  .loginPanel {
    width: 320px;
    margin-bottom: 20px;
    /* antd登录框tab样式重写 */
    .TabWrapper {
      .ant-tabs {
        border: 1px solid #dcdfe6;
        box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%), 0 0 6px 0 rgb(0 0 0 / 4%);;
        .ant-tabs-nav-more {
          display: none;
        }
        .ant-tabs-tab-btn {
          width: 100%;
        }
      }
      .ant-tabs-tab, .ant-tabs-tab-active {
        /* width: 50% !important; */
        width: 160px;
        text-align: center;
      }
    }
    .submit {
      margin-top: 20px;
      width: 100%;
    }
  }
`
