import './App.css';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import Disciplinas from './components/Pages/Disciplinas';

function App() {

  const todosPoderes =  [   
    {
      id:1,  
      disciplina:'animalismo',
        poder: 'Vincular Famulus',
        nivel:'1', 
        descricao:'Quando estiver fazendo Laço de Sangue com um animal, o vampiro pode torná-lo um fâmulus, formando uma ligação mental com ele e facilitando o uso dos outros poderes de Animalismo. Enquanto este poder sozinho não permita a comunicação bilateral com o animal, ele pode seguir simples instruções verbais tal como “fique” e “venha aqui”. Ele ataca em defesa de si mesmo e seu mestre, mas do contrário não pode ser persuadido a enfrentar algo que ele normalmente não atacaria.', 
        parada: 'Carisma + Empatia c/ Animais.', 
        custo: 'O animal deve ser alimentado com o Sangue do usuário em três noites separadas, cada uma da qual requer uma Checagem de Incitar pelo o usuário. A quantidade de Sangue necessária para sustentar o estado de carniçal do animal após isso é insignificante. Os jogadores começando com este poder completaram este processo e podem escolher de graça um familiar', 
        sistema: 'Sem o uso do Sussurros Selvagens, abaixo, dar comandos ao animal requer uma rolagem de Carisma + Empatia c/ Animais (Dificuldade 2); aumente a Dificuldade para ordens mais complexas. Um vampiro pode ter somente um familiar, mas pode conseguir um novo se o atual morrer. Um vampiro pode usar Sussurros Selvagens (Animalismo 2) e Subordinar o Espírito (Animalismo 4) de graça em seu familiar.', 
        duracao: 'Somente a morte liberta um fâmulus após a sua ativação. Enquanto ele recebe o Sangue vampírico numa base regular, o fâmulus não envelhece.'
    },
    {
      id:2,  
      disciplina:'animalismo',  
        poder: 'Sentir a Besta',
        nivel:'1', 
        descricao:'O vampiro consegue sentir a Besta presente nos mortais, nos vampiros e nos outros sobrenaturais, ganhando um sentido da natureza, fome e hostilidade deles.', 
        parada: 'Perseverança + Animalismo vs. Autocontrole + Lábia.', 
        custo: 'Livre', 
        sistema: 'Uma vitória permite que usuário sinta o nível de hostilidade em um alvo (se a pessoa estiver preparada para fazer o mal ou até determinada a causá-lo) e determina se ele abriga uma Besta sobrenatural, fazendo dele um vampiro ou outro tipo de criatura sobrenatural. Em uma vitória, um crítico dá ao usuário a informação sobre o tipo exato de criatura (por exemplo, um lobisomem), assim como seu nível de Fome (ou o equivalente), e sua Ressonância. Este poder pode ser usado tanto ativamente quanto passivamente, alertando o usuário da intenção agressiva na sua proximidade mediata.', 
        duracao: 'Passivo'
    },
    { 
      id:3,
      disciplina:'animalismo',  
      poder: 'Sussurros Selvagens',
        nivel:'2', 
        descricao:'O vampire consegue se comunicar com as bestas da natureza e da cidade. Sussurros Selvagens permite a comunicação bilateral com os animais. Um gato pode não estar interessado em debater o uso de cor do Matisse, mas discutir alegremente a falta de presas em torno do prédio de arenito vermelho do outro lado da rua. Dependendo da habilidade do vampiro, ele pode até persuadir animais a realizar serviços; como os humanos, os animais raramente concordam com coisa que vão contra a sua natureza ou as coloque em perigo. Os vampiros também podem usar Sussurros Selvagens para convocar um tipo de animal escolhido (veja as limitações de Animalismo acima), mas os animais devem estar presentes para responder. Nada impede que um vampiro tente convocar uma orca no Central Park, mas o sucesso parece improvável. Os animais convocados escutam o convocador, mas se dispersam ou atacam se ameaçado. ', 
        parada:'Manipulação + Animalismo, Carisma + Animalismo.', 
        custo: 'Uma Checagem de Incitar por tipo de animal escolhido para a cena. Permita uma convocação e comunicação ilimitada. Livre quando usado em famulus.', 
        sistema: 'A simples comunicação não requer algum teste de parada de dados. Persuadir um animal a realizar um serviço requer uma rolagem de Manipulação + Animalismo; a Dificuldade depende da tarefa requisitada. Ter um pássaro de olho em qualquer pessoa entrando no parque a noite é Dificuldade 3, enquanto ordenar qualquer animal a defender um lugar com a sua vida é Dificuldade 6. Convocar animais usa uma rolagem de Carisma + Animalismo; a Dificuldade depende da escassez de animais convocados. A quantidade de animais convocados depende da margem no teste; uma vitória crítica convoca a maioria, se não todos, os animais do tipo na área.', 
        duracao: 'Uma Cena'
    },
    {
      id:4,
      disciplina:'auspícios',  
      poder: 'Sentidos Aguçados',
        nivel:'1', 
        descricao:'Os sentidos do vampiro se aprimoram à um grau sobrenatural, dando para ele a capacidade de ver na escuridão, escute frequências ultrassônicas e fareje o medo da presa encolhida.', 
        parada:'Raciocínio + Perseverança', 
        custo: 'Livre (mas veja abaixo).', 
        sistema: 'O usuário adiciona o seu índice de Auspícios à todas as paradas de percepção. Se exposto a sensações extremas, tal como estrondos altos, clarões de luz intensa ou cheiros esmagadores enquanto o poder estiver ativo, o usuário deve obter êxito em uma rolagem de Raciocínio + Perseverança (Dificuldade 3 ou mais) para diminuir seus sentidos a tempo, ou a sobrecarga faz ele sofrer uma penalidade de -3 dados à todas as rolagens baseadas em percepção pelo resto da cena.', 
        duracao: 'Até ser desativado. Ter a ativação do poder por períodos mais longos de tempo sem descansar (mais do que uma cena), especialmente para ambientes de alto estímulo, podem necessitar o gasto de Força de Vontade, à critério do Narrador'
    },
  ];

let meusPoderes = [];

function adicionarPoder(novoPoder){
  let contador = 0
  if(meusPoderes.length > 0){
    meusPoderes.map((poder, key)=>{if(novoPoder.id === poder.id){contador ++; }})
    if(contador === 0){
      meusPoderes.push(novoPoder) 
      alert("Poder " +novoPoder.poder+ " adicionado com sucesso")
      contador = 0;
    }else{
      alert("Poder " +novoPoder.poder+ " já adicionado anteriormente")
    }
  }else{
    meusPoderes.push(novoPoder) 
    alert("Poder " +novoPoder.poder+ " adicionado com sucesso")
  }
}

function removerPoder(poder){
  console.log("remover Poder"+poder.poder)
}


 return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home poderes={meusPoderes} removerPoder = {removerPoder} botaoAdicionar={false} botaoRemover = {true}/>}></Route>
          <Route path="/disciplinas" element={<Disciplinas poderes={todosPoderes} adicionarPoder={adicionarPoder} botaoAdicionar={true} botaoRemover = {false}/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  
  );
}

export default App;
