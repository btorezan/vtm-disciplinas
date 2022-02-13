import styles from './CardsGroup.module.css'
import {FaAngleDown} from 'react-icons/fa'
import CardList from "../CardList"


function CardsGroup({disciplina, handleRemoverPoder, handleAdicionarPoder, logo}){
    let disciplinaNome = disciplina[0].disciplina.toLowerCase()   
    return (
        <div className={styles.disciplinas}>
                <input type="checkbox" className={styles.toggle} name={disciplinaNome} id={disciplinaNome}/>
                <label htmlFor={disciplinaNome} className={styles.lbl_toggle}>
                    <div className={styles.title}>
                        <div className={styles.text}>
                            <img src={logo} alt={disciplinaNome}/>
                            <h1>{disciplina[0].disciplina}</h1>
                        </div>
                        <i><FaAngleDown/></i>
                    </div>
                </label>
                <div className={styles.content}>
                    <CardList poderes={disciplina} handleAdicionarPoder = {handleAdicionarPoder} 
                    botaoAdicionar = {true} handleRemoverPoder = {handleRemoverPoder} botaoRemover = {false}/>
                </div>
            </div>
    )
}
export default CardsGroup