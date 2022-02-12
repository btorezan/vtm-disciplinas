import CardList from "../CardList"
import styles from "./Disciplinas.module.css"

function Disciplinas({poderes, adicionarPoder, botaoAdicionar, removerPoder, botaoRemover}){    
    
    let animalismo  = poderes.filter(poder=>poder.disciplina === "Animalismo");
    let auspicios   = poderes.filter(poder=>poder.disciplina === "Auspícios");
    let celeridade  = poderes.filter(poder=>poder.disciplina === "Celeridade");
    let dominacao   = poderes.filter(poder=>poder.disciplina === "Dominação");
    let ofuscacao   = poderes.filter(poder=>poder.disciplina === "Ofuscação");
    let fortitude   = poderes.filter(poder=>poder.disciplina === "Fortitude");
    let potencia    = poderes.filter(poder=>poder.disciplina === "Potência");
    let presenca    = poderes.filter(poder=>poder.disciplina === "Presença");
    let metamorfose = poderes.filter(poder=>poder.disciplina === "Metamorfose");
    let feiticaria  = poderes.filter(poder=>poder.disciplina === "Feitiçaria de Sangue");
   
      
    function  handleAdicionarPoder(poder){
        adicionarPoder(poder);
    }

    function  handleRemoverPoder(poder){
        removerPoder(poder);
    }

     
    return (
        <div>
            <div className={styles.disciplinas}>
                <input type="checkbox" className={styles.toggle} name={"checkbox"+poderes.disciplina} id={"checkbox"+poderes.disciplina}/>
                <label htmlFor={"checkbox"+poderes.disciplina} className={styles.lbl_toggle}></label>
                <div className={styles.title}>
                    <h1>Animalismo</h1>
                </div>
                <div className="content">
                    <CardList poderes={animalismo} handleAdicionarPoder = {handleAdicionarPoder} 
                    botaoAdicionar = {botaoAdicionar} handleRemoverPoder = {handleRemoverPoder} botaoRemover = {botaoRemover}/>
                </div>
            </div>
            <div className={styles.disciplinas}>
                <div className={styles.title}>
                    <h1>Auspícios</h1>
                </div>
                <CardList poderes={auspicios} handleAdicionarPoder = {handleAdicionarPoder} 
                botaoAdicionar = {botaoAdicionar} handleRemoverPoder = {handleRemoverPoder} botaoRemover = {botaoRemover}/>
            </div>
            <div className={styles.disciplinas}>
                <div className={styles.title}>
                    <h1>Celeridade</h1>
                </div>
                <CardList poderes={celeridade} handleAdicionarPoder = {handleAdicionarPoder} 
                botaoAdicionar = {botaoAdicionar} handleRemoverPoder = {handleRemoverPoder} botaoRemover = {botaoRemover}/>
            </div>
            <div className={styles.disciplinas}>
                <div className={styles.title}>
                    <h1>Dominação</h1>
                </div>
                <CardList poderes={dominacao} handleAdicionarPoder = {handleAdicionarPoder} 
                botaoAdicionar = {botaoAdicionar} handleRemoverPoder = {handleRemoverPoder} botaoRemover = {botaoRemover}/>
            </div>
            <div className={styles.disciplinas}>
                <div className={styles.title}>
                    <h1>Ofuscação</h1>
                </div>
                <CardList poderes={ofuscacao} handleAdicionarPoder = {handleAdicionarPoder} 
                botaoAdicionar = {botaoAdicionar} handleRemoverPoder = {handleRemoverPoder} botaoRemover = {botaoRemover}/>
            </div>
            <div className={styles.disciplinas}>
                <div className={styles.title}>
                    <h1>Fortitude</h1>
                </div>
                <CardList poderes={fortitude} handleAdicionarPoder = {handleAdicionarPoder} 
                botaoAdicionar = {botaoAdicionar} handleRemoverPoder = {handleRemoverPoder} botaoRemover = {botaoRemover}/>
            </div>
            <div className={styles.disciplinas}>
                <div className={styles.title}>
                    <h1>Potência</h1>
                </div>
                <CardList poderes={potencia} handleAdicionarPoder = {handleAdicionarPoder} 
                botaoAdicionar = {botaoAdicionar} handleRemoverPoder = {handleRemoverPoder} botaoRemover = {botaoRemover}/>
            </div>
            <div className={styles.disciplinas}>
                <div className={styles.title}>
                    <h1>Presença</h1>
                </div>
                <CardList poderes={presenca} handleAdicionarPoder = {handleAdicionarPoder} 
                botaoAdicionar = {botaoAdicionar} handleRemoverPoder = {handleRemoverPoder} botaoRemover = {botaoRemover}/>
            </div>
            <div className={styles.disciplinas}>
                <div className={styles.title}>
                    <h1>Metamorfose</h1>
                </div>
                <CardList poderes={metamorfose} handleAdicionarPoder = {handleAdicionarPoder} 
                botaoAdicionar = {botaoAdicionar} handleRemoverPoder = {handleRemoverPoder} botaoRemover = {botaoRemover}/>
            </div>
            <div className={styles.disciplinas}>
                <div className={styles.title}>
                    <h1>Feitiçaria de Sangue</h1>
                </div>
                <CardList poderes={feiticaria} handleAdicionarPoder = {handleAdicionarPoder} 
                botaoAdicionar = {botaoAdicionar} handleRemoverPoder = {handleRemoverPoder} botaoRemover = {botaoRemover}/>
            </div>
        </div>
    )
}
export default Disciplinas