import { Button } from "./Button"
import { Input } from "./Input"
import { TextArea } from "./TextArea"

interface InputEvent extends React.FormEvent<InputTarget> {
  target: InputTarget
}

interface InputTarget extends HTMLElement {
  name: string
  value: string
}

export { Input, InputEvent, TextArea, Button }
