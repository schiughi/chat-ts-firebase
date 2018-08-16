import * as React from "react"

interface ButtonProps {
  id?: string
  name?: string
  children: React.ReactNode
  onClick: (event: ClickEvent) => void
}

interface ClickEvent extends React.FormEvent {}

export const Button: React.SFC<ButtonProps> = props => {
  const { children, ...rest } = props
  return <button {...rest}>{children}</button>
}
