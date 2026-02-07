import "./vi.css";
import { useEffect } from "react";

export default function ViSystemPage() {
  useEffect(() => {
    document.querySelectorAll("section > h2").forEach((title) => {
      const section = title.parentElement;

      title.addEventListener("click", () => {
        section.classList.toggle("open");
      });
    });
  }, []);
  return (
    <section className="vi-page">
      <header>
        <h1>Vi — Système stabilisateur issu de Zaun</h1>
        <p>
          Un mode interne structuré par la cohésion, la régulation et la
          médiation
        </p>
      </header>

      <nav className="char-navbar">
        <div className="nav-logo">Navigation</div>

        <button className="nav-toggle" aria-label="toggle navigation">
          ☰
        </button>

        <ul className="nav-links">
          <li>
            <a href="/">Accueil</a>
          </li>

          {/* Personnages directement liés à Vi */}
          <li>
            <a href="/jinx">Powder / Jinx</a>
          </li>
          <li>
            <a href="/vander">Vander</a>
          </li>
          <li>
            <a href="/caitlyn">Caitlyn</a>
          </li>
             <li>
            <a href="/ekko">Ekko</a>
          </li>
          <li>
            <a href="/silco">Silco</a>
          </li>
          <li>
            <a href="/jayce">Jayce</a>
          </li>
        </ul>
      </nav>

      <section>
        <h2>1. Vi comme produit d’un système</h2>
        <p>
          Vi n’est pas une figure isolée. Elle fonctionne comme un mode de
          stabilisation interne propre à Zaun vulnérable : un état structuré par
          la présence de médiateurs locaux et par la nécessité de maintenir une
          cohésion minimale dans un environnement instable.
        </p>
      </section>

      <section>
        <h2>2. Vi dans Zaun vulnérable</h2>
        <p>
          Avant la rupture, Vi opère comme vecteur de cohésion locale. Elle
          régule la violence, protège le groupe et sert d’interface entre Vander
          et les enfants. Sa fonction dépend directement de la structure fragile
          de Zaun et de la présence d’un stabilisateur primaire.
        </p>
      </section>

      <section>
        <h2>3. Vi après la disparition de Vander</h2>
        <p>
          La disparition du stabilisateur primaire désactive le cadre dans
          lequel Vi pouvait fonctionner. Elle devient un stabilisateur sans
          territoire, un acteur dont le mode de fonctionnement n’est plus
          compatible avec la nouvelle configuration radicalisée de Zaun.
        </p>
      </section>

      <section>
        <h2>4. Vi et Jinx : collision de deux états du même système</h2>
        <p>
          Vi représente la continuité du Zaun vulnérable, tandis que Jinx
          incarne le Zaun radicalisé. Leur opposition n’est pas morale mais
          structurelle : deux modes incompatibles issus d’un même environnement
          après une rupture majeure.
        </p>
      </section>

      <section>
        <h2>5. Vi intégrée à Piltover</h2>
        <p>
          En rejoignant Piltover, Vi devient un stabilisateur réaffecté à un
          système externe. Elle perd sa fonction originelle et se retrouve dans
          une position hybride, utilisée comme médiatrice entre deux structures
          incompatibles.
        </p>
      </section>

      <section>
        <h2>6. Saison 2 : modification de la fonction de Vi</h2>
        <p>
          La saison 2 réoriente Vi vers une fonction plus émotionnelle et moins
          politique. Elle devient un vecteur narratif centré sur la relation,
          détaché de son rôle structurel initial dans Zaun vulnérable.
        </p>
      </section>
    </section>
  );
}
