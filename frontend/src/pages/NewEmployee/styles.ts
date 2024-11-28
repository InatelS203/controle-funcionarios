import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${theme.COLORS.VERY_LIGHT_GRAY};
`

export const FormContainer = styled.form`
    width: 30vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.COLORS.WHITE};
    border: 1px solid transparent;
    border-radius: 8px;
`

export const Title = styled.text`
color: ${theme.COLORS.DARK_GRAY};
font-size: ${theme.FONT_SIZE.LG};
`

export const Text = styled.text`
margin-top: 1rem;
    color: ${theme.COLORS.GRAY};
    font-size: ${theme.FONT_SIZE.MD};

`