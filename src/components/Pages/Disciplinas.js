import CardsGroup from "../CardsGroup";
import styles from "./Disciplinas.module.css"

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
            <CardsGroup disciplina={animalismo} handleAdicionarPoder={handleAdicionarPoder} handleRemoverPoder={handleRemoverPoder} logo={logoAnimalismo}/>
            <CardsGroup disciplina={auspicios} handleAdicionarPoder={handleAdicionarPoder} handleRemoverPoder={handleRemoverPoder} logo={logoAuspicios}/>
            <CardsGroup disciplina={celeridade} handleAdicionarPoder={handleAdicionarPoder} handleRemoverPoder={handleRemoverPoder} logo={logoCeleridade}/>
            <CardsGroup disciplina={dominacao} handleAdicionarPoder={handleAdicionarPoder} handleRemoverPoder={handleRemoverPoder} logo={logoDominacao}/>
            <CardsGroup disciplina={fortitude} handleAdicionarPoder={handleAdicionarPoder} handleRemoverPoder={handleRemoverPoder} logo={logoFortitude}/>
            <CardsGroup disciplina={ofuscacao} handleAdicionarPoder={handleAdicionarPoder} handleRemoverPoder={handleRemoverPoder} logo={logoOfuscacao}/>
            <CardsGroup disciplina={potencia} handleAdicionarPoder={handleAdicionarPoder} handleRemoverPoder={handleRemoverPoder} logo={logoPotencia}/>
            <CardsGroup disciplina={presenca} handleAdicionarPoder={handleAdicionarPoder} handleRemoverPoder={handleRemoverPoder} logo={logoPresenca}/>
            <CardsGroup disciplina={metamorfose} handleAdicionarPoder={handleAdicionarPoder} handleRemoverPoder={handleRemoverPoder} logo={logoMetamorfose}/>
            <CardsGroup disciplina={feiticaria} handleAdicionarPoder={handleAdicionarPoder} handleRemoverPoder={handleRemoverPoder} logo={logoFeiticaria}/>
        </div>
    )
}
export default Disciplinas