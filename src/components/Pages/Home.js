import CardList from "../../components/CardList"
import styles from "./Home.module.css"

function Home({poderes, botaoAdicionar, botaoRemover, removerPoder}){

    let meusPoderes = poderes;
    //console.log(poderes);

    function  handleRemoverPoder(poder){
        removerPoder(poder);
    }

    function reset(){
        localStorage.clear();
    }


    return (
        <div className={styles.conteiner}>
            <div className={styles.header}>
            <h1>Minhas Disciplinas</h1>
            <button className={styles.salvar} onClick={reset}>Reset</button>
            </div>
            {poderes && (<CardList poderes={meusPoderes}  botaoAdicionar = {botaoAdicionar} botaoRemover = {botaoRemover} handleRemoverPoder ={handleRemoverPoder}/>)}
        </div>
    )
}
export default Home
