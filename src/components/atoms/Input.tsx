import * as React from "react"

interface InputProps {
  id?: string
  name: string
  value?: string
  placeholder?: string
  onChange: (event: InputEvent) => void
}

interface InputEvent extends React.FormEvent<HTMLInputElement> {
  target: HTMLInputElement
}

export const Input: React.SFC<InputProps> = props => (
  <input type="text" {...props} />
)
