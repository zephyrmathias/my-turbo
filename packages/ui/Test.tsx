import styled, { DefaultTheme } from 'styled-components'

const Theme: DefaultTheme = {
  base: 'pink',
  colors: {
    primary: 'red',
    secondary: 'blue'
  }
}

const Styled = styled.div`
  background: pink;
`

const Test = () => <Styled>1235677</Styled>

export default Test