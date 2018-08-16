import { Button } from "./Button"
import { Input } from "./Input"
import { TextArea } from "./TextArea"

interface InputEvent extends React.FormEvent<HTMLElement> {
  target: HTMLElement
}

export { Input, InputEvent, TextArea, Button }
