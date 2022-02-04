import CardList from "../../components/CardList"
import {useState} from "react"

function Home({disciplinas}){
    function adicionarPoder(){
        console.log("funciona")
    }


    const [meusPoderes, setMeusPoderes] = useState();


    return (
        <div>
            <h1>Minhas Disciplinas</h1>
            <CardList powers={disciplinas} adicionarPoder={adicionarPoder}/>
        </div>
    )
}
export default Home
