import * as React from "react"
import defaultIcon from "src/user-default.png"
import * as styles from "./style.css"

export interface MessageProps {
  userIcon?: string
  userName: string
  text?: string
}

export const Message: React.SFC<MessageProps> = props => (
  <div className={styles.message}>
    <div className={styles.iconWrapper}>
      <div
        className={styles.icon}
        style={{ backgroundImage: `url('${props.userIcon || defaultIcon}')` }}
      />
    </div>
    <div className={styles.box}>
      <p className={styles.name}>@{props.userName}</p>
      <p className={styles.text}>{props.text}</p>
    </div>
  </div>
)
