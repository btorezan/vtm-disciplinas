import CardList from "../../components/CardList"

function Home({disciplinas}){
    return (
        <div>
            <CardList powers={disciplinas}/>
        </div>
    )
}
export default Home