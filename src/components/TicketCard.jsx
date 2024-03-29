const TicketCard = ({ ticket }) => {
  const { id, title, userId, tag, priority } = ticket;
  return (
    <article className="ticket-card">
      <header className="">
        <strong>{id}</strong>
        <div>AS</div>
      </header>

      <h2>{title}</h2>
      <h3>{userId}</h3>
      <span>{priority}</span>
      <footer>
        <span>{tag[0]}</span>
      </footer>
    </article>
  );
};

export default TicketCard;
