import * as React from "react"
import { Button, Input, InputEvent, TextArea } from "src/components/atoms"
import * as style from "./style.css"

interface MessageFormProps {
  onChange: (e: InputEvent) => void
  onSubmit: (e: InputEvent) => void
}

export const MessageForm: React.SFC<MessageFormProps> = props => {
  return (
    <div className={style.container}>
      <div className="">
        <Input name="userName" onChange={props.onChange} placeholder="名前" />
        <Input
          name="userIcon"
          onChange={props.onChange}
          placeholder="プロフィール画像URL"
        />
      </div>

      <TextArea name="text" onChange={props.onChange} />
      <Button onClick={props.onSubmit}>送信</Button>
    </div>
  )
}
