export default function Footer() {
  var year = new Date().getFullYear();
  return (
    <footer>
      <p>Keeper&copy; {year}</p>
    </footer>
  );
}
