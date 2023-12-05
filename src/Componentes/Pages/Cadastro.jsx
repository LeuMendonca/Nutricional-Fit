import InputLabel from "../Formularios/InputLabel"
import styles from '../Pages/Cadastro.module.css'
import { useState } from "react"

function Cadastro(){

    const [cafeManha , setCafeManha] = useState('')
    const [almoco , setAlmoco] = useState('')
    const [cafeTarde , setCafeTarde] = useState('')
    const [janta , setJanta] = useState('')

    return(
            
            <form action="post" className={ styles.formCadastro}>

                <h1>Cadastro</h1>

                <InputLabel type={ 'text' } textLabel={'Café da Manhã'} placeholder={"Ex: Pão de sal com uma fatia de mussarela"} change={ (e) => setCafeManha(e.target.value)}/>
                <InputLabel type={ 'text' } textLabel={'Almoço'} placeholder={"Ex: Arroz, feijão , carne , salada"} change={ (e) => setAlmoco(e.target.value)}/>
                <InputLabel type={ 'text' } textLabel={'Café da Tarde'} placeholder={"Ex: Bolo de milho com suco natural de laranja"} change={ (e) => setCafeTarde(e.target.value)}/>
                <InputLabel type={ 'text' } textLabel={'Jantar'} placeholder={"Ex: Ovo mechido com banana e mel"} change={ (e) => setJanta(e.target.value)}/>

                <br />
                
                <input type="submit" value="Enviar" />
            </form>
    )
}

export default Cadastro