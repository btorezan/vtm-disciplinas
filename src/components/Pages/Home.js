import CardList from "../../components/CardList"

function Home({disciplinas}){
    return (
        <div>
            <h1>Minhas Disciplinas</h1>
            <CardList powers={disciplinas}/>
        </div>
    )
}
export default Home
