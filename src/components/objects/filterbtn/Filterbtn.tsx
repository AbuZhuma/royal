import { FC } from "react"
import styles from "./styles.module.css"

interface IFilterbtn {
      text: string,
      icon?: string
}

const Filterbtn:FC<IFilterbtn> = ({text, icon}) => {
  return (
    <div className={styles.filterbtn}>
      {text}
      {icon && 
      <img src={icon} className={styles.icon} alt="" />
      }
    </div>
  )
}

export default Filterbtn
