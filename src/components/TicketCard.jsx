const TicketCard = ({ ticket }) => {
  const { id, title } = ticket;
  return (
    <article className="ticket-card">
      <header className="">
        <strong>{id}</strong>
        <div>AS</div>
      </header>

      <h2>{title}</h2>
      <h3>{ticket.userId}</h3>
      <footer>
        <span>Feature Request</span>
      </footer>
    </article>
  );
};

export default TicketCard;
