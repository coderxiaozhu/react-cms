import styled from "styled-components";

export const XZdashboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  .top {
    display: flex;
    width: 100%;
    .left, .right {
      width: 363px;
      height: auto;
    }
    .content {
      flex: 1;
      margin: 0 10px;
    }
  }
  .bottom {
    display: flex;
    width: 100%;
    margin-top: 20px;
    justify-content: space-between;
    .bottom-left {
      margin-right: 10px;
      width: 50%;
    }
    .bottom-right {
      width: 50%;
    }
  }
`
