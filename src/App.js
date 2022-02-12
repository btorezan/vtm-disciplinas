import './App.css';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import Disciplinas from './components/Pages/Disciplinas';
import {useEffect, useState} from 'react';

function App() {

 const todosPoderes =  [
    {
      id: "1",
      disciplina: "Animalismo",
      nivel: "1",
      poder: "Vincular Fâmulus",
      descricao: "Quando estiver fazendo Laço de Sangue com um animal, o vampiro pode torná-lo um fâmulus, formando uma ligação mental com ele e facilitando o uso dos outros poderes de Animalismo. Enquanto este poder sozinho não permita a comunicação bilateral com o animal, ele pode seguir simples instruções verbais tal como “fique” e “venha aqui”. Ele ataca em defesa de si mesmo e seu mestre, mas do contrário não pode ser persuadido a enfrentar algo que ele normalmente não atacaria.",
      custo: "O animal deve ser alimentado com o Sangue do usuário em três noites separadas, cada uma da qual requer uma Checagem de Incitar pelo o usuário. A quantidade de Sangue necessária para sustentar o estado de carniçal do animal após isso é insignificante. Os jogadores começando com este poder completaram este processo e podem escolher de graça um familiar.",
      parada: "Carisma + Empatia c/ Animais.",
      sistema: "Sem o uso do Sussurros Selvagens, abaixo, dar comandos ao animal requer uma rolagem de Carisma + Empatia c/ Animais (Dificuldade 2); aumente a Dificuldade para ordens mais complexas. Um vampiro pode ter somente um familiar, mas pode conseguir um novo se o atual morrer. Um vampiro pode usar Sussurros Selvagens (Animalismo 2) e Subordinar o Espírito (Animalismo 4) de graça em seu familiar",
      duracao: "Somente a morte liberta um fâmulus após a sua ativação. Enquanto ele recebe o Sangue vampírico numa base regular, o fâmulus não envelhece."
  },
  {
      id: "2",
      disciplina: "Animalismo",
      nivel: "1",
      poder: "Sentir a Besta",
      descricao: "O vampiro consegue sentir a Besta presente nos mortais, nos vampiros e nos outros sobrenaturais, ganhando um sentido da natureza, fome e hostilidade deles.",
      custo: "Livre",
      parada: "Perseverança + Animalismo vs. Autocontrole + Lábia.",
      sistema: "Uma vitória permite que usuário sinta o nível de hostilidade em um alvo (se a pessoa estiver preparada para fazer o mal ou até determinada a causá-lo) e determina se ele abriga uma Besta sobrenatural, fazendo dele um vampiro ou outro tipo de criatura sobrenatural. Em uma vitória, um crítico dá ao usuário a informação sobre o tipo exato de criatura (por exemplo, um\r\nlobisomem), assim como seu nível de Fome (ou o equivalente), e sua Ressonância. Este poder\r\npode ser usado tanto ativamente quanto passivamente, alertando o usuário da intenção agressiva\r\nna sua proximidade imediata.",
      duracao: "Passivo"
  },
  {
      id: "3",
      disciplina: "Animalismo",
      nivel: "2",
      poder: "Sussurros Selvagens",
      descricao: "O vampire consegue se comunicar com as bestas da natureza e da cidade. Sussurros Selvagens permite a comunicação bilateral com os animais. Um gato pode não estar interessado em debater o uso de cor do Matisse, mas discutir alegremente a falta de presas em torno do prédio de arenito vermelho do outro lado da rua. Dependendo da habilidade do vampiro, ele pode até persuadir animais a realizar serviços; como os humanos, os animais raramente concordam com coisa que vão contra a sua natureza ou as coloque em perigo. Os vampiros também podem usar Sussurros Selvagens para convocar um tipo de animal escolhido (veja as limitações de Animalismo acima), mas os animais devem estar presentes para responder. Nada impede que um vampiro tente convocar uma orca no Central Park, mas o sucesso parece improvável. Os animais convocados escutam o convocador, mas se dispersam ou atacam se ameaçado.",
      custo: "Uma Checagem de Incitar por tipo de animal escolhido para a cena. Permita uma convocação e comunicação ilimitada. Livre quando usado em famulus.",
      parada: "Manipulação + Animalismo, Carisma + Animalismo",
      sistema: "A simples comunicação não requer algum teste de parada de dados. Persuadir um animal a realizar um serviço requer uma rolagem de Manipulação + Animalismo; a Dificuldade depende da tarefa requisitada. Ter um pássaro de olho em qualquer pessoa entrando no parque a noite é Dificuldade 3, enquanto ordenar qualquer animal a defender um lugar com a sua vida é Dificuldade 6. Convocar animais usa uma rolagem de Carisma + Animalismo; a Dificuldade depende da\r\nescassez de animais convocados. A quantidade de animais convocados depende da margem no\r\nteste; uma vitória crítica convoca a maioria, se não todos, os animais do tipo na área.",
      duracao: "Uma cena."
  },
  {
      id: "4",
      disciplina: "Animalismo",
      nivel: "3",
      poder: "Suculência Animal",
      descricao: "O vampiro pode saciar uma Fome adicional ao se alimentar de animais. Além disso, o vampiro pode consumir seu fâmulus, ganhando sustem bem além do que teria ganho de um animal de estatura similar, e absorvendo uma fatia de característica primária",
      custo: "Livre.",
      sistema: "Alimentar-se de animais sacia 1 de Fome adicional, e o vampiro conta a sua Potência do Sangue como dois níveis mais abaixo com relação às penalidades para saciar a Fome a partir do sangue animal. Consumir o fâmulus de alguém sacia 4 de Fome, independentemente do tamanho do animal. Este ato nunca pode remover o dado de Fome final. Além disso, consumir o fâmulus de alguém aumenta o Atributo do vampiro mais associado com esse animal (como determinado pelo Narrador) em dois pontos. Consumir um gato pode elevar a Destreza ou o Autocontrole; consumir um cachorro pode elevar o Carisma ou a Perseverança. Os Narradores podem variar a recompensa a partir da consumação do fâmulus: drenar uma coruja pode elevar o Atributo em 227 qualquer parada de percepção em dois pontos, ou nas paradas envolvendo a tomada de decisão sábia. O bônus dura até a próxima alimentação do vampiro ou até a sua Fome chegar à 5.",
      duracao: "Passiva"
  },
  {
      id: "5",
      disciplina: "Animalismo",
      nivel: "3",
      poder: "Domar a Besta",
      descricao: "Ao travar os olhos com um alvo, o vampiro acua a Besta interna dele para uma letargia temporária. Os mortais afetados desta maneira ficam apáticos, incapazes de realizar quaisquer ações senão permanecer vivo, enquanto os desejos bestiais dos vampiros diminuem temporariamente, para o bem ou par ao mal.",
      custo: "Uma Checagem de Incitar.",
      parada: "Carisma + Animalismo vs. Vigor + Perseverança.",
      sistema: "Role Carisma + Animalismo vs. Vigor + Perseverança. Uma vitória contra um alvo mortal incapacita-o por essa cena, instilando uma letargia severa. Ele age somente para se preservar, e não contra o usuário ou qualquer outro. Uma vitória contra um vampiro impede o alvo de realizar Explosões de Sangue. Enquanto a Besta dele é domada, o vampiro não marca críticos bagunçados. Contra vampiros, este poder dura um turno mais uma quantidade de turnos igual à margem da vitória na disputa. Uma vitória crítica contra um alvo vampiro também encerra o frenesi dele.",
      duracao: "Uma cena, ou uma quantidade de turnos igual à margem do teste mais um."
  },
  {
      id: "6",
      disciplina: "Animalismo",
      nivel: "3",
      poder: "Colmeia Morta-Viva (Amalgama: Ofuscação 2)",
      descricao: "Mais frequentemente visto entre os Nosferatu, este poder inquietante permite que o usuário estenda a sua influência animal para os enxames de insetos, tal como moscas ou baratas. Certos vampiros até vão tão longe para adotar os enxames como fâmuli, dando à eles um lar permanente dentro das dobras e orifícios de sua carne malformada.",
      custo: "Nenhum custo adicional.",
      sistema: "Este poder se estende à todos os poderes anteriormente restringidos às vertebrados para enxames de insetos, tratando um exame como uma única criatura. O vampiro pode vincular o enxame como um fâmulus, e alguns até dão à ele a habilidade de se aninhar dentro das cavidades do seu corpo. Isto oculta o enxame da vista, enquanto o permite se alimentar de quantidades minúsculas de Sangue necessárias para  sustentá-lo indefinidamente. Enquanto estiver aninhado, o enxame é indetectável por qualquer coisa a não ser os Raios X. Os enxames causam pouco dano em combate. Eles têm Vitalidade 5 e uma parada de 8 dados para resistir aos ataques. Os enxames tomam dano Superficial a partir da Briga; chama e inseticida causa dano Agravado. Os vampiros podem usar os enxames para espirar, como distrações (resultante em uma penalidade de dois dados em qualquer rolagem para um único indivíduo enxameado), ou para intimidar mortais (adicione entre um e três dados às paradas de Intimidação, dependendo do tipo de inseto e as fobias da vítima). Os jogadores e os Narradores podem indubitavelmente surgir com usos ainda mais criativos deste poder.",
      duracao: "Passivo."
  },
  {
      id: "7",
      disciplina: "Animalismo",
      nivel: "4",
      poder: "Subordinar o Espírito",
      descricao: "O vampiro pode transferir completamente a sua mente para o corpo de um animal. Ele consegue controlar o animal e usar livremente seus sentidos, até durante o dia ele deve conseguir permanecer acordado. Enquanto estiver fazendo isso, o corpo do vampiro fica imóvel, como se em torpor.",
      custo: "Uma Checagem de Incitar. Livre, se usado em fâmulus.",
      parada: "Manipulação + Animalismo.",
      sistema: "Faça um teste de Manipulação + Animalismo; Dificuldade 4. Em uma vitória, o vampiro consegue habitar o corpo do animal por uma cena. Em uma vitória crítica, o vampiro consegue habitar o animal indefinitivamente.\r\nEstender esta possessão para as horas da luz do dia requer que o vampiro fique acordado (pág. 219); ver o sol requer um teste para o frenesi de medo, embora a luz do sol não cause dano ao ser animal dominado. O usuário permanece alheio à seu corpo original, mas o dano à ele o retira do transe e liberta o animal. A morte do animal possuído também encerra o transe, e o vampiro toma um ponto de dano Agravado de Força de Vontade a partir do choque.",
      duracao: "A duração do Frenesi (veja pág. 220)."
  },
  {
      id: "8",
      disciplina: "Animalismo",
      nivel: "5",
      poder: "Domínio Animal",
      descricao: "O poder que o vampiro possui sobre as bestas é agora grande o suficiente para comandar bandos e matilhas como se eles fossem extensões de seu próprio corpo. Com um gesto, os animais desistem de suas vidas em dezenas, até centenas, para aplacar seu mestre.",
      custo: "Duas Checagens de Incitar.",
      parada: "Carisma + Animalismo.",
      sistema: "Escolha um tipo de animal e faça uma rolagem de Carisma + Animalismo com uma Dificuldade dependendo da natureza dos animais e a ordem dada. Conseguir um bando de corvos para se dispersar e procurar por um indivíduo específico (dado alguns meios de identificação do seu alvo) é relativamente fácil (Dificuldade 3), mas conseguir uma matilha de cães para dar as suas vidas em um ataque suicida em outro vampiro é mais um desafio (Dificuldade 5). O poder não permite que o usuário convoque animais, mas compele aqueles já presentes a obedecer. O vampiro pode comandar os animais a retornar após completar a sua tarefa, se eles tiverem meios de assim fazê-lo.",
      duracao: "Uma única cena, ou até a diretiva ser cumprida, o que for mais curto."
  },
  {
      id: "9",
      disciplina: "Animalismo",
      nivel: "5",
      poder: "Extrair a Besta",
      descricao: "O vampiro consegue projetar a sua Besta no momento do frenesi de terror ou de fúria, transferindo-a para um sujeito próximo, mortal ou vampiro. Essa pessoa imediatamente vivencia o frenesi em seu lugar, seguindo em uma fúria impiedosa ou fugindo em terror, dependendo da causa.",
      custo: "Uma Checagem de Incitar.",
      parada: "Raciocínio + Animalismo vs. Autocontrole + Perseverança.",
      sistema: "Ao invés da rolagem de Força de Vontade para resistir à um frenesi de terror ou de fúria, role Raciocínio + Animalismo vs. o Autocontrole + Perseverança do alvo. Se o usuário falhar, ele entra em frenesi como se ele tivesse falhado na rolagem de Força de Vontade. Em uma vitória, o alvo vivencia esse frenesi ao invés do usuário. O estímulo subsequente ainda\r\n229\r\npode provocar o frenesi do usuário, mas ele consegue usar este poder enquanto ele puder fazer Checagens de Incitar e alvos adicionais restarem disponíveis.\r\nEste poder não consegue transferir um frenesi de fome.",
      duracao: "duração do Frenesi (veja pág. 220)."
  },
  {
      id: "10",
      disciplina: "Auspícios",
      nivel: "1",
      poder: "Sentidos Aguçados",
      descricao: "Os sentidos do vampiro se aprimoram à um grau sobrenatural, dando para ele a capacidade de ver na escuridão, escute frequências ultrassônicas e fareje o medo da presa encolhida.",
      custo: "Livre (mas veja abaixo).",
      parada: "Raciocínio + Perseverança.",
      sistema: "O usuário adiciona o seu índice de Auspícios à todas as paradas de percepção. Se exposto a sensações extremas, tal como estrondos altos, clarões de luz intensa ou cheiros esmagadores enquanto o poder estiver ativo, o usuário deve obter êxito em uma rolagem de Raciocínio + Perseverança (Dificuldade 3 ou mais) para diminuir seus sentidos a tempo, ou a sobrecarga faz ele sofrer uma penalidade de -3 dados à todas as rolagens baseadas em percepção pelo resto da cena.",
      duracao: "Até ser desativado. Ter a ativação do poder por períodos mais longos de tempo sem descansar (mais do que uma cena), especialmente para ambientes de alto estímulo, podem necessitar o gasto de Força de Vontade, à critério do Narrador."
  },
  {
      id: "11",
      disciplina: "Auspícios",
      nivel: "1",
      poder: "Sentir o Invisível",
      descricao: "Os sentidos do vampiro ficam adaptados a dimensões além do mundano, permitindo que ele sinta presenças senão ocultas ao olho nu. Isto pode ser qualquer coisa, de outro vampiro usando Ofuscação para alguém usando Auspícios para espionar o personagem como um fantasma no meio da sala. Feitiços e rituais de Feitiçaria do Sangue latentes também podem ser encontrados com este poder, à critério do Narrador.",
      custo: "Livre.",
      parada: "Raciocínio + Auspícios ou Perseverança + Auspícios",
      sistema: "Sempre que houver algo sobrenatural se escondendo da plena vista, o Narrador faz uma rolagem escondida de Raciocínio + Auspícios contra uma Dificuldade que ele escolher. Contra uma entidade ativamente tentando ficar escondida, o Narrador pode pedir por uma rolagem cega (“Lisa, role sete dados para mim”) como uma disputa contra a parada relevante do alvo. (Por exemplo, detectar um vampiro usando Ofuscação seria uma rolagem de Raciocínio + Auspícios vs. Raciocínio + Ofuscação). Se o vampiro ativamente procurar por uma entidade sobrenatural oculta, ele rola Perseverança + Auspícios similarmente.\r\nO usuário também pode ativamente provocar uma premonição ao se focar em um sujeito, fazendo uma Checagem de Incitar e rolar Perseverança + Auspícios. A quantidade de sucessos obtidos determina o nível de discernimento sobre o sujeito, se houver algum.",
      duracao: "Passivo."
  },
  {
      id: "12",
      disciplina: "Auspícios",
      nivel: "2",
      poder: "Premonição",
      descricao: "O vampiro vivencia clarões de discernimento. Esses podem assumir a forma de pelos levantados, inspiração repentina ou até visões vívidas. Enquanto nunca muito precisas, estas visões podem empurrar o vampiro para fora do caminho do ferimento ou revelar uma verdade anteriormente despercebida.",
      custo: "Livre ou uma Checagem de Incitar.",
      parada: "Perseverança + Auspícios.",
      sistema: "Sempre que o Narrador considerar apropriado, este poder dá ao personagem uma dica repentina do que auxilia ele em alguma forma: deixar ele encontrar uma pista que ele deixou passar ou salvá-lo do perigo. Se isto der ao personagem uma visão repentina de si caminhando para uma armadilha, um brilho vermelho atraente na segunda virada para a direita durante uma perseguição, ou o breve clarão de um esqueleto debaixo das tábuas de assoalho no escritório do Príncipe, este poder sempre dá ao Narrador a licença para sutilmente acelerar o jogo ou deslocar a história para um caminho desejado. O limite sugerido é uma premonição por cena, mesmo se mais do que um personagem tiver Premonição.",
      duracao: "Passivo."
  },
  {
      id: "13",
      disciplina: "Auspícios",
      nivel: "3",
      poder: "Prever A Alma",
      descricao: "Ao se focar em uma pessoa, o vampiro consegue perceber o estado da psiquê dessa pessoa como uma aura mutável de cores. As auras revelam pouca informação precisa, mas fornecem pistas com relação à muitos assuntos, por exemplo, o estado emocional, a Ressonância e as características sobrenaturais. Se estiver procurando por uma condição específica, o vampiro consegue superficialmente escanear a multidão para detectá-la. Tais escaneadas superficiais não fornecem alguma informação adicional.",
      custo: "Uma Checagem de Incitar.",
      parada: "Inteligência + Auspícios vs. Autocontrole + Lábia.",
      sistema: "Faça uma rolagem de Inteligência + Auspícios vs. Autocontrole + Lábia. Em uma vitória, o Narrador responde verdadeiramente à uma quantidade de perguntas igual à margem da rolagem sobre a aura e psiquê do alvo, incluindo:\r\no O estado emocional do sujeito;\r\no A Ressonância no sangue do sujeito;\r\no Se o sujeito é um vampiro, lobisomem, carniçal ou qualquer outro ser sobrenatural;\r\no Se o sujeito está sob a influência de Feitiçaria do Sangue ou outra mágica;\r\no Se o sujeito cometeu diablerie até um ano atrás;\r\no Uma vitória crítica permite a descoberta de algo inesperado, conforme determinado pelo Narrador.\r\nSe estiver escaneando uma multidão, role contra uma Dificuldade determinada pelo tamanho da multidão e distrações externas, assim como o tipo de característica sendo procurada. (Achar o vampiro na sala de estar pode ser somente uma Dificuldade 3, enquanto encontrar a pessoa mais nervosa em uma rave lotada é muito provavelmente Dificuldade 6 ou maior).",
      duracao: "Um turno, ou à critério do Narrador."
  },
  {
      id: "14",
      disciplina: "Auspícios",
      nivel: "3",
      poder: "Compartilhar Os Sentidos",
      descricao: "Ao chegar com a sua mente, o vampiro consegue acessar os sentidos de outro mortal ou vampiro, vendo, escutando e sentindo o que ele sente. O usuário ainda retém as suas próprias percepções e ainda fica ciente de seus próprios arredores, embora o efeito requeira algum tempo para se acostumar. O usuário decide se acessa somente um, alguns ou todos os sentidos do alvo. Quando acostumado com o estranho, este poder requerer uma linha de visão para iniciar. Entretanto, ele pode ser usado por distâncias maiores em alguém que ainda tem um pouco do Sangue do usuário em seu corpo.",
      custo: "Uma Checagem de Incitar.",
      parada: "Perseverança + Auspícios.",
      sistema: "Role Perseverança + Auspícios em Dificuldade 3. Esta Dificuldade pode subir, dependendo da distração, distância e outros fatores, tal como a quantidade de Sangue do usuário que resta no alvo. O alvo geralmente permanece inconsciente da intrusão, mas o Sentir o Invisível pode permitir que o passageiro seja notificado. Para se livrar de um passageiro indesejado, a vítima deve derrotar o intruso em uma rolagem de Raciocínio + Perseverança vs. Raciocínio + Perseverança. Um usuário de Auspícios arremessado para fora desta forma não pode fazer outra tentativa de Compartilhar até a próxima noite.",
      duracao: "Uma cena."
  },
  {
      id: "15",
      disciplina: "Auspícios",
      nivel: "4",
      poder: "Toque do Espírito",
      descricao: "Ao tocar um objeto inanimado ou o solo em uma localização, o vampiro pode sentir o resíduo emocional deixado por aquele que tenha manuseado esse objeto ou visitado a localização no passado. O usuário ganha o conhecimento não apenas dessa pessoa, mas também o que foi feito e sob que circunstâncias. Enquanto raramente claríssimo, a informação frequentemente fornece guias impossíveis de conseguir a partir da investigação forense e dedução regulares.",
      custo: "Uma Checagem de Incitar.",
      parada: "Inteligência + Auspícios",
      sistema: "Faça uma rolagem de Inteligência + Auspícios versus uma Dificuldade dependendo da informação vista. Captar o estado emocional do usuário de uma arma de assassinato usada a alguns dias atrás é Dificuldade 3, mas sentir os arredores dos quais uma carta que foi escrita a 300 anos atrás se aproxima da Dificuldade 6 ou maior. Cada ponto da margem na rolagem permite que o usuário sinta aproximadamente um manuseio anterior adicional e o conjunto de circunstâncias, contando para trás a partir do mais recente.",
      duracao: "Um turno."
  },
  {
      id: "16",
      disciplina: "Auspícios",
      nivel: "5",
      poder: "Clarividência",
      descricao: "Ao fechar seus olhos e entrar em um transe leve, o vampiro se torna mestre de seus arredores. Em poucos minutos ele pode reunir informação a partir de aproximadamente uma área do tamanho de uma quadra de cidade (mais se estiver ao ar livre ou menos povoado) que normalmente levaria muitas horas, talvez dias de trabalho de campo e investigação. Uma vez conectado de tal forma à seus arredores, o vampiro consegue também receber a informação de qualquer coisa acontecendo fora do comum na área.",
      custo: "Uma Checagem de Incitar.",
      parada: "Inteligência + Auspícios",
      sistema: "Role Inteligência + Auspícios contra uma Dificuldade baseada na segurança e nível de atividade da área. Usar Clarividência na mansão de alguém seria Dificuldade 3, enquanto uma quadra de cidade desconhecida nas favelas de uma cidade maior equivaleria a 7 ou mais. O usuário adiciona o índice base de Refúgio nos dados extras na parada quando estiver usando Clarividência em seu próprio refúgio.\r\nO Narrador responde às perguntas do vampiro sobre as idas e vindas na área, quais pessoas viu e escutou, assuntos de uma fofoca local, grandes choques e impressões recentes, e assim por diante. O jogador pode fazer aproximadamente uma pergunta por ponto da margem; repostas sobre informação deliberadamente escondida podem consumir mais do que um ponto. Uma vitória crítica revela algo maior, independentemente das perguntas feitas, assumindo que haja algo a revelar.\r\nO vampiro também pode clarividentemente monitorar os eventos em progresso, embora isto requeira dele permanecer na área enquanto o efeito estiver ativo.",
      duracao: "Alguns minutos para a informação ser reunida, até uma noite para vigilância."
  },
  {
      id: "17",
      disciplina: "Auspícios",
      nivel: "5",
      poder: "Possessão (Amalgama: Dominação 3.)",
      descricao: "Com este poder o vampiro consegue despir a vontade de um mortal e possuir completamente o corpo dele, usando-o como o seu próprio. Enquanto a mente do sujeito permanecer oculta para o vampiro, ele consegue fazer qualquer coisa e ir à qualquer lugar que o sujeito poderia enquanto o poder permanecer ativo. Usando isso, um vampiro pode até vivenciar a luz do sol, comida e sexualidade física a muito tempo negada à ele, com seu hospedeiro pagando o preço por qualquer abuso que o vampiro infligir no corpo dele enquanto estiver sendo carregado.",
      custo: "Duas Checagens de Incitar.",
      parada: "Perseverança + Auspícios vs. Perseverança + Inteligência",
      sistema: "Este poder pode somente ser usado em mortais. Se o mortal for um carniçal, ele deve primeiro estar em Laço de Sangue com o usuário. Antes da possessão puder começar, o vampiro deve ter um contato visual com a sua vítima (Veja Dominação, pág. 254). O usuário então se engaja em uma disputa de Perseverança + Auspícios vs. Perseverança + Inteligência com a vítima de forma a habitar o corpo dela. em uma disputa de Perseverança + Auspícios vs. Perseverança + Inteligência com a vítima de forma a habitar o corpo dela. Se o jogador do vampiro obtiver uma falha total, a vítima fica imune às tentativas de Possessão adicionais pela duração da história.\r\nUma vez que o vampiro habite o corpo de sua vítima, o seu próprio corpo cai em um transe como de um torpor, completamente inconsciente de seus arredores e seu próprio estado físico, exceto por dano Agravado, o que quebra o transe e encerra os efeitos. Um vampiro possuindo um mortal consegue usar Auspícios, Presença e Dominação através dele. Se o usuário desejar estender a Possessão para o dia, ele deve fazer uma rolagem para ficar acordado (pág. 219). Falhar em ficar acordado encerra o poder. Qualquer dano Agravado ao sujeito também coloca em risco encerrar a possessão - o usuário deve obter êxito em uma rolagem de Perseverança + Auspícios (Dificuldade 2 + dano tomado) para ficar no controle. Se o sujeito morrer durante a Possessão, o trauma espiritual resultante imediatamente faz o usuário sofrer três níveis de dano Agravado à Força de Vontade.\r\nEste poder não dá ao usuário a habilidade para ler a mente, usar as habilidades ou emular as maneiras da vítima. Quaisquer habilidades empregadas usam o índice do vampiro possessor. O usuário deve fazer uma rolagem de Manipulação + Performance vs. Raciocínio + Discernimento para bem-sucedidamente personificar as maneiras, expressões e similares da vítima.\r\nFinalmente, a Possessão viola a vítima ainda mais profundamente do que um Laço de Sangue. O Narrador deve considerar entregar Manchas por esta ação.",
      duracao: "Até ter encerrado, voluntariamente ou involuntariamente"
  },
  {
      id: "18",
      disciplina: "Auspícios",
      nivel: "5",
      poder: "Telepatia",
      descricao: "Nos níveis mais altos de Auspícios, o vampiro consegue agora literalmente ler mentes, assim como projetar seus próprios pensamentos para as mentes dos outros. Enquanto ler a mente de um mortal é relativamente simples, as mentes mortas-vivas requerem um esforço maior para penetrar.",
      custo: "Uma Checagem de Incitar (mais um de Força de Vontade vs. Vampiros não consentidos).",
      parada: "Perseverança + Auspícios vs. Raciocínio + Lábia.",
      sistema: "Não é demandado do usuário rolar qualquer dado para projetar seu pensamento à outro, vampiro ou moral, embora eles demandem uma linha de visão. Para ler a mente de um mortal dentro da linha de visão, role Perseverança + Auspícios vs. Raciocínio + Lábia enquanto estiver olhando para os olhos dele. (A menos que o mortal consinta, cujo caso nenhuma rolagem é necessária). Uma vitória significa que o usuário consegue discernir os pensamentos superficiais como uma onda de imagens, com uma margem maior permitindo que o usuário procure por memórias mais distantes ou enterradas. Uma vitória crítica dá uma imagem coerente doas atuais pensamento e intenções do sujeito. Para ler a mente de um vampiro não consentido, gasta-se um ponto de Força de Vontade antes de rolar.",
      duracao: "Aproximadamente um minuto por Checagem de Incitar. Aumentada para uma cena em sujeitos consentidos."
  },
  {
      id: "19",
      disciplina: "Celeridade",
      nivel: "1",
      poder: "Elegância de Gato",
      descricao: "O vampiro ganha um equilíbrio e graça igual e superior ao dos artistas de trapézio de primeira classe. Ele consegue caminhar e até correr facilmente através de bordas e fios, e consegue manter seu equilíbrio no mais fino dos apoios.",
      custo: "Livre.",
      sistema: "O usuário automaticamente passa em qualquer rolagem baseada em Destreza ou Esportes necessárias para manter seu equilíbrio. Note que este poder não permite à ele se equilibrar no apoio que não consegue suportar seu peso.",
      duracao: "Passivo."
  },
  {
      id: "20",
      disciplina: "Celeridade",
      nivel: "1",
      poder: "Reflexos Rápidos",
      descricao: "Enquanto os seus corpos ainda não conseguem desafiar as leis da natureza, os vampiros com este poder percebem eventos instantaneamente e conseguem reagir à eles com vivacidade sobre-humana. Eles conseguem observar projéteis em aproximação à extensão que eles consigam tentar esquivar de flechas, e até balas, sem cobertura disponível.",
      custo: "Livre.",
      sistema: "Com este poder, os vampiros não sofrem alguma penalidade às suas paradas de defesa por falta de cobertura contra ataques de Armas de Fogo. Eles também podem tomar uma ação menor (veja pág. 298) no valor de dois dados por turno, tal como estar se preparando ou recarregando uma arma, de graça.",
      duracao: "Passivo."
  },
  {
      id: "21",
      disciplina: "Celeridade",
      nivel: "2",
      poder: "Suavidade",
      descricao: "O domínio deles da Celeridade agora permite que o vampiro se desloque e reaja com velocidade vertiginosa.",
      custo: "Uma Checagem de Incitar.",
      sistema: "Adicione o índice de Celeridade à parada de dados do usuário para os testes de Destreza de não combate. Uma vez por turno o usuário também pode fazer isto quando estiver se defendendo com Destreza + Esportes.",
      duracao: "Uma cena."
  },
  {
      id: "22",
      disciplina: "Celeridade",
      nivel: "3",
      poder: "Piscar",
      descricao: "O vampiro rapidamente se aproxima de um adversário, engajando ou escapando num piscar de olhos. Para um observador despreparado, o usuário quase parece se teleportar, uma rajada de vento é o único sinal de sua passagem.",
      custo: "Uma Checagem de Incitar.",
      parada: "Destreza + Esportes, ou como necessário",
      sistema: "O vampiro se desloca em uma linha reta em direção à um alvo, cobrindo qualquer distância sob 50 metros enquanto ainda tiver tempo suficiente para realizar uma ação, tal como um ataque, durante o turno. Se o terreno estiver de alguma forma perigoso, o personagem precisa fazer uma rolagem de Destreza + Esportes para evitar tropeçar e vir a parar no caminho. O Narrador pode pedir por outras disputas como desejar, especialmente se o vampiro disputar com um adversário distante um objeto ou uma ação. O vampiro se engaja com um adversário com este ato de poder como se já tivesse engajado quando o turno começa.",
      duracao: "Um turno."
  },
  {
      id: "23",
      disciplina: "Celeridade",
      nivel: "3",
      poder: "Travessia",
      descricao: "Com velocidade anuviante, o vampiro consegue correr ou escalar ao longo de qualquer superfície, incluindo vertical, e até meios líquidos. Enquanto Travessia não garantir a tração sobrenatural como de um inseto, subir ou ao longo das paredes se apresentam como pouco problema. Caminhar sobre a água permanece impossível, mas o vampiro consegue correr sobre a água por uma distância limitada dado uma preparação.",
      custo: "Uma Checagem de Incitar.",
      parada: "Destreza + Esportes.",
      sistema: "Faça uma rolagem de Destreza + Esportes com uma Dificuldade de 3 (superfície inclinada com tração) à 6 (superfície vertical escorregadia, mar aberto), dependendo da superfície e ângulo. Cada ponto da margem põe o vampiro para cima ou for a; uma margem de zero põe para um alvo próximo, uma margem de 1 para alguém mais distante do que isso, e assim por diante. O Narrador deveria informar o jogador antecipadamente, se um alvo estiver distante demais para até tentar a Travessia; como regra geral, qualquer coisa acima da água mais distantes do que 60 metros (ou mais do que 30 andares acima de um prédio) provavelmente excede o alcance do poder."
  },
  {
      id: "24",
      disciplina: "Celeridade",
      nivel: "4",
      poder: "Gole de Elegância",
      descricao: "O Sangue do vampiro fica saturado com o poder da Celeridade, transmitindo uma parte desse poder à qualquer um que beba dele. Enquanto isso também é um primeiro passo para um Laço de Sangue, escravos ou servos já enlaçados têm pouco uso para tais preocupações, e até os aliados não enlaçados podem decidir enfrentar um gole por causa do poder temporário.",
      custo: "Uma Checagem de Incitar.",
      sistema: "Beber uma Checagem de Incitar digna do Sangue diretamente do usuário presenteia o bebedor com uma Celeridade temporária igual à metade dos pontos de Celeridade (arredondado para baixo) do doador. O bebedor ganha os mesmos poderes não Amalgama como o doador, até esse nível.",
      duracao: "Uma noite; para vampiros, até a próxima alimentação ou o vampiro chegar à Fome 5."
  },
  {
      id: "25",
      disciplina: "Celeridade",
      nivel: "4",
      poder: "Pontaria Infalível (Amalgama: Auspícios 2)",
      descricao: "O mundo em volta dele está desacelerando para um rastejamento, o vampiro consegue mirar e arremessar ou atirar qualquer arma em um alvo, como se o alvo estivesse estacionário.",
      custo: "Uma Checagem de Incitar.",
      sistema: "Use antes de fazer um ataque à distância. O alvo não faz alguma rolagem para se esquivar ou se defender; faça o ataque em Dificuldade 1. Um oponente que possuir Celeridade 5 consegue anular este poder ao fazer a sua própria Checagem de Incitar, defendendo-se na mesma velocidade.",
      duracao: "Um único ataque"
  },
  {
      id: "26",
      disciplina: "Celeridade",
      nivel: "5",
      poder: "Ataque Relâmpago",
      descricao: "Mais rápido do que os olhos conseguem acompanhar, o vampiro consegue atacar com o punho ou arma branca em tal velocidade que o oponente fica incapaz de se defender ou tomar uma ação evasiva.",
      custo: "Uma Checagem de Incitar.",
      sistema: "Use antes de fazer um ataque de Briga ou Armas Brancas. O oponente não faz rolagem alguma para se esquivar ou se defender; faça o ataque em Dificuldade 1. Um oponente que possuir Celeridade 5 consegue anular este poder ao fazer a sua própria Checagem de Incitar, defendendo-se na mesma velocidade.",
      duracao: "Um único ataque."
  },
  {
      id: "27",
      disciplina: "Celeridade",
      nivel: "5",
      poder: "Fração de Segundo",
      descricao: "A velocidade na qual o vampiro se desloca alcança a sua percepção superalimentada, permitindo que ele reaja aos eventos em volta dele a qualquer momento. Os emboscadores encontram a sua presa já se colocando atrás deles, e auxílios solicitados são concluídos antes que as palavras deixem a boca suplicante.",
      custo: "Uma Checagem de Incitar",
      sistema: "O jogador consegue suplantar a narração de eventos do Narrador, dentro do razoável. Ele consegue escolher ter seu personagem deslocar-se por uma porta antes que ela se feche, contornar uma emboscada após ela ter sido desencadeada, rolar para for a do caminho de uma explosão, e assim por diante. A ação tomada deve ser razoável e não deve levar mais do que alguns segundos no tempo real. O Narrador decide quais Habilidades, se tiver, necessárias para se verificar a realização bem-sucedida de uma ação começada usando este poder.",
      duracao: "Aproximadamente uma ação, conforme determinado pelo Narrador."
  },
  {
      id: "28",
      disciplina: "Dominação",
      nivel: "1",
      poder: "Memória Inativa",
      descricao: "Ao pronunciar a frase “Esqueça!”, o usuário pode fazer a vítima Dominada esquecer o momento atual, assim como os últimos minutos, o suficiente para mascara uma alimentação superficial ou um encontro casual. Nenhuma memória nova é formada, e se pressionada, a vítima percebe que ela tem alguns minutos faltando.",
      custo: "Livre.",
      parada: "Carisma + Dominação vs. Raciocínio + Perseverança.",
      sistema: "Nenhuma rolagem é exigida contra uma vítima mortal despreparada. Desativar a memória de uma vítima resistindo ou outro vampiro requer uma rolagem de Carisma + Dominação vs. Raciocínio + Perseverança.",
      duracao: "Indefinidamente."
  },
  {
      id: "29",
      disciplina: "Dominação",
      nivel: "1",
      poder: "Obrigar",
      descricao: "Com o contato visual, o vampiro consegue emitir para a vítima um comando de ação única, não mais do que uma sentença curta, para ser obedecido literalmente. Precisa ser possível de completar o comando em um único turno. O Narrador decide se interpreta comandos ambíguos de uma forma inesperada ou desfavorável; alternativamente, o comando simplesmente confunde a vítima e falha.",
      custo: "Livre.",
      parada: "Carisma + Dominação vs. Inteligência + Perseverança",
      sistema: "Nenhuma rolagem é exigida contra uma vítima mortal despreparada. ´Comandar uma visita resistindo, uma vítima que o vampiro tenha Dominado anteriormente na mesma cena ou outro vampiro, requer uma disputa de Carisma + Dominação vs. Inteligência + Perseverança. Os comandos que vão contra a natureza da vítima também requerem tal disputa.",
      duracao: "Não mais do que uma única cena."
  },
  {
      id: "30",
      disciplina: "Dominação",
      nivel: "2",
      poder: "Hipnotizar",
      descricao: "O vampiro consegue emitir comandos complexos para uma vítima, enquanto ele tiver o olhar do sujeito e relativamente quieto no qual passa as instruções. As instruções devem ser realizadas imediatamente pela melhor capacidade da vítima, e não deve conter quaisquer ações condicionais (“...se você vir o Henry, dê à ele o documento”), pois isto exigiria que a vítima exercitasse a cognição.",
      custo: "Uma Checagem de Incitar.",
      parada: "Manipulação + Dominação vs. Inteligência + Perseverança",
      sistema: "Nenhuma rolagem é exigida contra uma vítima mortal despreparada. Comandar uma vítima resistindo ou outro vampiro requer uma disputa de Manipulação + Dominação vs. Inteligência + Perseverança. Os comandos que vão contra a natureza da vítima também exigem tal disputa.",
      duracao: "Até o comando for realizado ou a cena acabar, o que vier primeiro"
  },
  {
      id: "31",
      disciplina: "Dominação",
      nivel: "2",
      poder: "Demência (Amalgama: Ofuscação 2)",
      descricao: "Este poder sutil requer nada mais do que uma conversa casual, pois a influência insidiosa do vampiro se oculta entre as linhas e inflexões empregadas. A vítima encontra-se cada vez mais agitada enquanto seus demônios internos borbulham na superfície, eventualmente abafando todo senso e razão.",
      custo: "Uma Checagem de Incitar por cena.",
      parada: "Manipulação + Dominação vs. Autocontrole + Inteligência.",
      sistema: "Após engajar-se na conversa com uma vítima, o usuário pode ativar este poder. Pela duração da cena, o usuário pode atacar um único indivíduo a cada turno em uma disputa de Manipulação + Dominação vs. Autocontrole + Inteligência, causando dano Superficial à Força de Vontade. Um mortal que fica Comprometido por este poder vivencia um colapso nervoso ou um surto psicótico, onde a forma e a natureza da qual depende da sua personalidade (e talvez sua Ressonância do sangue). Um vampiro que fica Comprometido por este poder deve imediatamente sucumbir à uma Compulsão, como escolhido pelo usuário do poder.\r\nSe o usuário quiser afetar várias vítimas, ele precisa fazer uma Checagem de Incitar separada para cada uma.",
      duracao: "Uma cena."
  },
  {
      id: "32",
      disciplina: "Dominação",
      nivel: "3",
      poder: "Ordenar Esquecimentos",
      descricao: "O vampire consegue reescrever partes inteiras das memórias da vítima, enquanto ele puder manter o olhar da vítima e total atenção ininterrupta. O vampiro descreve verbalmente as novas memórias da vítima, as quais a vítima então aceita como suas próprias. Este poder não permite que o usuário investigue as verdadeiras memórias da vítima; assemelha-se à uma pintura às cegas sobre telas antigas.",
      custo: "Uma Checagem de Incitar.",
      parada: "Manipulação + Dominação vs. Inteligência + Perseverança.",
      sistema: "O usuário rola uma disputa de Manipulação + Dominação vs. Inteligência + Perseverança. Cada ponto da margem permite que o usuário adicione ou remova uma memória adicional. A vítima recorda-se das edições vagamente, e concepções nebulosas que podem desmoronar debaixo de um interrogatório. Uma vitória crítica cria uma marca perfeita, tão real quanto qualquer memória verdadeira.",
      duracao: "Indefinidamente."
  },
  {
      id: "33",
      disciplina: "Dominação",
      nivel: "3",
      poder: "Diretiva Submersa",
      descricao: "Quando estiver usando Hipnotizar, o vampiro consegue agora implantar uma sugestão pós-hipnótica, permitindo que o comando permaneça dormente até um estímulo específico ocorrer. Este gatilho pode ser qualquer coisa, desde uma data específica, à uma pessoa (“Quando você se encontrar com Roland, diga à ele estas palavras”), à escutar uma frase específica. A Diretiva Submersa nunca expira: as pessoas podem possivelmente andar por aí com uma ordem enterrada na sua mente por anos. O usuário pode somente embutir uma sugestão por vítima.",
      custo: "Nenhum custo adicional.",
      sistema: "Como o Hipnotizar, embora o Narrador possa querer fazer quaisquer rolagens em segredo. Não há uma forma de saber se a sugestão submersa funciona até as condições serem atendidas.",
      duracao: "Passivo."
  },
  {
      id: "34",
      disciplina: "Dominação",
      nivel: "4",
      poder: "Racionalizar",
      descricao: "As vítimas do vampiro agora acreditam que qualquer coisa que elas façam sob a influência do Dominador foi o resultado de seus próprias livre arbítrios, e defendem as suas ações, por mais absurdas que sejam. A exposição de longo prazo à este poder pode levar ao trama mental severo na vítima.",
      custo: "Nenhum custo adicional.",
      sistema: "Se pressionada em sua crença, a vítima pode fazer um teste de Sabedoria + Percepção (Dificuldade 5). Uma vitória os faz questionarem as suas próprias declarações, e possivelmente suas sanidades.",
      duracao: "Indefinidamente."
  },
  {
      id: "35",
      disciplina: "Dominação",
      nivel: "5",
      poder: "Manipulação em Massa",
      descricao: "O vampiro consegue agora comandar congregações de mortais, e em alguns casos até grupos de vampiros. O vampiro pode usar este poder tanto para emitir instruções quanto para manipular as memórias.",
      custo: "Uma Checagem de Incitar em adição ao custo do poder amplificado",
      sistema: "O vampiro consegue amplificar quaisquer de seus outros poderes para afetar um grupo de pessoas, mortal ou vampiro, de uma vez só. Todas as vítimas precisam ver os olhos do usuário. O usuário faz qualquer rolagem necessária contra o oponente mais forte no grupo.",
      duracao: "de acordo com o poder amplificado."
  },
  {
      id: "36",
      disciplina: "Dominação",
      nivel: "5",
      poder: "Decreto Terminal",
      descricao: "Não mais obstruído pelos instintos de autopreservação de suas vítimas, o vampiro consegue agora emitir comandos que diretamente levam ao ferimento ou a morte da vítima. Os mortais podem ser levados a explodir seus cérebros, saltar de telhados ou engolir veneno. Os vampiros podem, com um pouco de esforço, serem levados a caminhar para o fogo ou a luz do sol.",
      custo: "Nenhum custo adicional de Fome, mas o custo de Humanidade fica potencialmente severo.",
      sistema: "Comandos terminais agora devem ser resistidos (veja poderes individuais com relação às rolagens envolvidas), ao invés de falhar automaticamente",
      duracao: "Passiva."
  },
  {
      id: "37",
      disciplina: "Fortitude",
      nivel: "1",
      poder: "Resiliência",
      descricao: "Dotado com uma resistência sobrenatural, o usuário consegue fortalecer a sua determinação física.",
      custo: "Livre.",
      sistema: "O usuário adiciona o seu índice de Fortitude à sua trilha de Vitalidade.",
      duracao: "Passiva."
  },
  {
      id: "38",
      disciplina: "Fortitude",
      nivel: "1",
      poder: "Mente Inabalável",
      descricao: "O usuário ganha uma habilidade mística para resistir à qualquer tentativa de persuadi-lo através de encantos mundanos, coerção e embustes. Alguns exibem a Mente Inabalável como uma calma tipo zen, outros como obstinação sobrenatural.",
      custo: "Livre.",
      sistema: "O usuário adiciona os seus pontos em Fortitude como dados extras em qualquer rolagem feita para resistir à coerção, intimidação, sedução ou qualquer outra tentativa de persuadir a mente do usuário contra a sua vontade. Este poder também funciona contra habilidades sobrenaturais, tal como Dominação e Presença.",
      duracao: "Passiva."
  },
  {
      id: "39",
      disciplina: "Fortitude",
      nivel: "2",
      poder: "Rigidez",
      descricao: "Todos os vampiros com este poder exibem uma habilidade inata para ignorar o dano que iria, do contrário, causar inconveniência e até desabilitar outros de sua raça. Enquanto este poder sozinho não dá alguma proteção contra desgraças e outros danos agravados, a proteção que ele confere é somada a longo prazo.",
      custo: "Uma Checagem de Incitar",
      parada: "Subtraia a Fortitude do defensor de todo dano Superficial sofrido. Isso ocorre antes de reduzir pela metade o dano, e não pode reduzir o dano abaixo de um.",
      duracao: "Uma cena."
  },
  {
      id: "40",
      disciplina: "Fortitude",
      nivel: "2",
      poder: "Bestas Duradouras (Amalgama: Animalismo 1)",
      descricao: "O usuário compartilha uma pequena porção de sua rigidez sobrenatural com os animais que ele tem influência. Enxames abundantes e bestas grandes igualmente exibem uma resistência para ferimentos passageiros quase igual a do próprio vampiro.",
      custo: "Livre (para fâmulus); Uma Checagem de Incitar (para outros animais).",
      parada: "Vigor + Animalismo (para animais não fâmulus).",
      sistema: "O vampiro pode escolher estender alguns de seus poderes de Fortitude aos animai afetados por seu Animalismo. Qualquer animal desta maneira imbuído ganha níveis de Vitalidade adicionais igual aos pontos de Fortitude do vampiro. Usar este poder no seu fâmulus é livre e automático. Para imbuir outros animais além de seus fâmulus, o usuário deve fazer uma Checagem de Incitar e rolar um teste de Vigor + Animalismo (Dificuldade 3). O usuário pode fortificar um animal por ponto da margem. Quando o efeito encerra, remova primeiro a Vitalidade não marcada; isto pode resultar na morte do animal.",
      duracao: "Uma cena."
  },
  {
      id: "41",
      disciplina: "Fortitude",
      nivel: "3",
      poder: "Desafiar Perdição",
      descricao: "Ao se preparar com um dispêndio de poder, o vampiro consegue se tornar temporariamente resistente ao fogo e à luz do sol, assim como outros ferimentos graves que o ameaçaria com a Morte Final.",
      custo: "Uma Checagem de Incitar.",
      parada: "Raciocínio + Sobrevivência (para reflexivamente ativar).",
      sistema: "O usuário consegue converter uma quantidade de dano Agravado igual ao seu índice de Fortitude para dano Superficial quando sofrido.\r\nO usuário consegue renovar este poder uma vez expirado ao fazer uma outra Checagem de Incitar. Se ameaçado inesperadamente, o usuário pode ativar este poder reflexivamente com uma rolagem de Raciocínio + Sobrevivência (Dificuldade 3) em receber dano Agravado. Se o usuário falhar no teste, o poder não se ativa; se ele vencer o teste, ele deve fazer uma Checagem de Incitar para pagar o poder.",
      duracao: "Uma cena ou até ter expirado, o que vier primeiro"
  },
  {
      id: "42",
      disciplina: "Fortitude",
      nivel: "3",
      poder: "Fortificar a Fachada Interna",
      descricao: "Ao invés de endurecer a estrutura física do vampiro, este poder permite que o usuário proteja os seus pensamento e emoções do intrometido sobrenatural. A mente dele aparece completamente branca, enquanto a sua aura fica, pela falta de palavras melhores, fixa.",
      custo: "Livre.",
      sistema: "Aumenta a Dificuldade do uso de Prever A Alma (Auspícios 3), Telepatia (Auspícios 5) e poderes similares no usuário pela metade do seu índice de Fortitude (arredondado para cima). Se as regras permitirem o usuário resistir à estes poderes, ele adiciona ao invés o seu índice de Fortitude à sua parada de dados.",
      duracao: "Uma cena."
  },
  {
      id: "43",
      disciplina: "Fortitude",
      nivel: "4",
      poder: "Gole de Resistência",
      descricao: "O Sangue do vampiro fica saturado com o poder da Fortitude, transmitindo uma parte desse poder à qualquer um que beba dele. Esta é a Fortitude equivalente de Gole de Elegância (pág. 254).",
      custo: "Uma Checagem de Incitar.",
      sistema: "Beber a quantidade de Sangue de uma Checagem de Incitar diretamente do usuário presenteia o bebedor com Fortitude temporária igual à metade dos pontos de Fortitude (arredondado para baixo) do doador. O bebedor ganha os mesmos poderes que o doador, até esse nível.",
      duracao: "Uma noite; para vampiros, até a próxima alimentação ou o vampiro chegar à Fome 5."
  },
  {
      id: "44",
      disciplina: "Fortitude",
      nivel: "5",
      poder: "Carne de Mármore",
      descricao: "O poder do Sangue faz com que a pele do vampiro enrijeça, assumindo um brilho como de um mármore que ainda é flexível, mas para quase qualquer golpe antes de momentaneamente quebrar e se reformar. Um vampiro usando este poder fica quase impossível de destruir completamente, barrando um golpe de sorte ou restrição física.",
      custo: "Duas Checagens de Incitar",
      sistema: "Com este poder ativo, o vampiro ignora a primeira fonte de dano físico a cada turno, incluindo o fogo, mas não a luz do sol. Se a confusão surge sobre cuja fonte seja a “primeira”, o Narrador decide baseado na narrativa ou o vampiro ignora a maioria do dano da fonte única desse turno. Uma vitória crítica em uma rolagem de ataque ignora este poder.",
      duracao: "Uma cena."
  },
  {
      id: "45",
      disciplina: "Fortitude",
      nivel: "5",
      poder: "Proeza da Dor",
      descricao: "Ferimentos e danos agora somente abastecem os poderes do vampiro, o qual fica mais forte e mais rápido a partir de cada golpe, dilaceração ou rasgo recebido. Somente a destruição completa consegue parar alguém que recorre à este poder de Fortitude.",
      custo: "Uma Checagem de Incitar.",
      sistema: "Ao ativar o poder, o vampiro não mais sofre quaisquer penalidades de dados a partir do dano de Vitalidade sofrido, tal como o Comprometimento físico. Adicionalmente, ele pode aumentar um Atributo Físico em um ponto (estatísticas derivadas não são afetadas) para cada nível de dano em sua trilha de Vitalidade, agravado ou superficial. Os Atributos do usuário não podem exceder um valor igual à sua Explosão de Sangue + 6 através desta habilidade.",
      duracao: "Uma cena."
  },
  {
      id: "46",
      disciplina: "Ofuscação",
      nivel: "1",
      poder: "Manto das Sombras",
      descricao: "Estando perfeitamente parado, o usuário se mescla com os arredores. Enquanto ele tiver algum tipo de cobertura, não faça algum som e não se mova, somente os meios mecânicos ou sobrenaturais conseguem detectá-lo.",
      custo: "Livre.",
      sistema: "Siga as regras gerais para a Ofuscação. O efeito dura até o usuário se mover ou ele for detectado por outros meios.",
      duracao: "Uma cena."
  },
  {
      id: "47",
      disciplina: "Ofuscação",
      nivel: "1",
      poder: "Silêncio da Morte",
      descricao: "Popular entre os Banu Haqim, este poder silencia completamente o usuário, anulando todo som feito por ele. Assim como os outros poderes de Ofuscação, este funciona somente nas pessoas dentro do alcance auditivo e não engana microfones ou outros detectores eletrônicos de som. Diferente da Ofuscação em geral, este poder funciona somente no sentido auditivo, mas troca de operar mais robustamente. Um vampiro precisa fazer muito barulho para quebrar este silêncio.",
      custo: "Livre.",
      sistema: "O usuário silencia os seus passos, roupas, colisões menores e outros sons de sua pessoa. Isto torna o vampiro indetectável, se um observador pudesse somente notá-lo pelo som, tal como quando em um andar diferente de uma casa.\r\nEste poder não elimina os sons do usuário faz do lado de for a do seu espaço pessoal (jogar ou deixar cair objetos, ou bater portas, por exemplos). Falhar nisso, somente com o Sentido do Invisível (Auspícios 1) que se pode detectar o usuário.",
      duracao: "Uma cena."
  },
  {
      id: "48",
      disciplina: "Ofuscação",
      nivel: "2",
      poder: "Passagem Invisível",
      descricao: "Com este poder, o vampiro consegue agora se deslocar em volta enquanto ficar oculto. O usuário fica funcionalmente invisível, de acordo com as limitações usuais de Ofuscação.",
      custo: "Uma checagem de incitar.",
      sistema: "Enquanto o usuário não emitir algum odor esmagador e nenhum som mais alto do que um suspiro, este poder funciona automaticamente. Somente se o observador tiver a sua atenção atraída para o usuário que ele pode fazer uma rolagem de detecção.\r\nO Sentido do Invisível (Auspícios 1) também pode detectar o vampiro oculto, de acordo com as regras gerais de Ofuscação.\r\nNote que o usuário não consegue usar este poder para desaparecer enquanto estiver sendo ativamente observado; ele falha automaticamente em tal caso.",
      duracao: "Uma cena ou até a detecção."
  },
  {
      id: "49",
      disciplina: "Ofuscação",
      nivel: "3",
      poder: "Fantasma na Máquina",
      descricao: "O usuário agora consegue transmitir os efeitos da Ofuscação através da mídia eletrônica, permitindo que o vampiro apareça invisível ou mascarado quando visto ao vivo na tela. Se um observador vê a imagem depois, como em uma fotografia ou gravação, o efeito diminui: a imagem parece levemente borrada, deixando difícil a identificação. Além disso, a vigilância automatizada tem uma tendência para falhar na presença do vampiro, diminuindo a sua chance de ser pego pelo sistemas automatizados.",
      custo: "Nenhum custo adicional.",
      sistema: "Nenhuma rolagem adicional é exigida quando se está sendo visto em uma alimentação ao vivo. Trate os observadores como presentes junto com o vampiro, no que se refere à Disciplina. O observador adiciona +3 à sua Dificuldade em testes para identificar o usuário no filme, vídeo, em fotografias ou similares tirados durante a Ofuscação ativa. O usuário também ganha três dados adicionais às paradas que ele usar quando estiver tentando contornar a vigilância e contramedidas eletrônicas automatizadas.",
      duracao: "Conforme o poder usado."
  },
  {
      id: "50",
      disciplina: "Ofuscação",
      nivel: "3",
      poder: "Máscara das Mil Faces",
      descricao: "Ao invés de desaparecer, o vampiro usando este poder consegue se fazer aparecer como um estranho indeterminado, alguém que se esperava estar presente na área. Diferente dos outros poderes de Ofuscação, este permite que o usuário interaja e se comunique com aqueles com quem ele possa cruzar. Ele levanta pouca suspeita enquanto a sua presença for plausível (significando que não enganará as pessoas que não esperam alguém ou seriam hostis com alguém que eles não conheciam). O poder também não fornece qualquer identificação pessoal ou outras formas de despistar uma checagem de identificação.",
      custo: "Uma Checagem de Incitar.",
      sistema: "Nenhum teste é exigido. Qualquer um que estiver vendo o vampiro, vê um rosto esquecível de mesmo gênero e aproximadamente a mesma estrutura e peso do usuário. As roupas assumem o mesmo tipo de suavidade, dependendo do ambiente. Em um escritório, o usuário pode aparecer como um vigia noturno, enquanto ele pode parecer estar usando macacão em uma fábrica de montagem. O Sentido do Invisível (Auspícios 1) pode perfurar o poder como de costume.",
      duracao: "Uma cena."
  },
  {
      id: "51",
      disciplina: "Ofuscação",
      nivel: "4",
      poder: "Ocultar (Amalgama: Auspícios 3.)",
      descricao: "Esta habilidade permite que o usuário oculte um objeto inanimado, tal como uma porta, um carro ou uma casa pequena. Assim como com os outros poderes de Ofuscação, este na realidade não torna um objeto invisível, mas cria um efeito hipnótico prolongado que faz com que a maioria das pessoas simplesmente o ignorem. Neste caso, o poder é especialmente efetivo, dado que o objeto seja improvável de chamar a atenção para si mesmo. A menos que algo faça um transeunte colidir com ele ou alguém apontá-lo, as pessoas se comportam como se o objeto não estivesse lá, deslocando-se em volta de objetos maiores se necessário for.",
      custo: "Uma Checagem de Incitar.",
      parada: "Inteligência + Ofuscação",
      sistema: "O vampiro toca o objeto e rola um teste de Inteligência + Ofuscação contra uma Dificuldade de 2 (Ocultar um anel em uma gaveta cheia de outras lembranças) a 6 (Ocultar uma casa no meio de um quarteirão aberto), dependendo do tamanho e local do alvo. O poder dura por uma noite. Cada ponto da margem na vitória oculta o objeto por uma noite adicional.\r\nEste poder oculta qualquer um e qualquer coisa dentro do objeto (por exemplo, as pessoas em um carro ou barraco), enquanto o espectador permanecer do lado de fora. Este poder não pode afetar qualquer coisa maior do que uma casa de dois andares ou qualquer objeto deslocando-se sob o seu próprio poder (tal como uma carro em movimento). Alguém com o poder Sentido do Invisível de Auspícios (ou equivalente) consegue notar o objeto ao vencer uma disputa de Raciocínio + Auspícios vs. a Inteligência + Ofuscação do usuário.",
      duracao: "Uma noite, com uma noite adicional por ponto da margem numa vitória."
  },
  {
      id: "52",
      disciplina: "Ofuscação",
      nivel: "4",
      poder: "Desaparecer (Pré-Requisito: Manto das Sombras.)",
      descricao: "O vampiro consegue ativar o Manto das Sombras e a Passagem Invisível até enquanto sob a observação direta. O vampiro parece desaparecer num piscar de olhos; mesmo que a memória sobre ele fique confusa e indistinta.",
      custo: "conforme o poder aumentado",
      parada: "Raciocínio + Ofuscação vs. Raciocínio + Percepção.",
      sistema: "Quando estiver desaparecendo na frente de um mortal, role uma disputa de Raciocínio + Ofuscação vs. Raciocínio + Percepção. Em uma vitória, o observador questiona se o vampiro estava sequer lá para começar; a memória sobre eles obscurece sobre o assunto. Com uma vitória crítica, o vampiro desaparece inteiramente da memória do observador. Este poder não afeta as memórias dos vampiros, mas qualquer vitória pelo usuário oculta deles como se ele tivesse iniciado seu poder sem ser observado. Este poder pode somente ser usado uma vez por cena.",
      duracao: "Conforme o poder aumentado."
  },
  {
      id: "53",
      disciplina: "Ofuscação",
      nivel: "5",
      poder: "Encobrir o Grupo",
      descricao: "O vampiro consegue abrigar seus companheiros sob o manto da Ofuscação",
      custo: "Uma Checagem de Incitar em adição ao custo do poder estendido.",
      sistema: "O vampiro consegue estender seu poder de Ofuscação à uma quantidade de sujeitos dispostos adicionais igual à seu Raciocínio, mais um para cada Checagem de Incitar feita. O poder de Ofuscação utilizado no grupo pode ser qualquer um conhecido pelo usuário, e todo membro do grupo conta como tendo usado em si mesmo, usando o índice de Ofuscação do vampiro como o seu próprio quando for necessário para uma rolagem. Os membros do grupo ainda conseguem perceber um ao outro enquanto estiverem sob os efeitos do poder. Se qualquer um ao lado do usuário for revelado, através de sua própria ação ou de um observador astuto, o resto do grupo permanece oculto. Se o usuário for revelado, então será todos os outros.",
      duracao: "Conforme o poder estendido"
  },
  {
      id: "54",
      disciplina: "Ofuscação",
      nivel: "5",
      poder: "Aparência do Impostor (Pré-Requisito: Máscara das Mil Faces)",
      descricao: "Com alguma preparação, o vampiro consegue se fazer parecer como um indivíduo específico de qualquer constituição e gênero. O usuário deve cuidadosamente estudar o sujeito, do contrário a farsa falha quando encontrar-se com qualquer um com mais do que uma familiaridade casual com a pessoa sendo imitada.",
      custo: "Uma Checagem de Incitar",
      parada: "Raciocínio + Ofuscação, Manipulação + Performance",
      sistema: "O usuário deve estudar o rosto a ser copiado por pelo menos cinco minutos, a partir de diferentes ângulos. O usuário demanda outros dez minutos de observação para imitar a voz e maneirismos do sujeito. O usuário pode somente copiar a aparência humana, e não uma forma animal. O Narrador então faz um teste escondido de Raciocínio + Ofuscação (Dificuldade 4). Uma falha significa que a semelhança é menos do que convincente, e qualquer um próximo da pessoa copiada nota algo errôneo automaticamente. Uma vitória cria uma ilusão convincente, mas o usuário deve fazer uma rolagem de Manipulação + Performance para personificar a fala e maneirismos. Uma vitória crítica cria uma ilusão perfeita com nenhuma rolagem adicional necessária. O Sentido do Invisível (Auspícios 1) consegue perfurar a máscara conforme as Regras Gerais.",
      duracao: "Uma cena."
  },
  {
      id: "55",
      disciplina: "Potência",
      nivel: "1",
      poder: "Corpo Letal",
      descricao: "Usando este poder, o usuário é capaz de causar dano horrendo à mortais, rasgando a pele e quebrando ossos com os dedos nus.",
      custo: "Livre.",
      sistema: "Os ataques desarmados do usuário podem agora causar dano Agravado de Vitalidade à mortais, se desejado. Ele também ignora um nível de armadura por nível de Potência do usuário.",
      duracao: "Passiva."
  },
  {
      id: "56",
      disciplina: "Potência",
      nivel: "1",
      poder: "Salto Elevado",
      descricao: "Possuindo uma força terrível em mais do que braços e punhos, o usuário consegue saltar mais alto e mais longe do que qualquer mortal.",
      custo: "Livre.",
      sistema: "O usuário consegue saltar verticalmente uma quantidade de metros igual à três vezes o seu nível de Potência, e horizontalmente cinco vezes o seu nível de Potência. O usuário não precisa de preparação alguma para fazer estes saltos.",
      duracao: "Passiva."
  },
  {
      id: "57",
      disciplina: "Potência",
      nivel: "2",
      poder: "Façanha",
      descricao: "Os vampiros com Potência ganham força bem maiores a partir de seu Sangue do que aqueles que não têm.",
      custo: "Uma Checagem de Incitar",
      sistema: "Quando ativada, adicione o índice de Potência do usuário à seu valor de dano desarmado, assim como às façanhas de Força, e adicione metade de seu índice de Potência (arredondado para cima) ao seu dano de Armas Brancas.",
      duracao: "Uma cena."
  },
  {
      id: "58",
      disciplina: "Potência",
      nivel: "3",
      poder: "Alimentação Brutal",
      descricao: "Conhecida como o “Beijo Selvagem”, este poder permite que o usuário empregue uma terrível força interna quando estiver drenando uma vítima. Em meros segundos, o atacante engole torrentes de sangue enquanto está destroçando a vítima. O resultado é uma eficiente, embora bagunçada, alimentação frequentemente empregada no calor da batalha, onde os restos esmagados da vítima possam ser escondidos.",
      custo: "Livre.",
      sistema: "O vampiro consegue drenar um humano completamente em segundos, geralmente dentro de um único turno. Todo ponto de Fome saciado causa um ponto de dano Agravado de Vitalidade à vítima, enquanto seus vasos sanguíneos se rompem e órgãos se ferem e se rompem internamente. Usar Sustento Brutal em um vampiro causa somente dano Superficial de Vitalidade à cabeça e órgãos inertes dele.\r\nEm combate, a Alimentação Brutal vem imediatamente após um ataque de Morder bem-sucedido. A vítima primeiro toma o dano da mordida, seguida por uma quantidade de ações de alimentação automaticamente bem-sucedidas de até o índice de Potência do usuário. Contra vampiros, a quantidade de ações de alimentação é reduzida pela metade (arredondo para baixo). A armadura não protege contra a Alimentação Brutal, pois os ferimentos são, ou pelo menos começam como, principalmente internos. Claro que, a Armadura pode por si só proteger da mordida, como de costume. Os Narradores podem decidir que tal assassinato mutilador justifique Manchas (pág. 239).",
      duracao: "Uma alimentação."
  },
  {
      id: "59",
      disciplina: "Potência",
      nivel: "3",
      poder: "Faísca de Fúria (Amalgama: Presença 3.)",
      descricao: "Combinando a Potência com a Presença, o vampiro consegue incitar a raiva e até o frenesi em observadores, tão facilmente quanto o fascínio ou o pavor. O usuário deve se preocupar em não irritar uma multidão raivosa para se virar contra ele ao invés do alvo ou um ao outro.",
      custo: "Uma Checagem de Incitar.",
      parada: "Manipulação + Potência",
      sistema: "Quando ativa, o usuário pode adicionar seu índice de Potência à qualquer tentativa de irritar ou incitar uma pessoa ou uma multidão à violência. Além disso, o usuário pode ativar este poder para rolar uma disputa de Manipulação + Potência vs. Autocontrole + Inteligência de outros vampiro. Se ele vencer, o vampiro se opondo deve fazer um teste de frenesi de fúria em Dificuldade 3.",
      duracao: "Uma cena."
  },
  {
      id: "60",
      disciplina: "Potência",
      nivel: "3",
      poder: "Pegada Assombrosa",
      descricao: "Focando a sua força sobrenatural para seus dedos dos pés e das mãos, o vampiro pega e cava as suas extremidades em quase qualquer superfície, habilitando-o a escalar e até se pendurar senão sem suporte em paredes e tetos. No entanto, uma observação atenta revela depois marcas e deformações reveladoras nestas superfícies, pois esta é uma aplicação da força bruta, e não uma adesão ao estilo super-herói.",
      custo: "Uma Checagem de Incitar",
      sistema: "Uma vampiro usando este poder automaticamente obtém êxito em qualquer teste de Habilidade para escalar uma superfície não metálica. O usuário também pode ser capaz de escalar um revestimento de cobre ou bronze, ou outra superfície de metal mais macia, à critério do Narrador. Superfícies de vidro finas (embora geralmente não as paredes-cortina de vidro dos prédios modernos de escritórios) podem se estilhaçar sob o estresse. Da mesma forma, um vampiro pode se pendurar em uma parede ou teto por até uma cena, embora somente os vampiros descalços consigam se pendurar pelos pés.\r\nA escalada ou a agarrada deixa rastros detectáveis óbvios para qualquer um com um teste de Inteligência + Investigação em uma Dificuldade 2. Detectar rastros da Pegada Assombrosa no vidro não requer sequer uma rolagem.",
      duracao: "Uma cena."
  },
  {
      id: "61",
      disciplina: "Potência",
      nivel: "4",
      poder: "Gole do Poder",
      descricao: "O Sangue do vampire fica saturado com o poder da Potência, transmitindo uma parte desse poder à qualquer um que beba dele. Esta é a Potência equivalente de Gole de Elegância (pág. 254).",
      custo: "Uma Checagem de Incitar.",
      parada: "Beber uma Checagem de Incitar digna do Sangue diretamente do usuário dá ao bebedor a Potência temporária igual à metade dos pontos de Potência (arredondado para baixo) do doador. O bebedor ganha os mesmos poderes que as do doador, até esse nível.",
      duracao: "Uma noite; para vampiros, até a próxima alimentação ou o vampiro chegar à Fome 5."
  },
  {
      id: "62",
      disciplina: "Potência",
      nivel: "5",
      poder: "Terremoto",
      descricao: "Sendo a força dele uma força elementar, o vampiro consegue bater com seu punho ou pé no chão, criando uma onda de choque que derruba seus oponentes. Uma das aplicações mais dramáticas da Potência, este poder precisa ser cuidadosamente empregado, para que o usuário literalmente não traga a casa abaixo sobre ele mesmo.",
      custo: "Duas Checagens de Incitar",
      sistema: "Nenhum teste adicional é necessário para criar a onda de choque. (O chão é difícil de errar). Qualquer um dentro de um raio de cinco metros do usuário deve fazer uma rolagem de Destreza + Esportes (Dificuldade 3), com os resultados abaixo. Qualquer um preparado para o Terremoto (tal como os companheiros do usuário) consegue mudar seus resultados em até uma etapa.\r\no Vitória Crítica: Nenhum efeito.\r\no Vitória: Equilíbrio derrubado.\r\no Falha: Cai deitado.\r\nEste poder causa significativo dano colateral. Se usado no solo, a terra racha. Se usado num lugar fechado, a mobília quebra e os espelhos se estilhaçam. Em qualquer coisa, menos o andar térreo, o piso pode se quebrar, fazendo à todos dentro do raio despencar para o andar abaixo. Este poder pode somente ser usado uma vez por cena.",
      duracao: "Um uso."
  },
  {
      id: "63",
      disciplina: "Potência",
      nivel: "5",
      poder: "Punho de Caim",
      descricao: "As mãos nuas do vampiro conseguem infligir ferimentos graves, letal tanto aos mortais quanto outros vampiros. Ele consegue desmembrar, perfurar, empalar, decapitar e até arrancar para fora um coração do peito.",
      custo: "Uma Checagem de Incitar.",
      sistema: "Por uma cena, o usuário consegue infligir dano Agravado de Vitalidade igualmente à mortais e sobrenaturais enquanto estiver Brigando, pois ele literalmente rasga a carne e arranca de seus oponentes membro por membro com as suas próprias mãos.",
      duracao: "Uma cena."
  },
  {
      id: "64",
      disciplina: "Presença",
      nivel: "1",
      poder: "Fascínio",
      descricao: "Qualquer um na presença do vampiro encontra a sua atenção inexplicavelmente atraída para ele. Aqueles que estiverem escutando o vampiro falar podem repentinamente concordar com os assuntos onde eles antes possuíam pontos de vista diferentes. Enquanto este poder não causa a paixão enlevada, ela ainda é forte o suficiente para dobrar as mentes da maioria dos mortais.",
      custo: "Livre.",
      parada: "Manipulação + Presença vs. Autocontrole + Inteligência.",
      sistema: "Adicione o índice de Presença à qualquer rolagem de Habilidade envolvendo a Persuasão ou a Performance, assim como à outras rolagens relacionadas com Carisma, à critério do Narrador. Qualquer um ciente de que está sendo afetado pode tentar resistir com uma disputa de Manipulação + Inteligência vs. Autocontrole + Presença do usuário. Em uma vitória, o alvo consegue resistir aos efeitos por uma cena; uma vitória crítica deixa o alvo imune pela noite inteira. Uma vez que o poder passa, as vítimas revertem para as suas opiniões anteriores.",
      duracao: "Uma cena ou até intencionalmente encerrada"
  },
  {
      id: "65",
      disciplina: "Presença",
      nivel: "1",
      poder: "Amedrontar",
      descricao: "Ao invés de atrair as pessoas, o vampiro usar a Presença para repelir. Com este poder, o usuário aparece ameaçador e exsuda uma aura de ameaça poderosa o suficiente para fazer a maioria dos mortais evitar a atenção deles, e até vampiros pensarem duas vezes sobre agir contra ele.",
      custo: "Livre.",
      sistema: "Uma cena ou até intencionalmente encerrar",
      duracao: "Uma cena ou até intencionalmente encerrar"
  },
  {
      id: "66",
      disciplina: "Presença",
      nivel: "2",
      poder: "Beijo Prolongado",
      descricao: "O Beijo de um vampiro induz o quase êxtase na vítima, mas este poder deixa os outros Beijos na poeira. As vítimas usadas como alimentação pelo usuário se tornam viciadas pelo Beijo, ficando obcecadas com ele e até buscando o vampiro para repetidas alimentações. Os mortais frequentemente ficam anêmicos, se autoflagelam ou até morrem a partir desta dependência, mas os vampiros acham-na um poder útil para cultivar um rebanho e potencializar seus associados favoritos. Viciar outros vampiros também é possível, com a advertência de que os vampiros obcecados demandam ser alimentados, rapidamente levando o usuário a ficar em Laço de Sangue.",
      custo: "Livre.",
      sistema: "vampiro pode escolher em usar este poder ou não durante cada alimentação. A vítima ganha um bônus igual à metade da Presença do usuário (arredondado para cima) às paradas Sociais. Este benefício dura por uma quantidade de noites igual à Presença do usuário e é renovado à duração total se usada novamente durante o período. Uma vez que o benefício desapareça, a cancelamento de ataques e todas as ações que não demandaram o trabalho para adquirir uma nova dose recebe uma penalidade igual ao bônus inicial, incluindo tentar resistir à o que o usuário pedir ao viciado. Uma vítima usada para alimentação com este poder pode fazer um teste de Força de Vontade (Dificuldade igual à Presença do usuário) toda semana para resistir aos efeitos. Vencer este teste por três semanas consecutivas quebra o efeito, pois causa uma única vitória crítica.",
      duracao: "Até ter resistido bem-sucedidamente"
  },
  {
      id: "67",
      disciplina: "Presença",
      nivel: "3",
      poder: "Olhar Aterrorizante",
      descricao: "Expondo brevemente a sua natureza vampírica, o usuário instila um único sujeito com o total terror. Os mortais ficam intimidados, correm ou congelam com o medo, enquanto outros vampiros se submetem como cães açoitados ou fogem em frenesi de Rötschreck.",
      custo: "Uma Checagem de Incitar.",
      parada: "Carisma + Presença vs. Autocontrole + Perseverança.",
      sistema: "Exibindo as suas garras, com seu rosto retorcido em uma careta predatória, o usuário rola uma disputa de Carisma + Presença contra o Autocontrole + Perseverança do alvo.\r\no Falha: Os mortais ficam incapazes de agir senão em suas próprias defesas, recuando por um turno. Os vampiros não são afetados.\r\no Vitória: Os mortais correm de medo. Os vampiros são incapazes de agir senão em suas próprias defesas por um turno, a menos que eles gastem Força de Vontade igual à margem da vitória do usuário (à um mínimo de um).\r\no Vitória Crítica: Os mortais congelam ou colapsam em uma posição fetal. Os vampiros devem fazer um teste de frenesi de terror (Dificuldade 3). Se ele vencerem, eles ainda são afetados como acima.",
      duracao: "Um turno."
  },
  {
      id: "68",
      disciplina: "Presença",
      nivel: "3",
      poder: "Transe",
      descricao: "O vampiro foca sua atração sobrenatural em uma única pessoa, instilando nela uma fascinação ou paixão enlevada similar à cair perdidamente de amor ou encontrar o ídolo de longa data de alguém. A pessoa afetada faz o seu melhor para permanecer nas boas graças do vampiro, mas para antes de causar dano físico à si mesmo ou à seus outros amados.",
      custo: "Uma Checagem de Incitar.",
      parada: "Carisma + Presença vs. Autocontrole + Raciocínio",
      sistema: "O vampiro precisa somente ganhar a atenção do sujeito e vencer uma disputa de Carisma + Presença vs. Autocontrole + Raciocínio. O efeito dura por aproximadamente uma hora mais uma por ponto da margem na vitória. O vampiro pode renovar este efeito indefinidamente pelo resto da noite.\r\nApós ser bem-sucedido, o usuário adiciona dados igual a seu índice de Presença à qualquer parada de dados contra o sujeito sob transe. Pedidos que resultem em ferimento óbvio ao sujeito ou seus amados, ou que se opõem aos Princípios do sujeito, falham e demandam uma rolagem imediata de disputa de poder como acima, ou o Transe falha imediatamente.",
      duracao: "Uma hora mais uma por ponto da margem."
  },
  {
      id: "69",
      disciplina: "Presença",
      nivel: "4",
      poder: "Voz Irresistível (Amalgama: Dominação 1)",
      descricao: "A Presença do usuário se torna um conduíte para a Dominação. O vampiro agora precisa somente que sua voz seja escutada de forma a empregar os poderes de Dominação.",
      custo: "Nenhum custo adicional.",
      sistema: "A voz sozinha do usuário é agora suficiente para Dominar um alvo. Isto não se aplica às vozes transmitidas através de mídia eletrônica, tal como telefones, televisão ou alto-falantes de campainha de porta de apartamento.",
      duracao: "Passiva."
  },
  {
      id: "70",
      disciplina: "Presença",
      nivel: "4",
      poder: "Convocar",
      descricao: "O vampiro consegue chamar para si mesmo qualquer pessoa, mortal ou vampiro, sobre quem ele anteriormente usou Fascínio, Transe ou Majestade, ou quem tenha provado de seu Sangue pelo menos uma vez. O alvo sabe quem está convocando-o e a atual localização do usuário. Este chamado dura por uma noite. Após esse período, o efeito diminui, mas o usuário pode repeti-lo noite após noite se necessário para alcançar o alvo ou se o algo estiver senão relutante. Qualquer um Convocado sente uma atração para o convocador e tenta chegar até ele, embora sem se colocar em perigo fisicamente ou financeiramente. Ele não venderá a casa dele para comprar uma passagem ou perder um encontro vital, mas ele pode escapar de um trabalho normal ou compromissos sociais.",
      custo: "Uma Checagem de Incitar.",
      parada: "Manipulação + Presença vs. Autocontrole + Inteligência.",
      sistema: "O usuário precisa se concentrar por cinco minutos e pensar na pessoa que está sendo convocada, então rola Manipulação + Presença vs. Autocontrole + Inteligência. Em uma vitória, o alvo escuta a convocação, mas pode ou não prestar atenção à ela. Em uma vitória crítica, o alvo chega tão rapidamente quanto possível, barrando o risco imediato ao seu bem-estar.",
      duracao: "Uma noite."
  },
  {
      id: "71",
      disciplina: "Presença",
      nivel: "5",
      poder: "Majestade",
      descricao: "Neste pináculo da Disciplina, o vampiro consegue amplificar o seu semblante à níveis sobrenaturais. Se ele aparecer tão comoventemente belo, monstruosamente aterrorizador ou exercendo o comando absoluto, todos que o veem são atingidos por sua imagem, incapazes de agir ou até falar contra o vampiro. Para vivenciar a Majestade é estar na presença do divino – ou do infernal.",
      custo: "Duas Checagens de Incitar.",
      parada: "Carisma + Presença vs. Autocontrole + Perseverança",
      sistema: "As pessoas na presença do usuário conseguem somente fitar, ficar boquiaberto ou desviar seus olhos de medo ou submissão. Qualquer um querendo agir de qualquer forma em oposição ao usuário, exceto pela autopreservação, deve vencer bem-sucedidamente uma disputa de seu Autocontrole + Perseverança vs. Carisma + Presença do vampiro. Uma vitória permite um turno de liberdade, mais um por ponto da margem; somente uma vitória crítica resiste ao efeito pela cena inteira.",
      duracao: "Uma cena."
  },
  {
      id: "72",
      disciplina: "Presença",
      nivel: "5",
      poder: "Magnetismo de Estrela",
      descricao: "Os poderes de Presença do usuário agora afetam as pessoas que estão vendo-o em transmissões ao vivo ou escutando ele pelo telefone. No entanto, imagens ou mensagens registradas não retêm o efeito.",
      custo: "Uma Checagem de Incitar adicional",
      sistema: "Fascínio, Amedrontar e Transe podem ser transmitidos através de transmissões ao vivo ou telefones. Se o Transe for usado, o nome de vítima deve ser falado claramente, pois esse poder afeta somente uma pessoa de cada vez. Qualquer outra pessoa vendo a mesma transmissão encontra somente o usuário encantando, mas não sobrenaturalmente.",
      duracao: "Conforme o poder usado"
  },
  {
      id: "73",
      disciplina: "Metamorfose",
      nivel: "1",
      poder: "Olhos da Besta",
      descricao: "O vampire consegue desejar um brilho vermelho sobrenatural em seus olhos, dando à eles uma visão até na total ausência de luz.",
      custo: "Livre.",
      sistema: "Nenhuma rolagem é exigida para ativar os Olhos da Besta. Enquanto ativa, o usuário ignora quaisquer penalidades impostas pela escuridão, incluindo a sobrenatural. Enquanto ativa, a aparência inumana dos olhos confere dois dados de bônus às paradas de Intimidação contra mortais.",
      duracao: "Enquanto for desejado"
  },
  {
      id: "74",
      disciplina: "Metamorfose",
      nivel: "1",
      poder: "O Peso da Pena",
      descricao: "O vampire consegue reduzir a sua massa e densidade efetiva, tornando-se quase sem peso. Isto permite que ele evite os sensores disparadores de pressão, assim como evitar a maior parte do dano de quedas, colisões ou ser arremessado. O poder não pode ser usado para saltos mais longos, pois a força do vampiro é proporcionalmente reduzida.",
      custo: "Livre.",
      parada: "Raciocínio + Sobrevivência.",
      sistema: "Se o vampiro tiver tempo para preparar, nenhuma rolagem é necessária. Como uma reação, tal como durante uma queda repentina, ativar o poder requer uma rolagem de Raciocínio + Sobrevivência em uma Dificuldade 3. Enquanto o poder estiver em efeito, o vampiro fica imune ao dano de quedas, colisões e ser arremessado. O usuário também evita disparar dispositivos que dependem da pressão, a critério do Narrador.",
      duracao: "Enquanto for desejado."
  },
  {
      id: "75",
      disciplina: "Metamorfose",
      nivel: "2",
      poder: "Armas da Besta",
      descricao: "O vampiro consegue estender a suas armas naturais à proporções monstruosas. Isso geralmente assume a forma das unhas se estendendo em garras terríveis, mas também podem vir em outras formas, tal como presas alongando-se em verdadeiras adagas, como de uma serpente gigante.",
      custo: "Uma Checagem de Incitar",
      sistema: "Nenhuma rolagem de habilidade é necessária para ativar este poder. Quando ativada, a arma natural de escolha do vampiro torna-se uma arma perfurante de Briga com um\r\nmodificador +2 para o dano. Os ataques de mordida vampírica ainda causam somente dois de dano, apesar da quantidade de sucessos, mas não sofrem a chamada penalidade de tiro. O dano Superficial infligido pelas armas naturais do usuário não é reduzido pela metade enquanto as Armas Ferais estão ativas.",
      duracao: "Uma cena."
  },
  {
      id: "76",
      disciplina: "Metamorfose",
      nivel: "3",
      poder: "Fusão com a Terra",
      descricao: "Tornando-se um com o solo, o vampiro afunda na terra. A menos que em torpor, o vampiro ergue-se novamente na noite seguinte.",
      custo: "Uma Checagem de Incitar",
      sistema: "Nenhum teste é exigido, mas o vampiro deve estar sobre uma superfície natural: rochas, terra crua, relva, etc. Este poder não funciona no concreto, asfalto e outras superfícies artificiais. Leva um turno para o vampiro afundar na terra, deixando objetos carregados para trás no topo do solo. Enquanto estiver na terra, o vampiro fica ciente de seus arredores, exceto durante o sono diurno. Nesses momentos, os distúrbios (por exemplo, escavação ou ruídos altos) despertam ele ou não, como com todos os vampiros (pág. 219).",
      duracao: "Um dia ou mais, ou até ser perturbado"
  },
  {
      id: "77",
      disciplina: "Metamorfose",
      nivel: "3",
      poder: "Mudança de Forma",
      descricao: "O vampiro consegue assumir a forma de um animal aproximadamente do mesmo tamanho que a sua massa original. O vampiro pode somente mudar para um tipo de animal (geralmente um lobo, às vezes um felino grande ou uma cobra gigante), geralmente um associado com o seu clã ou o tipo de presa que ele mais comumente se alimenta. O animal, enquanto geralmente um exemplo espetacular de sua espécie, não mostra algum sinal à um observador mundano de ser sobrenatural.",
      custo: "Uma Checagem de Incitar.",
      sistema: "Nenhum teste é exigido. A transformação leva um turno, durante a qual o usuário não pode tomar quaisquer outras ações. Sob a transformação, o vampiro ganha os Atributos Físicos, sentidos e comunicação, manipulação (a maioria dos animais consegue carregar uma coisa em sua boca), e assim por diante. O vampiro consegue usar outras Disciplinas, a critério do Narrador. (No geral, ele pode usar Auspícios, Animalismo, Celeridade, Fortitude, Potência e Metamorfose; muitos poderes de Dominação, Ofuscação e Presença posam como problemas; a Feitiçaria do Sangue é completamente fora de questão).",
      duracao: "Uma cena, a menos que encerrada voluntariamente antes disso."
  },
  {
      id: "78",
      disciplina: "Metamorfose",
      nivel: "4",
      poder: "Transformação (Pré-Requisito: Mudança de Forma.)",
      descricao: "Este poder garante uma forma animal adicional ao usuário, desta vez também habilitando-o a mudar seu tamanho. Os vampiros muito comumente se transformam em morcegos, ratos, geralmente insetos grandes, ou cobras (veja pág. 373).",
      custo: "Uma Checagem de Incitar.",
      sistema: "O mesmo que a Mudança de Forma.",
      duracao: "Uma cena, a menos que encerrado voluntariamente antes disso."
  },
  {
      id: "79",
      disciplina: "Metamorfose",
      nivel: "5",
      poder: "Forma de Névoa",
      descricao: "O vampiro ganha o poder lendário de se transformar em uma nuvem de névoa, perceptível aos olhos, mas intocável por qualquer coisa, salvo o fogo, a luz do sol e a agressão sobrenatural. Ele consegue passar por canos, frestas e rachaduras. Enquanto fortes ventos podem atacá-lo, nenhuma força natural consegue dispersar a nuvem.",
      custo: "De uma a três Checagens de Incitar.",
      sistema: "Nenhuma rolagem é exigida. A transformação leva três turnos, embora ela possa ser acelerada com Checagens de Incitar adicionais em uma base de um para um. Enquanto estiver na forma de névoa, o vampiro se desloca no ritmo da caminhada e percebe os seus arredores através de meios místicos, como se houvesse os normais. Um vampiro na forma de névoa não consegue fazer contato visual ou falar. Ele consegue usar somente essas Disciplinas não requerendo nenhuma forma ou presença física, a critério do Narrador. Enquanto estiver na forma de névoa, o vampiro pode somente sofrer danos pela luz do sol, fogo e ataques imateriais sobrenaturais (tal como alguns Rituais).",
      duracao: "Uma cena, a menos que encerrada voluntariamente antes disso."
  },
  {
      id: "80",
      disciplina: "Metamorfose",
      nivel: "5",
      poder: "O Coração Livre",
      descricao: "Tendo dominado o poder da Metamorfose, o interior do usuário fica maleável, quase viscoso. O coração, sede do vitae e da não-vida do vampiro, se solta e se desloca livremente, se lentamente, dentro do peito. Isto torna o vampiro excessivamente difícil de estaquear, pois a posição de seu coração muda toda noite, e pode até permitir que o usuário se liberte da paralisia.",
      custo: "Livre.",
      sistema: "Aumenta em três a Dificuldade em qualquer teste de não combate para estaquear o vampiro. Em combate de Armas Brancas, somente se o portador da estaca obtiver uma vitória crítica faz a estaca penetrar no coração do usuário. Mesmo se estaqueado, o usuário consegue fazer uma Checagem de Incitar e rolar a sua Força + Perseverança (Dificuldade 5) uma vez por hora. Ele não pode tentar tal expulsão da estaca em Fome 5.",
      duracao: "Passiva."
  },
  {
      id: "81",
      disciplina: "Feitiçaria de Sangue",
      nivel: "1",
      poder: "Vitae Corrosivo",
      descricao: "Alterando algumas propriedades do seu próprio sangue, o usuário pode torná-lo altamente corrosivo à substâncias mortas, capaz de corroer a maioria dos itens até lodo fumegante, dado o tempo suficiente e Sangue modificado.",
      custo: "Uma ou mais Checagens de Incitar",
      sistema: "Nenhuma rolagem de habilidade adicional é exigida. O usuário se concentra por um turno e força o Sangue através de um ferimento aberto, geralmente auto infligido. O usuário então derrama o seu Sangue em um objeto não-vivo (exceto carne não-viva, tal como a dos Membros) para corroê-lo e decompô-lo. Cada Checagem de Incitar corrói aproximadamente 35 cm de matéria em todas as direções do respingo; isso leva aproximadamente cinco minutos (mais longo em metais moles como o cobre e ferro fundido). Metais mais duros, tal como ligas e aço meramente marcam e esburacam; se eles se enfraquecem significativamente fica a critério do Narrador. (Este poder pode correr através de cadeias de algemas, se dado tempo suficiente e vitae)."
  },
  {
      id: "82",
      disciplina: "Feitiçaria de Sangue",
      nivel: "1",
      poder: "Um Gosto por Sangue",
      descricao: "Ao provar uma gota de sangue, o usuário consegue discernir certas características básicas daquele a qual ela pertence.",
      custo: "Livre.",
      parada: "Perseverança + Feitiçaria do Sangue",
      sistema: "O usuário pincela o sangue em sua língua e faz uma rolagem de Perseverança + Feitiçaria do Sangue (Dificuldade 3). Com uma vitória, o usuário consegue determinar a ressonância e intensidade do sangue se for humano. Ele também consegue identificar se o sangue pertence à um mortal, carniçal, vampiro ou outra criatura sobrenatural (pode não ser necessariamente capaz de identificar a criatura sobrenatural se não for Membro ou carniçal). Provar o vitae também determina a Potência do Sangue relativa (e assim o provável laço de geração) do vampiro. Uma vitória crítica também revela se o sujeito já cometeu diablerie, e a geração (no mesmo) do vampiro. Se o usuário conhece a criatura sobrenatural em questão, ele consegue identificar a criatura sobrenatural específica em uma vitória crítica após provar o sangue."
  },
  {
      id: "83",
      disciplina: "Feitiçaria de Sangue",
      nivel: "2",
      poder: "Extinguir Vitae",
      descricao: "O usuário pode intencionalmente remover as propriedades não vificadoras de um pouco do Sangue em outro vampiro, alimentando a Fome dele enquanto as reservas internas da vítima coalham até a impotência.",
      custo: "Uma Checagem de Incitar.",
      parada: "Inteligência + Feitiçaria do Sangue vs. Vigor + Autocontrole.",
      sistema: "usuário rola uma disputa de Inteligência + Feitiçaria do Sangue vs. Vigor + Autocontrole de um vampiro alvo na linha de visão enquanto estiver se concentrando por um turno e gesticular sutilmente. Uma vitória aumenta a Fome do alvo em um, enquanto uma vitória crítica aumenta-a em dois. A vítima consegue discernir quem a aflige, se ela conseguir ver o usuário enquanto estiver fazendo uma rolagem de Inteligência + Ocultismo vs. Raciocínio + Lábia."
  },
  {
      id: "84",
      disciplina: "Feitiçaria de Sangue",
      nivel: "3",
      poder: "Sangue da Potência",
      descricao: "O vampiro pode concentrar o seu Sangue, aumentando a sua potência temporariamente.",
      custo: "Uma Checagem de Incitar.",
      parada: "Perseverança + Feitiçaria do Sangue.",
      sistema: "O usuário faz uma rolagem de Perseverança + Feitiçaria do Sangue contra uma Dificuldade de 2 + sua Potência do Sangue. Uma vitória aumenta a sua Potência do Sangue em um para essa cena; uma vitória crítica aumenta-a em dois. O vampiro pode usar este poder para exceder o seu limite da geração na Potência do Sangue durante a sua duração.",
      duracao: "Uma cena ou uma noite."
  },
  {
      id: "85",
      disciplina: "Feitiçaria de Sangue",
      nivel: "3",
      poder: "Toque do Escorpião",
      descricao: "O vampiro consegue transmutar um pouco do seu Sangue para um veneno paralisante, capaz de afetar igualmente mortais e vampiros. Ele pode usar este icor para cobrir as armas afiadas, ou até cuspi-lo em um alvo. O Sangue escorpiãozado incapacita os mortais afetados, enquanto dificultam os vampiros se não estiver necessariamente lhes deixando indefesos. A respiração específica e exercícios de biorretroalimentação praticadas por alguma sociedade secreta formam a melhor defesa contra este Sangue, à parte da Fortitude.",
      custo: "Uma ou mais Checagens de Incitar.",
      parada: "Força + Feitiçaria do Sangue vs. Vigor + Ocultismo ou Fortitude.",
      sistema: "O usuário se concentra por um turno e força o Sangue através de um ferimento aberto, geralmente auto infligido. O valor de cada Checagem de Incitar de veneno feito leva um turno e emite Sangue suficiente para cobrir pegajosamente uma arma branca afiada ou encher um gole a ser cuspido em um adversário. Cuspir veneno em alguém envolve uma rolagem de ataque de Destreza + Esportes (o que pode ser esquivado como qualquer ataque à distância), embora os vampiros sejam conhecidos por dar o beijo francês em uma vítima e transferir o veneno dessa forma. Os vampiros ainda mais sutis escorpiam o seu Sangue para envenenar os supostos diableristas: beber o Sangue envenenado a partir da veia garante um sucesso! No entanto, aparte de tal transmissão veia-para-presa, o Sangue escorpiãozado é um veneno de contato que sublima em líquidos e é muito viscoso para injetar com uma seringa. O usuário não consegue envenenar bebidas com ele ou (graças à pressão diferencial) injetá-lo por sua própria mordida. Pontas de flechas e balas carregam muito pouco Sangue para se usarem neste poder com armas à distância; o efeito não dura o suficiente para o usuário encher os buracos das balas com o Sangue escorpiãozado.\r\nSe o veneno atingir, o usuário rola uma disputa de Força + Feitiçaria do Sangue vs. Vigor + Ocultismo. (Vampiros com Fortitude podem resistir com Vigor + Fortitude). Se o usuário vencer, o veneno causa a margem em dano Agravado de Vitalidade à mortais e não reduz pela metade o dano Superficial de Vitalidade à vampiros. Um mortal que tomar sequer um ponto de dano desmorona inconsciente.",
      duracao: "O veneno permanece potente por uma cena."
  },
  {
      id: "86",
      disciplina: "Feitiçaria de Sangue",
      nivel: "4",
      poder: "Roubo de Vitae",
      descricao: "Através de meios místicos, o vampiro abre uma ferida em uma artéria principal de uma vítima mortal, com o sangue saindo pelo ar em uma onda torrente para a boca aberta do usuário. Isso tem o efeito adicional de manter o mortal quieto, como se no espasmo do Beijo, e a ferida se fecha uma vez que o efeito acaba, tendo a vítima morrido ou não. Este poder é extremamente espetacular e de potencial quebra de Máscara enquanto estiver em progresso, mas uma vez encerrado, não deixa vestígios.",
      custo: "Uma Checagem de Incitar.",
      parada: "Raciocínio + Feitiçaria do Sangue vs. Raciocínio + Ocultismo.",
      sistema: "O usuário faz um gesto chamativo para um alvo mortal na linha de visão e rola o seu Raciocínio + Feitiçaria do Sangue vs. Raciocínio + Ocultismo. Uma vitória abre uma ferimento arterial, e o vampiro pode começar a se alimentar através do espaço. (Um alvo vestindo uma proteção de compor inteiro, tal como um traje NBQ meramente sangra estaticamente no terno). O usuário nada mais consegue fazer enquanto estiver se alimentando, mas ele pode se alimentar no dobro da velocidade normal (no triplo da velocidade em uma vitória crítica) graças à pressão da feitiçaria deste poder.",
      duracao: "Uma alimentação."
  },
  {
      id: "87",
      disciplina: "Feitiçaria de Sangue",
      nivel: "5",
      poder: "Carícia do Baal",
      descricao: "O vampiro consegue transmutar o seu Sangue em um veneno extremamente agressivo, letal igualmente aos mortais e aos Membros.",
      custo: "Uma ou mais Checagens de Incitar.",
      parada: "Força + Feitiçaria do Sangue vs. Vigor + Ocultismo ou Fortitude.",
      sistema: "Este poder usa o mesmo sistema (e seu veneno tem as mesmas restrições) que o Toque do Escorpião\r\nSe o veneno atingir, o usuário rola uma disputa de Força + Feitiçaria do Sangue vs. Vigor + Ocultismo. (Vampiros com Fortitude podem resistir com Fortitude ao invés da Habilidade Ocultismo). Se o usuário vencer, o veneno causa a margem em dano Agravado de Vitalidade igualmente à mortais e vampiros. Um mortal que toma sequer um ponto de dano, morre instantaneamente.\r\nSe um alvo vampiro tomar dano Agravado a partir deste veneno, o usuário rola a disputa novamente; em uma vitória, o vampiro entra em torpor quando depois eles forem dormir.",
      duracao: "O veneno permanece potente por uma cena."
  },
  {
      id: "88",
      disciplina: "Feitiçaria de Sangue",
      nivel: "5",
      poder: "Caldeirão de Sangue",
      descricao: "Este poder medonho deixa o usuário ferver o sangue de uma vítima em suas próprias veias, causando dano massivo e excruciando dor. Enquanto há formas mais eficientes de matar, pouco métodos abordam este nível de crueldade.",
      custo: "Uma Checagem de Incitar e ganha uma (ou mais) Manchas",
      parada: "Perseverança + Feitiçaria do Sangue vs. Autocontrole + Ocultismo ou Fortitude.",
      sistema: "O usuário paga o custo e toca a vítima (Destreza + Esportes no combate ou situações similares), rolando uma disputa de Perseverança + Feitiçaria do Sangue vs. Autocontrole + Ocultismo. (Vampiros com Fortitude podem resistir com Autocontrole + Fortitude). Em uma vitória, cada ponto da margem causa um ponto de dano Agravado na vítima. Mortais levando pelo menos um ponto de dano morrem gritando. Os vampiros vítimas adicionam 1 de Fome por ponto de dano infligido, até a Fome chegar em 5.",
      duracao: "Um turno."
    }
  ];

const [meusPoderes, setMeusPoderes] = useState(JSON.parse(localStorage.getItem("poderes")) || [])

function adicionarPoder(novoPoder){
    console.log(meusPoderes)
  let arr = [];
  let contador = 0;
  if(meusPoderes !== null){
    arr = meusPoderes;
     meusPoderes.map((poder, key) => {if(novoPoder.id === poder.id){contador ++; }})
     if(contador === 0){
      arr.push(novoPoder)
      alert("Poder "+ novoPoder.poder + " adicionado com sucesso")
     contador = 0;
    }else{
      alert("Poder " + novoPoder.poder + " já adicionado anteriormente")
    }
  }else{
    arr.push(novoPoder)
    alert("Poder " + novoPoder.poder+ " adicionado com sucesso")
  }

  console.log(arr)
  localStorage.setItem("poderes", JSON.stringify(arr));
  setMeusPoderes(arr);
}

function removerPoder(poder){

  let res = window.confirm("Deseja Excluir "+poder.poder +" da sua lista de poderes?");

  if(res===true){
    let arr = meusPoderes.filter(p => p.id !== poder.id)
    localStorage.setItem("poderes", JSON.stringify(arr));
    setMeusPoderes(arr);
    alert("Poder removido com sucesso");
  }

}

useEffect(()=>{
  let arr = JSON.parse(localStorage.getItem("poderes"));
  setMeusPoderes(arr)
},[]);

return (
    <div className="App">
     <Router basename={process.env.PUBLIC_URL}>
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
