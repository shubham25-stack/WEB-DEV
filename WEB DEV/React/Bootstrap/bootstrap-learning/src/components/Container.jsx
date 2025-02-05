import styles from "./Container.module.css";
import ContainerElements from "./ContainerElements";

function Container(){

    return (
        <div className={styles.container1}>
            <center><h1>Healthy Food</h1>
            </center>
            <ContainerElements></ContainerElements>
        </div>
    )
}

export default Container;