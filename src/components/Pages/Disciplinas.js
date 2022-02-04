import CardList from "../CardList"
import styles from "./Disciplinas.module.css"

function Disciplinas({poderes, adicionarPoder, botaoAdicionar, removerPoder, botaoRemover}){    
    //let animalismo = disciplinas.filter(disciplina=>disciplinas.disciplina === "animalismo");
    let animalismo = poderes.filter(poder=>poder.disciplina === "animalismo");
    let auspicios = poderes.filter(poder=>poder.disciplina === "auspícios");

    function  handleAdicionarPoder(poder){
        adicionarPoder(poder);
    }

    function  handleRemoverPoder(poder){
        removerPoder(poder);
    }

     
    return (
        <div>
            <div className={styles.disciplinas}>
                <div className={styles.title}>
                    <h1>Animalismo</h1>
                </div>
                <CardList poderes={animalismo} handleAdicionarPoder = {handleAdicionarPoder} 
                botaoAdicionar = {botaoAdicionar} handleRemoverPoder = {handleRemoverPoder} botaoRemover = {botaoRemover}/>
            </div>
            <div className={styles.disciplinas}>
                <div className={styles.title}>
                    <h1>Auspícios</h1>
                </div>
                <CardList poderes={auspicios} handleAdicionarPoder = {handleAdicionarPoder} 
                botaoAdicionar = {botaoAdicionar} handleRemoverPoder = {handleRemoverPoder} botaoRemover = {botaoRemover}/>
            </div>
        </div>
    )
}
export default Disciplinas