import "./welcome.css";

export function Welcome() {
  return (
    <main>
      <section className="welcome">
        <h1>Arcane System</h1>

        <section>
          <h2>Cadre d’analyse : un individu comme système</h2>

          <p>
            Ici, un personnage n’est pas défini par une psychologie, mais par un
            mode de fonctionnement structuré autour de quatre éléments :
          </p>

          <ul>
            <li>
              <strong>Structure interne :</strong> fondations et modes
              possibles.
            </li>
            <li>
              <strong>Patterns :</strong> routines et réponses récurrentes.
            </li>
            <li>
              <strong>Vécu :</strong> ruptures qui transforment la structure.
            </li>
            <li>
              <strong>Contexte :</strong> forces externes qui activent ou
              inhibent les modes.
            </li>
          </ul>

          <p>
            L’analyse consiste à observer comment ces éléments interagissent,
            plutôt qu’à interpréter des émotions ou des intentions.
          </p>

          <p>
            “Système” ne retire rien à l’humanité : il décrit simplement comment
            un individu organise ses réponses.
          </p>
        </section>
        <section>
          <h1>Analyse structurelle des personnages</h1>
        </section>
        <nav>
          <ul>
            <li>
              <a href="/jinx" className="welcome-link">
                Powder et Jinx
              </a>
            </li>
            <li>
              <a href="/vi" className="welcome-link">
                VI
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
