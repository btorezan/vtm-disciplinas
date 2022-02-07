import styles from "./Card.module.css"
import logoAnimalismo from "../../assets/animalismo.png";
import logoAuspicios from "../../assets/auspicios.png";
import logoCeleridade from "../../assets/celeridade.png";
import logoDominacao from "../../assets/dominacao.png";
import logoFeiticaria from "../../assets/feiticaria.png";
import logoFortitude from "../../assets/fortitude.png";
import logoMetamorfose from "../../assets/metamorfose.png";
import logoOfuscacao from "../../assets/ofuscacao.png";
import logoPotencia from "../../assets/potencia.png";
import logoPresenca from "../../assets/presenca.png";


import logoNivel1 from "../../assets/nvl1.png";
import logoNivel2 from "../../assets/nvl2.png";
import logoNivel3 from "../../assets/nvl3.png";
import logoNivel4 from "../../assets/nvl4.png";
import logoNivel5 from "../../assets/nvl5.png";


function Card ({poder, adicionarPoder, botaoAdicionar, removerPoder, botaoRemover}){
    let logo = "";
    switch(poder.disciplina){
        case "Animalismo": 
            logo = logoAnimalismo;
            break;
        case "Auspícios":
            logo = logoAuspicios;
            break;
        case "Celeridade":
            logo = logoCeleridade;
            break;
        case "Dominação":
            logo = logoDominacao;
            break;
        case "Feitiçaria de Sangue":
            logo = logoFeiticaria;
            break;
        case "Fortitude":
            logo = logoFortitude;
            break;
        case "Metamorfose":
            logo = logoMetamorfose;
            break;
        case "Ofuscação":
            logo = logoOfuscacao;
            break;
        case "Potência":
            logo = logoPotencia;
            break;
        case "Presença":
            logo = logoPresenca;
            break;
        default: logo='';
            break;
    }



    let level = "";
    switch(poder.nivel){
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

    const add = (e) => {
        e.preventDefault();
        adicionarPoder(poder)
    }

    const remove = (e) => {
        e.preventDefault();
        removerPoder(poder)
    }



    return (
        
        <div className={styles.column}>
            <div className={styles.card}>
            <input type="checkbox" className={styles.toggle} name={"checkbox"+poder.id} id={"checkbox"+poder.id}/>
            <label htmlFor={"checkbox"+poder.id} className={styles.lbl_toggle}>
                <div className={styles.header}>
                    <div className={styles.logo}><img src={logo} alt={poder.disciplina}/></div>    
                    <div className={styles.title}>{poder.poder}</div>    
                    <div className={styles.level}><img src={level} alt={poder.nivel}/></div>    
                </div>
                </label>
           
                <div className={styles.content}>
                    <div className={styles.description}><h3>Descrição:</h3>{poder.descricao}</div>
                    <div className={styles.cost}><h3>Custo:</h3>{poder.custo}</div>
                    <div className={styles.process}><h3>Parada:</h3>{poder.parada}</div>
                    <div className={styles.system}><h3>Sistema:</h3>{poder.sistema}</div>
                    <div className={styles.duration}><h3>Duração:</h3>{poder.duracao}</div>
                </div>
                <div className={styles.footer}>
                    {botaoAdicionar && (<button className={styles.btn_add} onClick={add}>Adicionar</button>)}
                    {botaoRemover && (<button className={styles.btn_remove  } onClick={remove}>Remover</button>)}
                </div>
            </div>
        </div>
    )
}
export default Card;