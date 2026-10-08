import Cabecalho from "./components/Cabecalho";
import CardCurso from "./components/CardCurso";
import Destaque from "./components/Destaque";
import Rodape from "./components/Rodape";
import "./App.css";

const cursos = [
  {
    nome: "Desenvolvimento de Sistemas",
    duracao: "1200 horas",
    modalidade: "Presencial",
    nivel: "Técnico",
    vagas: 12,
  },
  {
    nome: "Redes de Computadores",
    duracao: "1000 horas",
    modalidade: "Presencial",
    nivel: "Técnico",
    vagas: 0,
  },
  {
    nome: "Manutenção de Computadores",
    duracao: "200 horas",
    modalidade: "Presencial",
    nivel: "Qualificação",
    vagas: 5,
  },
  {
    nome: "Programação Web",
    duracao: "160 horas",
    modalidade: "Online",
    nivel: "Básico",
    vagas: 20,
  },
  {
    nome: "Banco de Dados",
    duracao: "120 horas",
    modalidade: "Híbrido",
    nivel: "Intermediário",
    vagas: 0,
  },
  // Teste de reutilização: basta adicionar um novo objeto aqui.
  {
    nome: "Desenvolvimento Mobile",
    duracao: "180 horas",
    modalidade: "Online",
    nivel: "Intermediário",
    vagas: 8,
  },
];

const destaques = [
  {
    titulo: "Aprenda fazendo",
    texto: "Desenvolva projetos durante sua formação.",
  },
  {
    titulo: "Professores experientes",
    texto: "Aulas com profissionais que atuam no mercado.",
  },
  {
    titulo: "Certificado reconhecido",
    texto: "Comprove suas habilidades ao concluir o curso.",
  },
];

function App() {
  return (
    <>
      <Cabecalho />

      <main className="container">
        <section className="secao">
          <h2>Cursos</h2>
          <div className="lista-cursos">
            {cursos.map((curso) => (
              <CardCurso
                key={curso.nome}
                nome={curso.nome}
                duracao={curso.duracao}
                modalidade={curso.modalidade}
                nivel={curso.nivel}
                vagas={curso.vagas}
              />
            ))}
          </div>
        </section>

        <section className="secao">
          <h2>Destaques</h2>
          <div className="lista-destaques">
            {destaques.map((item) => (
              <Destaque key={item.titulo} titulo={item.titulo} texto={item.texto} />
            ))}
          </div>
        </section>
      </main>

      <Rodape />
    </>
  );
}

export default App;