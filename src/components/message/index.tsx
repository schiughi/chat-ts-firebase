import * as React from "react"
import * as styles from "./style.css"

export interface MessageProps {
  userIcon: string
  userName: string
  text?: string
}

export const Message: React.SFC<MessageProps> = props => (
  <div className={styles.message}>
    <img className={styles.icon} src={props.userIcon} />
    <div className={styles.box}>
      <p className={styles.name}>@{props.userName}</p>
      <p className={styles.text}>{props.text}</p>
    </div>
  </div>
)
