import styled from "@emotion/styled"

interface ButtonData {
  backgroundColor: string
  textColor: string
  curve: string
  loading: boolean
  fontSize: string
  fontWeight: string
  iconColor: string
  iconBackgroundColor: string
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
  display: inline-flex;
  text-align: center;
  align-items: center;
  padding: 0px;

  border-radius: ${(props: ButtonData) => props.curve || "9px"};
  border: 0px;

  cursor: ${(props: ButtonData) => {
    if (props.loading) return "progress"
    return "pointer"
  }};

  font-weight: ${(props: ButtonData) => props.fontWeight || "400"};
  font-size: ${(props: ButtonData) => props.fontSize || "20px"};
  line-height: normal;
  font-stretch: normal;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;

  &:active {
    outline-style: none;
    outline-width: 0px;
    .buttonText {
      padding-top: 11px;
      padding-bottom: 11px;
    }
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

  .buttonText {
    padding-left: 2em;
    padding-right: 2em;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .iconData {
    color: ${(props: ButtonData) => props.textColor || "#fff"};
    padding-top: 10px;
    padding-bottom: 10px;
    margin-right: 10px;
  }

  .fullIconData {
    background: ${(props: ButtonData) =>
      props.iconBackgroundColor || "#37A3E959"};
    color: ${(props: ButtonData) => props.iconColor || "#fff"};
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 17.5px;
    padding-left: 17.5px;
    border-top-right-radius: ${(props: ButtonData) => props.curve || "9px"};
    border-bottom-right-radius: ${(props: ButtonData) => props.curve || "9px"};
  }
`
