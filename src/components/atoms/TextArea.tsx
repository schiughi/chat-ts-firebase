import * as React from "react"

interface TextAreaProps {
  id?: string
  name: string
  value?: string
  placeHolder?: string
  onChange: (event: InputEvent) => void
}

interface InputEvent extends React.FormEvent<HTMLTextAreaElement> {
  target: HTMLTextAreaElement
}

export const TextArea: React.SFC<TextAreaProps> = props => (
  <textarea {...props} />
)
