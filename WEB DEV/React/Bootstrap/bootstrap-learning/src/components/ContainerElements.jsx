import styles from "./ContainerElements.module.css";
function ContainerElements() {
    return (
        <>
            <div className={styles.cnt}>
            <ul className="list-group" >
                <li class="list-group-item">Milk
                    <button type="button" className="btn btn-outline-info">Buy</button>
                </li>
                <li class="list-group-item">paneer
                    <button type="button" className="btn btn-outline-info">Buy</button>
                </li>
                <li class="list-group-item">Ghee
                    <button type="button" className="btn btn-outline-info" id="btn">Buy</button>
                </li>
                <li class="list-group-item">GREEN Veg
                    <button type="button" className="btn btn-outline-info" id="btn">Buy</button>
                </li>
                <li class="list-group-item">Apple
                    <button type="button" className="btn btn-outline-info" id="btn">Buy</button>
                </li>
            </ul>
            </div>

        </>
    )
}

export default ContainerElements;