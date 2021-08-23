// SCSS model
import styled from "styled-components";
const Styles = styled.div`
  h1 {
    color: red;
  }

  .container {
    padding: 5% 15%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .box {
      height: 100px;
      width: 100px;
      background: red;
      margin: 20px 20px;
    }
  }
`;
export default Styles;
