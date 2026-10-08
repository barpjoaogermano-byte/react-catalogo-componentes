function CardCurso({ nome, duracao, modalidade, nivel, vagas }) {
  const temVagas = vagas > 0;
  const classeCard = temVagas ? "card-curso" : "card-curso card-curso--lotado";

  return (
    <article className={classeCard}>
      <span className="card-nivel">{nivel}</span>

      <h3>{nome}</h3>

      <dl className="card-info">
        <div>
          <dt>Duração</dt>
          <dd>{duracao}</dd>
        </div>
        <div>
          <dt>Modalidade</dt>
          <dd>{modalidade}</dd>
        </div>
      </dl>

      {vagas !== undefined && (
        <p className={temVagas ? "vagas vagas--abertas" : "vagas vagas--esgotadas"}>
          {temVagas ? `Vagas disponíveis: ${vagas}` : "Turma completa"}
        </p>
      )}
    </article>
  );
}

export default CardCurso;