import * as React from "react"
import { InputEvent } from "src/components/atoms"
import { Message, MessageProps } from "src/components/message"
import { MessageForm } from "src/components/message-form"
import { firebaseDb } from "src/firebase"
import * as style from "./style.css"

const messagesRef = firebaseDb.ref("messages")

interface ChatProps {}
interface ChatState {
  userName?: string
  userIcon?: string
  text?: string
  messages: MessageProps[]
}

export class Chat extends React.Component<ChatProps, ChatState> {
  constructor(props: ChatProps) {
    super(props)
    this.state = {
      messages: [],
      userIcon: "",
    }
  }
  public componentWillMount() {
    messagesRef.on("child_added", snapshot => {
      if (!snapshot) {
        return
      }
      const m = snapshot.val()
      const msgs = this.state.messages

      msgs.push({
        text: m.text,
        userIcon: m.userIcon,
        userName: m.userName,
      })

      this.setState({
        messages: msgs,
      })
    })
  }
  public render() {
    const messageList = this.state.messages.map((m, i) => (
      <div className={style.message}>
        <Message key={i} {...m} />
      </div>
    ))
    return (
      <div>
        <h2>Chat</h2>
        <div className={style.list}>{messageList}</div>
        <div className={style.form}>
          <MessageForm
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </div>
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
    if (!this.state.userName || !this.state.text) {
      return
    }
    messagesRef.push({
      text: this.state.text,
      userIcon: this.state.userIcon,
      userName: this.state.userName,
    })

    this.setState({
      ...this.state,
      text: "",
    })
  }
}
