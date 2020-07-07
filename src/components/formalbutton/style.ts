import styled from "@emotion/styled"

interface ButtonData {
  backgroundColor: string
  textColor: string
  curve: string
  loading: boolean
}

export const CustomButton = styled("button")`
  background-color: ${(props: ButtonData) =>
    props.backgroundColor || "#37A3E9"};
  color: ${(props: ButtonData) => props.textColor || "#fff"};

  -webkit-appearance: button;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;

  padding-left: 4em;
  padding-right: 4em;
  padding-top: 15px;
  padding-bottom: 15px;

  font-weight: 1000;
  font-size: 20px;
  line-height: normal;
  font-family: Arial;
  font-stretch: normal;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;

  border-radius: ${(props: ButtonData) => props.curve || "9px"};
  border: 0px;

  cursor: ${(props: ButtonData) => {
    if (props.loading) return "progress"
    return "pointer"
  }};

  &:active {
    padding-left: 4.15em;
    padding-right: 4.15em;
    padding-top: 16px;
    padding-bottom: 16px;
    outline-style: none;
    outline-width: 0px;
  }
  &:focus {
    outline-style: none;
    outline-width: 0px;
  }
  &:hover {
    box-shadow: 1px 1px 10px
      ${(props: ButtonData) => props.backgroundColor || "#37A3E9"};
    transition-delay: 50ms;
    transition-duration: 300ms;
  }
`
