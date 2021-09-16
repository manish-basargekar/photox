import styles from "./Sidebar.module.css"
import React from 'react'

function Sidebar() {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}> Sidebar </div>
        </div>
    )
}

export default Sidebar