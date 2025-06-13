import { FC } from "react"
import styles from "./styles.module.css"

interface IOneObject{
      title: string,
      status: string, 
      place: string, 
      object_type: string, 
      img: string
}

const OneObject:FC<IOneObject> = ({title, status, place, object_type, img}) => {
  return (
    <div className={styles.one}>
      <p className={styles.title}>{title}</p>
      <div className={styles.info_block}>
            <div className={`${styles.status} ${status === "Завершен" ? styles.green : styles.orange}`}>{status}</div>
            <p className={styles.basic}><img src="/home.svg" alt="" />{place}</p>
            <p className={styles.basic}><img src="/location-pin.svg" alt="" />{object_type}</p>
      </div>
      <div className={styles.img} style={{backgroundImage:`url(${img})`}}>
            <div className={styles.start_sale}>СТАРТ ПРОДАЖ</div>  
      </div>
    </div>
  )
}

export default OneObject
