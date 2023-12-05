import styles from '../Formularios/InputLabel.module.css'

function InputLabel({ textLabel , type , placeholder , change}){
    return(
        <>
            <label htmlFor="">{ textLabel }: </label>
            <input type={ type } placeholder={ placeholder } onChange={change}/>
        </>
    )
}

export default InputLabel