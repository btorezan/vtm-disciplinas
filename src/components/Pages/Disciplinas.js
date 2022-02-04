import CardList from "../CardList"
import styles from "./Disciplinas.module.css"

function Disciplinas({setMinhasDisciplinas, disciplinas, customDisciplina}){
    //let animalismo = disciplinas.filter(disciplina=>disciplinas.disciplina === "animalismo");
    let animalismo = disciplinas.filter(poder=>poder.disciplina === "animalismo");
    let auspicios = disciplinas.filter(poder=>poder.disciplina === "auspícios");
    //let animalismo = disciplinas.filter(poder=>poder.disciplina === "animalismo");
    //let animalismo = disciplinas.filter(poder=>poder.disciplina === "animalismo");
  
    
    return (
        <div>
            <div className={styles.disciplinas}>
                <div className={styles.title}>
                    <h1>Animalismo</h1>
                </div>
                <CardList powers={animalismo} adicionar={true}/>
            </div>
            <div className={styles.disciplinas}>
                <div className={styles.title}>
                    <h1>Auspícios</h1>
                </div>
                <CardList powers={auspicios} adicionar={true}/>
            </div>
        </div>
    )
}
export default Disciplinas