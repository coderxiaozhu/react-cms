import styled from "styled-components";

export const XZhomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  .container {
    width: 100%;
    height: 100%;
  }
  #components-layout-demo-custom-trigger .trigger {
    padding: 0 24px;
    font-size: 28px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  .site-layout .site-layout-background {
    background: #fff;
  }

  .site-layout-background {
    .toggleIcon {
      cursor: pointer;
      height: 20px;
      width: 20px;
      margin-left: 20px;
      .anticon {
        width: 100%;
        height: 100%;
        svg {
          width: 100%;
          height: 100%;
        }
      }
    }
    .breadBox {
      margin-left: 60px;
    }
  }
`
