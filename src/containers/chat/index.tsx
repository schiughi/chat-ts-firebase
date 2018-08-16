import * as React from "react"
import { InputEvent } from "src/components/atoms"
import { Message, MessageProps } from "src/components/message"
import { MessageForm } from "src/components/message-form"
import { firebaseDb } from "src/firebase"

const messagesRef = firebaseDb.ref("messages")

interface ChatProps {}
interface ChatState {
  userName?: string
  userIcon?: string
  text?: string
  messages: MessageProps[]
}
export default class Chat extends React.Component<ChatProps, ChatState> {
  public render() {
    const messageList = this.state.messages.map((m, i) => (
      <Message key={i} {...m} />
    ))
    return (
      <div>
        <h2>Chat</h2>
        <div className="MessageList">{messageList}</div>
        <MessageForm
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }

  private handleChange = (event: InputEvent) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    })
  }

  private handleSubmit = (event: InputEvent) => {
    if (
      this.state.userName === "" ||
      this.state.userIcon === "" ||
      this.state.text === ""
    ) {
      return
    }
    messagesRef.push({
      text: this.state.text,
      userIcon: this.state.userIcon,
      userName: this.state.userName,
    })
  }
}
