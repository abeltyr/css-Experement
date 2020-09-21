import styled from "@emotion/styled"
interface ModelScreenData {
  model: any
}

interface ModelData {
  removed: boolean
}

export const Container = styled("div")`
  width: ${(props: ModelScreenData) => {
    console.log(props)
    return props.model && props.model.length > 0 ? "0vw" : "100vw"
  }};
  height: ${(props: ModelScreenData) =>
    props.model && props.model.length > 0 ? "0vh" : ""};
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  position: absolute;
  justify-content: flex-end;
  background: transparent;
  /* display: ${(props: ModelScreenData) =>
    props.model && props.model.length > 0 ? "none" : "grid"}; */
`

export const BasicModel = styled("div")`
  width: ${(props: ModelData) => {
    console.log("props.removed", props.removed)
    return props.removed ? "0px" : "450px"
  }};
  height: ${(props: ModelData) => (props.removed ? "0px" : "75px")};
  justify-self: flex-end;
  background: #fffcf4;
  border: 0.5px solid #f4ca64;
  border-radius: 9px;
  z-index: 10;
  margin-top: 25px;
  margin-right: 2.5vw;
  visibility: ${(props: ModelData) => (props.removed ? "hidden" : "visible")};
  @media screen and (max-width: 500px) {
    margin-top: 20px;
    width: ${(props: ModelData) => (props.removed ? "0px" : "90vw")};
    margin-right: 5vw;
  }
  @media screen and (max-height: 400px) {
    margin-top: 20px;
    width: ${(props: ModelData) => (props.removed ? "0px" : "60vw")};
    margin-right: 5vw;
  }
`
