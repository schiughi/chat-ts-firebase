import * as React from "react"
import { Button, Input, InputEvent, TextArea } from "src/components/atoms"

interface MessageFormProps {
  onChange: (e: InputEvent) => void
  onSubmit: (e: InputEvent) => void
}

export const MessageForm: React.SFC<MessageFormProps> = props => {
  return (
    <div className="MessageForm">
      <div className="">
        <Input name="userName" onChange={props.onChange} placeHolder="名前" />
        <Input
          name="userIcon"
          onChange={props.onChange}
          placeHolder="プロフィール画像URL"
        />
      </div>

      <TextArea name="text" onChange={props.onChange} />
      <Button onClick={props.onSubmit}>送信</Button>
    </div>
  )
}
