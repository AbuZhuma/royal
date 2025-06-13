import Filterbtn from "@/components/objects/filterbtn/Filterbtn"
import styles from "./styles.module.css"
import OneObject from "@/components/objects/oneobject/OneObject"
const Objects = () => {
      const topFilter = ["Все", "Строящиеся", "Завершенные", "На стадии завершения"]
      const botFilter = ["от 5 этажей     -  до 28 этажей", "Квартиры", "Офисы", "Коттеджи", "Коммерческие помещения"]
      const objectsList = [
            { title: "Ынтымак", img:"/building3.png", status: "Строится", place: "Молдобасанова 8а", object_type: "Центр отдыха" },
            { title: "Tower", img:"/building5.png", status: "Завершен", place: "пр. Чынгыз Айтматова", object_type: "Жилой дом" },
            { title: "Royal Resort", img:"/hero.webp", status: "Строится", place: "с. Чок-Тал Иссык-Куль", object_type: "Центр отдыха" },
            { title: "Cambridge", img:"/building4.png", status: "Завершен", place: "Малдыбаева 279", object_type: "Жилой дом" },
      ]
      return (
            <div className={styles.objects}>
                  <p className={styles.h1}>Фильтруйте. Сравнивайте. Выбирайте.</p>
                  <div className={styles.sub_info}>
                        <div>30 объектов</div>
                        <p>8 Жилых домой</p>
                  </div>
                  <div className={styles.content}>
                        <div className={styles.top_filter}>
                              {topFilter.map((el, i) => (<Filterbtn key={i} text={el} />))}
                        </div>
                        <div className={styles.top_filter}>
                              <Filterbtn text="Выберите локацию" icon="/dropdwn.svg" />
                              {botFilter.map((el, i) => (<Filterbtn key={i} text={el} />))}
                        </div>
                        <div className={styles.objects_list}>
                              {objectsList.map((el, i) => (<OneObject key={i} {...el}/>))}
                        </div>
                  </div>
            </div>
      )
}


export default Objects
