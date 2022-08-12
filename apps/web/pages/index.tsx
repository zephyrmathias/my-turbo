import { Button } from "ui/Button";
import Test from 'ui/Test'
import { DefaultTheme } from "styled-components";

const Theme: DefaultTheme = {
  base: 'pink',
  colors: {
    primary: 'red',
    secondary: 'blue'
  }
}

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button />
      <Test />
    </div>
  );
}
