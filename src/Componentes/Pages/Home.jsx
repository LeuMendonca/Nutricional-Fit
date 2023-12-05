import Dia from "../Layout/Dia"
import styles from '../Pages/Home.module.css'


function Home(){

    const meses30 = [ 4 , 6 , 9 , 11]
    const meses31 = [ 1 , 3 , 5 , 7 , 8 , 10, 12]
    const meses28ou29 = [2]

    const data_hoje = new Date()
    const mes_atual = data_hoje.getMonth() + 1

    console.log(mes_atual)

    const calendario = function(){
        const dias = []

        if ( meses31.includes( mes_atual )){
            for(let c = 1 ; c < 32 ; c++ ) {
              dias.push(<Dia key={c} numeroDia={c}/>)
            }
        }

        return dias
    }

    return(
        <div className={styles.calendario}>
            { calendario() }
        </div>
    )
}

export default Home