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

export const ListContainer = styled.div`
    width: 50vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    background-color: ${theme.COLORS.WHITE};
    border: 1px solid transparent;
    border-radius: 8px;
`
export const EmployeeBox = styled.div`
    background-color: ${theme.COLORS.VERY_LIGHT_GRAY};
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-around;
`
export const Title = styled.text`
color: ${theme.COLORS.DARK_GRAY};
font-size: ${theme.FONT_SIZE.LG};
padding-bottom: 2rem;
`

export const Text = styled.text`
margin-top: 1rem;
    color: ${theme.COLORS.GRAY};
    font-size: ${theme.FONT_SIZE.MD};

`