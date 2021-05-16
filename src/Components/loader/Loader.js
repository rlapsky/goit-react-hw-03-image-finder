import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styled from "styled-components";
import React from "react";
import Loader from "react-loader-spinner";

export default class App extends React.Component {
  render() {
    return (
      <LoaderWrapper>
        <Loader
          type="Puff"
          color="red"
          height={100}
          width={100}
          timeout={2000}
        />
      </LoaderWrapper>
    );
  }
}
const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
