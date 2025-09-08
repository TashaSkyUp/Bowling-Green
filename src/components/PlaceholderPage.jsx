export default function PlaceholderPage({ title, message }) {
  return (
    <div>
      <h1>{title}</h1>
      <p className="placeholder-text">{message}</p>
    </div>
  );
}
