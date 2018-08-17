import * as React from "react"
import * as style from "./style.css"

interface TextAreaProps {
  id?: string
  name: string
  value?: string
  placeholder?: string
  onChange: (event: InputEvent) => void
}

interface InputEvent extends React.FormEvent<HTMLTextAreaElement> {
  target: HTMLTextAreaElement
}

export const TextArea: React.SFC<TextAreaProps> = props => (
  <textarea className={style.textarea} {...props} />
)
