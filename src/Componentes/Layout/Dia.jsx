import styles from '../Layout/Dia.module.css'

function Dia({numeroDia}){
    return(
        <div className={styles.cedula}>
            {numeroDia}
        </div>
    )
}

export default Dia