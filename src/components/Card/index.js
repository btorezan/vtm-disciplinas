import styles from "./Card.module.css"
import logoAnimalism from "../../assets/animalism.png";
import logoAuspex from "../../assets/auspex.png";
import logoCelerity from "../../assets/celerity.png";
import logoNivel1 from "../../assets/nvl1.png";
import logoNivel2 from "../../assets/nvl2.png";
import logoNivel3 from "../../assets/nvl3.png";
import logoNivel4 from "../../assets/nvl4.png";
import logoNivel5 from "../../assets/nvl5.png";


function Card ({poderes, adicionar, adicionarPoder}){
    //console.log(poderes.disciplina);
    let logo = "";
    switch(poderes.disciplina){
        case "animalismo": 
            logo = logoAnimalism;
            break;
        case "auspícios":
            logo = logoAuspex;
            break;
        case "celeridade":
            logo = logoCelerity;
            break;
        default: logo='';
            break;
    }



    let level = "";
    switch(poderes.nivel){
        case '1': level = logoNivel1;
        break;
        case '2': level = logoNivel2;
        break;
        case '3': level = logoNivel3;
        break;
        case '4': level = logoNivel4;
        break;
        case '5': level = logoNivel5;
        break;
        default: level = '';
        
    }
    return (
        
        <div className={styles.column}>
            <div className={styles.card}>
            <input type="checkbox" className={styles.toggle} name={"checkbox"+poderes.id} id={"checkbox"+poderes.id}/>
            <label htmlFor={"checkbox"+poderes.id} className={styles.lbl_toggle}>
                <div className={styles.header}>
                    <div className={styles.logo}><img src={logo} alt={poderes.disciplina}/></div>    
                    <div className={styles.title}>{poderes.poder}</div>    
                    <div className={styles.level}><img src={level} alt={poderes.nivel}/></div>    
                </div>
                </label>
           
                <div className={styles.content}>
                    <div className={styles.description}><h3>Descrição:</h3>{poderes.descricao}</div>
                    <div className={styles.cost}><h3>Custo:</h3>{poderes.custo}</div>
                    <div className={styles.process}><h3>Parada:</h3>{poderes.parada}</div>
                    <div className={styles.system}><h3>Sistema:</h3>{poderes.sistema}</div>
                    <div className={styles.duration}><h3>Duração:</h3>{poderes.duracao}</div>
                </div>
                <div className={styles.footer}>
                    {adicionar && (<button onClick={adicionarPoder}>Adicionar</button>)}
                </div>
            </div>
        </div>
    )
}
export default Card;