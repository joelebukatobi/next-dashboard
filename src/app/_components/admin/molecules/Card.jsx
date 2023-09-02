export const Card = ({ heading, caption, icon, number, href }) => {
  return (
    <div aria-label="card">
      <a href={href}>
        <div>
          {icon}
          <h5>{heading}</h5>
          <p>{caption}</p>
        </div>
        <span>{number}</span>
      </a>
    </div>
  );
};
