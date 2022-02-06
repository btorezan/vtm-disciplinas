import CardList from "../../components/CardList"
import styles from "./Home.module.css"

function Home({poderes, botaoAdicionar, botaoRemover, removerPoder}){

    let meusPoderes = poderes;
    //console.log(poderes);

    function  handleRemoverPoder(poder){
        removerPoder(poder);
    }

    return (
        <div className={styles.conteiner}>
            <h1>Minhas Disciplinas</h1>
            {poderes && (<CardList poderes={meusPoderes}  botaoAdicionar = {botaoAdicionar} botaoRemover = {botaoRemover} handleRemoverPoder ={handleRemoverPoder}/>)}
        </div>
    )
}
export default Home
