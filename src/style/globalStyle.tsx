
import { Global, css } from "@emotion/core"
import useSiteMetaData from "../hooks/metaData"

const GlobalStyle = () => {
    const { title } = useSiteMetaData()
    let textColor = "#222"
    return (
        <Global
            styles={
                css`
                    * {
                        box-sizing: border-box;
                        margin: 0px;
                    }
                    html,
                    body {
                            margin: 0;
                            color: ${textColor};
                            font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
                            sans-serif;
                            font-size: 18px;
                            line-height: 1.4;
                        }
            `}
        />
    )
}

export default GlobalStyle;