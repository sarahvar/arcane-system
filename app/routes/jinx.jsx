import "./jinx.css";

export default function JinxSystemPage() {
  return (
    <div className="jinx-page">
      <header>
        <h1>Jinx — Analyse Fonctionnelle</h1>
        <p>Un système construit autour de deux pôles identitaires opposés</p>
      </header>
      <section>
        <h2>Système interne</h2>

        <p>
          Jinx n’est pas “deux personnes”, mais une seule identité qui réagit de
          deux façons différentes : Powder et Jinx. L’une n’est pas meilleure
          que l’autre, elles sont deux réponses possibles à ce qu’elle vit.
          Certains aspects de Jinx étaient déjà présents en Powder :
          impulsivité, créativité chaotique, intensité émotionnelle. Jinx n’est
          pas née après coup : elle est la conséquence de ce que Powder a vécu
          et l’amplification de traits qui existaient déjà.
        </p>

        <p>
          Powder et Jinx ne peuvent pas fonctionner ensemble de manière stable,
          mais elles ne s’opposent pas : elles viennent du même endroit. Quand
          les deux s’activent en même temps, ce n’est pas un monstre qui
          apparaît, mais un état chaotique issu de son histoire.
        </p>
      </section>
      <section className="patterns-section">
        <h2>Patterns internes : Powder ↔ Jinx</h2>
        <p>
          Cette carte montre ce qui existe avant les interactions. C’est la base
          structurelle du personnage.
        </p>

        <div className="patterns-map">
          <div className="pattern-block powder-block">
            <h3>Patterns Powder</h3>
            <ul>
              <li>Dépendance structurelle</li>
              <li>Créativité instable</li>
              <li>Lecture binaire du lien</li>
              <li>Fragilité du mode</li>
            </ul>
          </div>

          <div className="pattern-link">
            <span>Powder ↔ Jinx</span>
            <small>Coexistence + Collision interne</small>
          </div>

          <div className="pattern-block jinx-block">
            <h3>Patterns Jinx</h3>
            <ul>
              <li>Autonomie radicale</li>
              <li>Créativité explosive</li>
              <li>Lecture de menace</li>
              <li>Dominance du pattern renforcé</li>
            </ul>
          </div>
        </div>
      </section>
      <img
        src="/Jinx.png"
        alt="Powder et Jinx — tension interne"
        style={{
          width: "100%",
          maxWidth: "350px",
          margin: "20px auto 40px",
          display: "block",
          borderRadius: "8px",
          boxShadow: "0 0 20px #00eaff",
        }}
      />
      <section className="interactions-section">
        <h2>Patterns liés aux interactions : Vi, Silco, Caitlyn</h2>
        <p>
          Carte détaillée des forces externes et de leurs effets sur Powder et
          Jinx.
        </p>
        <div className="character-block vi">
          <h3>Vi — Force externe / Lien originel</h3>

          <div className="detail">
            <h4>Déclencheurs</h4>
            <ul>
              <li>Retour dans l’environnement de Jinx</li>
              <li>Contact direct (nom, souvenirs, gestes)</li>
              <li>Activation du lien originel</li>
              <li>Rejet (déclenche Jinx)</li>
            </ul>
          </div>

          <div className="detail">
            <h4>Effets directs</h4>
            <ul>
              <li>Réactive Powder</li>
              <li>Refuse Jinx → hyper-vigilance</li>
            </ul>
          </div>

          <div className="detail">
            <h4>Effets internes</h4>
            <ul>
              <li>Powder remonte → Jinx se contracte</li>
              <li>Mode “régression”</li>
              <li>Déclenchement du mode Jinx</li>
            </ul>
          </div>

          <div className="detail">
            <h4>Collisions</h4>
            <ul>
              <li>Powder (besoin d’être aimée) ↔ Jinx (besoin d’être forte)</li>
              <li>Powder remonte → Jinx se rigidifie</li>
            </ul>
          </div>

          <div className="detail">
            <h4>Conséquences</h4>
            <ul>
              <li>Instabilité interne</li>
              <li>Surcharge émotionnelle</li>
              <li>Prise de contrôle de Jinx</li>
            </ul>
          </div>
        </div>
        <div className="character-block silco">
          <h3>Silco — Stabilisateur externe</h3>

          <div className="detail">
            <h4>Déclencheurs</h4>
            <ul>
              <li>Peur</li>
              <li>Fragilité de Jinx</li>
              <li>Silco = déclencheur direct de Jinx</li>
            </ul>
          </div>

          <div className="detail">
            <h4>Effets directs</h4>
            <ul>
              <li>Renforce Jinx</li>
              <li>Valide son identité</li>
              <li>Stabilise le mode dominant</li>
            </ul>
          </div>

          <div className="detail">
            <h4>Effets internes</h4>
            <ul>
              <li>Powder étouffée</li>
              <li>Mode “survie” renforcé</li>
            </ul>
          </div>

          <div className="detail">
            <h4>Collisions</h4>
            <ul>
              <li>Stabilise Jinx ↔ empêche Powder d’exister</li>
            </ul>
          </div>

          <div className="detail">
            <h4>Conséquences</h4>
            <ul>
              <li>Mode Jinx verrouillé</li>
              <li>Dépendance à Silco</li>
              <li>Fragilité extrême en cas de perte</li>
            </ul>
          </div>
        </div>
        <div className="character-block caitlyn">
          <h3>Caitlyn — Perturbatrice / Substitution</h3>

          <div className="detail">
            <h4>Déclencheurs</h4>
            <ul>
              <li>Proximité avec Vi</li>
              <li>Menace de remplacement</li>
              <li>Caitlyn = déclencheur direct de Jinx</li>
            </ul>
          </div>

          <div className="detail">
            <h4>Effets directs</h4>
            <ul>
              <li>Déclenche le mode “substitution”</li>
              <li>Active Powder + Jinx</li>
              <li>Déclenche hyper-vigilance</li>
            </ul>
          </div>

          <div className="detail">
            <h4>Effets internes</h4>
            <ul>
              <li>Double activation</li>
              <li>Surcharge</li>
              <li>Rigidification de Jinx</li>
            </ul>
          </div>

          <div className="detail">
            <h4>Collisions</h4>
            <ul>
              <li>Powder : peur de perdre Vi</li>
              <li>Jinx : éliminer la menace</li>
            </ul>
          </div>

          <div className="detail">
            <h4>Conséquences</h4>
            <ul>
              <li>Instabilité maximale</li>
              <li>Risque de bascule violente</li>
              <li>Prise de contrôle de Jinx</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ⭐ SECTION DÉPLACÉE EN PREMIER */}
      <section>
        <h2>Ce qui a construit Jinx</h2>
        <ul>
          <li>
            <strong>Vi</strong> → rupture du système d’origine : son rejet de
            Powder après la mort de Vander, Mylo et Claggor brise le dernier
            lien stable et déclenche la scission Powder/Jinx.
          </li>

          <li>
            <strong>Vander</strong> → perte du cadre protecteur : sa mort
            supprime la dernière structure stable capable de contenir Powder.
          </li>

          <li>
            <strong>Silco</strong> → reconstruction autour de{" "}
            <strong>Jinx</strong> : il reforme le système en renforçant
            l’attracteur Jinx et en bloquant Powder.
          </li>

          <li>
            <strong>Mylo & Claggor</strong> → fragmentation interne : leur perte
            crée une rupture irréversible dans la continuité identitaire.
          </li>

          <li>
            <strong>Ekko</strong> → contraste identitaire : il renvoie à Powder
            ce qu’elle aurait pu devenir, amplifiant le conflit interne.
          </li>

          <li>
            <strong>Caitlyn</strong> → activation défensive : perçue comme une
            menace sur Vi, elle déclenche une réaction Jinx immédiate.
          </li>

          <li>
            <strong>Jayce</strong> → escalade du conflit : ses actions
            militarisées renforcent la perception d’un monde hostile.
          </li>

          <li>
            <strong>Piltover</strong> → pression externe : la ville représente
            un système oppressif qui active systématiquement Jinx.
          </li>

          <li>
            <strong>Zaun</strong> → adaptation extrême : l’environnement
            chaotique pousse le système à privilégier la survie brute.
          </li>

          <li>
            <strong>Hextech</strong> → amplification des réactions : la
            technologie augmente la portée, l’intensité et l’imprévisibilité des
            outputs.
          </li>
        </ul>
      </section>

      {/* ⭐ SECTION QUI PASSE APRÈS */}
      <section>
        <h2>Ce qui influence Jinx</h2>
        <ul>
          <li>
            <strong>Vi</strong> : élément central. Avec elle → activation{" "}
            <strong>Powder</strong>. Sans elle → activation{" "}
            <strong>Jinx</strong>.
          </li>

          <li>
            <strong>Silco</strong> : stabilisateur. Il renforce{" "}
            <strong>Jinx</strong> et coupe <strong>Powder</strong>.
          </li>

          <li>
            <strong>Trauma</strong> : déclencheur. Il active{" "}
            <strong>Powder</strong> et <strong>Jinx</strong> simultanément,
            créant une surcharge et une oscillation interne.
          </li>

          <li>
            <strong>Piltover</strong> : environnement perçu comme hostile →
            réponse <strong>Jinx</strong> (défense, agressivité).
          </li>

          <li>
            <strong>Zaun</strong> : environnement chaotique → renforcement du
            mode <strong>Jinx</strong> (adaptation extrême).
          </li>

          <li>
            <strong>Technologie</strong> : amplificateur → outputs plus
            intenses, surtout du côté <strong>Jinx</strong>.
          </li>
        </ul>
      </section>

      <section>
        <h2>Traitement interne</h2>
        <p>
          Le système ne choisit jamais calmement entre Powder et Jinx. Il
          bascule. Powder représente la vulnérabilité, Jinx la survie. Quand les
          deux sont activés en même temps, le système devient imprévisible, mais
          toujours cohérent avec sa structure interne.
        </p>
      </section>

      <section>
        <h2>Comment Jinx réagit</h2>

        <h3>Activation Powder</h3>
        <ul>
          <li>Réactions émotionnelles fortes</li>
          <li>Blocages</li>
          <li>Erreurs ou maladresses</li>
        </ul>

        <h3>Activation Jinx</h3>
        <ul>
          <li>Réactions rapides et extrêmes</li>
          <li>Création d’armes ou gadgets imprévisibles</li>
          <li>Neutralisation immédiate des menaces perçues</li>
        </ul>

        <h3>Activation hybride (Powder ↔ Jinx)</h3>
        <ul>
          <li>Actions chaotiques mais orientées vers un but</li>
          <li>Perception déformée</li>
          <li>Décisions impulsives mais logiques dans le contexte</li>
        </ul>
      </section>

      <section>
        <h2>Jinx et Zaun</h2>
        <p>
          Jinx n’est pas seulement un individu, elle est une forme de Zaun
          internalisée. Zaun est un environnement chaotique, sans stabilité, où
          la survie, le bricolage et l’adaptation extrême sont la norme. Powder
          ne peut pas survivre dans ce cadre, Jinx oui. La transition Powder →
          Jinx est une adaptation forcée à un système qui ne protège pas la
          vulnérabilité.
        </p>
        <p>
          Jinx incarne la logique de Zaun : créativité explosive, violence comme
          langage, absence de limites claires, méfiance et réactivité extrême.
          Elle n’est pas “défaillante”, elle est cohérente avec un environnement
          qui impose l’instabilité comme mode de fonctionnement.
        </p>
      </section>

      <section>
        <h2>Jinx et Piltover</h2>
        <p>
          Piltover ne crée pas directement Jinx, mais détruit les conditions
          d’existence de Powder. La répression, la violence institutionnelle, la
          militarisation et la domination de Piltover brisent le système
          d’origine : mort de Vander, mort de Mylo et Claggor, séparation avec
          Vi. Chaque rupture majeure dans le système Powder est liée à une
          action ou une structure piltoverienne.
        </p>
        <p>
          Piltover agit comme une pression externe qui rend Powder non viable et
          Jinx fonctionnelle. Plus Piltover se durcit, plus l’attracteur Jinx se
          renforce. Jinx est ainsi autant une conséquence de Zaun qu’une réponse
          systémique à Piltover.
        </p>
      </section>

      <section>
        <h2>Synthèse</h2>
        <p>
          Jinx n’est pas “irrationnelle”. Elle fonctionne comme un système qui a
          été brisé, reconstruit, puis poussé à ses limites. Ses réactions sont
          la conséquence directe de forces internes et externes qui tirent dans
          des directions opposées. Elle ne cherche pas la cohérence : elle
          cherche à survivre dans un système qui ne lui laisse aucun état
          stable.
        </p>
      </section>
    </div>
  );
}
