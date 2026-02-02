import "./welcome.css";

export function Welcome() {
  return (
    <main>
      <section className="welcome">
        <h1>Arcane System</h1>
        <p className="subtitle">Point d’entrée vers les systèmes internes.</p>

        <nav>
          <ul>
            <li>
              <a href="/jinx" className="welcome-link">
              Powder et Jinx
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
