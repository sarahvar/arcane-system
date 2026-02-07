import "./jinx.css";

import { useEffect } from "react";

export default function JinxSystemPage() {
  useEffect(() => {
    document.querySelectorAll("section > h2").forEach((title) => {
      const section = title.parentElement;

      title.addEventListener("click", () => {
        section.classList.toggle("open");
      });
    });
  }, []);

  return (
    <div className="jinx-page">
      <header>
        <h1>Powder et Jinx — Comprendre les deux modes internes</h1>
        <p>Un système construit autour de deux pôles identitaires opposés</p>
      </header>
      <nav className="char-navbar">
        <div className="nav-logo">Personnages</div>

        <button className="nav-toggle" aria-label="toggle navigation">
          ☰
        </button>

        <ul className="nav-links">
          <li>
            <a href="/vi">Vi</a>
          </li>
          <li>
            <a href="/silco">Silco</a>
          </li>
          <li>
            <a href="/vander">Vander</a>
          </li>
          <li>
            <a href="/ekko">Ekko</a>
          </li>
          <li>
            <a href="/caitlyn">Caitlyn</a>
          </li>
          <li>
            <a href="/sevika">Sevika</a>
          </li>
          <li>
            <a href="/isha">Isha</a>
          </li>
        </ul>
      </nav>
      <section>
        <h2>Niveau 0 : Éléments fondateurs du système Powder/Jinx</h2>

        <p>
          Le premier élément fondateur du système Powder/Jinx est l’événement du
          pont : la mort des parents sous la violence Piltover → Zaun. Cette
          rupture initiale détruit la structure primaire de sécurité et installe
          un fonctionnement interne vulnérable, dépendant d’un stabilisateur
          externe.
        </p>

        <p>
          Le second élément fondateur est Vi, qui devient le stabilisateur
          primaire. Vi agit comme filtre entre Powder et le monde : première
          autorité, première continuité, première barrière contre
          l’environnement. Powder ne développe pas de continuité interne
          autonome : elle s’appuie sur Vi comme structure externe.
        </p>

        <p>
          Le troisième élément fondateur est Vander, stabilisateur secondaire.
          Il fournit un cadre matériel, moral et social qui renforce la
          dépendance de Powder à des structures externes plutôt qu’à un système
          interne consolidé.
        </p>

        <p>
          Le quatrième élément fondateur est le groupe (Vi, Mylo, Claggor,
          Vander). Powder existe dans une micro-structure où sa valeur dépend de
          la cohésion collective, pas d’un système interne stable.
        </p>

        <p>
          Le cinquième élément fondateur est la rupture : l’explosion. La mort
          de Mylo, Claggor, la perte de Vander et la disparition de Vi
          détruisent simultanément tous les stabilisateurs externes. Powder
          n’ayant pas de structure interne autonome, le système se reconstruit
          sous une nouvelle forme : Jinx.
        </p>
      </section>
      <section>
        <h2>Rupture du système Powder : explosion, perte et reconfiguration</h2>

        <p>
          L’explosion constitue le point de bascule du système Powder. Elle
          détruit simultanément tous les stabilisateurs externes : Vander,
          Claggor, Mylo et la cohésion du groupe. Cette rupture totale effondre
          la structure qui permettait à Powder de fonctionner sans continuité
          interne autonome.
        </p>

        <p>
          La réaction de Vi, en surcharge, agit comme une seconde rupture. En
          rejetant Powder, elle cesse d’être le stabilisateur primaire. Powder
          perd alors son dernier point d’ancrage. Cette perte n’est pas
          émotionnelle mais structurelle : le système interne de Powder se
          retrouve sans support et ne peut absorber la rupture.
        </p>

        <p>
          Silco arrive d’abord pour éliminer Powder. Mais il observe un système
          vulnérable, privé de stabilisateurs, en reconstruction forcée. Il
          occupe alors la place laissée vide : il devient le stabilisateur de
          substitution. Powder déplace ses patterns de Vi vers Silco : recherche
          de validation, besoin de cadre, quête de continuité. Ce déplacement
          n’est pas un choix, mais une réorganisation mécanique du système.
        </p>

        <p>
          Vi tente de revenir vers Powder, mais l’intervention de Marcus,
          policier de Piltover déjà compromis et en contact avec Silco, l’en
          empêche. Il neutralise Vi en l’emprisonnant — non pour la protéger,
          mais pour empêcher qu’elle interfère avec l’accord qu’il a passé avec
          Silco. Son arrestation et son emprisonnement rendent impossible la
          restauration du système d’origine : Powder. Pendant que Vi disparaît
          du système, Silco consolide sa position de stabilisateur externe,
          permettant la reconstruction du système sous une nouvelle forme :
          Jinx.
        </p>

        <p>
          La scène de l’explosion marque donc la transition structurelle :
          Powder perd tous ses stabilisateurs externes, déplace ses patterns
          vers Silco et se reconfigure en Jinx. Ce processus est mécanique, non
          psychologique.
        </p>

        <p>
          À cette époque, Marcus fournit à Silco une fausse version : il affirme
          que Vi est morte, produisant une version qui efface Vi du système.
          Lorsque Silco découvre, bien plus tard, que Vi est vivante et
          réintroduite dans le système - via l’intervention de Caitlyn — il
          comprend que son architecture est menacée : Vi est le seul
          stabilisateur primaire capable de défaire la reconstruction <br />
          Powder → Jinx.
        </p>
      </section>
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
      <section>
        <h2>Attracteurs internes : Powder ↔ Jinx ↔ Hybride</h2>

        <p>
          Le système interne fonctionne autour de trois attracteurs. Ils ne sont
          pas des états émotionnels, mais des modes fonctionnels activés selon
          la pression externe et la charge interne.
        </p>

        <h3>Attracteur Powder</h3>
        <ul>
          <li>Activation : lien, protection, rappel du passé</li>
          <li>Mode : vulnérabilité, dépendance, recherche de stabilité</li>
          <li>Condition : présence d’un stabilisateur (Vi, Vander)</li>
          <li>Limite : non viable dans un environnement hostile</li>
        </ul>

        <h3>Attracteur Jinx</h3>
        <ul>
          <li>Activation : menace, perte, chaos</li>
          <li>Mode : survie, agressivité, créativité explosive</li>
          <li>Condition : absence de stabilisateur</li>
          <li>Limite : rigidité, escalade</li>
        </ul>

        <h3>Attracteur Hybride</h3>
        <ul>
          <li>Activation : surcharge, trauma</li>
          <li>Mode : actions chaotiques mais orientées</li>
          <li>Condition : double activation</li>
          <li>Limite : instabilité maximale</li>
        </ul>
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
              <li>
                Caitlyn = déclencheur indirect (Vi modifie son comportement →
                activation Powder/Jinx)
              </li>
            </ul>
          </div>

          <div className="detail">
            <h4>Effets directs</h4>
            <ul>
              <li>Déclenche le mode « substitution »</li>
              <li>
                Active Powder sur le plan émotionnel (besoin de Vi, jalousie,
                peur d’être abandonnée)
              </li>
              <li>
                Active Jinx sur le plan comportemental (violence, impulsivité,
                réponses extrêmes)
              </li>
              <li>Déclenche l’hyper-vigilance</li>
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
      {/* ⭐ SECTION AJOUTÉE : POWDER */}
      <section>
        <h2>Ce qui a construit Powder</h2>
        <ul>
          <li>
            <strong>Vi</strong> → base identitaire et sécurité primaire : Powder
            se construit autour de la protection de Vi, créant une dépendance
            structurelle.
          </li>

          <li>
            <strong>Vander</strong> → cadre protecteur : il fournit la stabilité
            permettant à Powder d’exister sans danger. Sa mort provoque un
            effondrement du système.
          </li>

          <li>
            <strong>Mylo</strong> → invalidation : ses critiques renforcent le
            sentiment d’incompétence et fragilisent Powder.
          </li>

          <li>
            <strong>Claggor</strong> → stabilité émotionnelle : sa présence
            soutient Powder. Sa perte crée une rupture brutale dans la
            continuité interne.
          </li>

          <li>
            <strong>Ekko</strong> → miroir positif : il représente ce que Powder
            aurait pu devenir, créant un écart douloureux.
          </li>

          <li>
            <strong>Zaun (enfant)</strong> → chaos : l’environnement instable
            pousse Powder à chercher un repère externe (Vi, Vander).
          </li>

          <li>
            <strong>Piltover (enfant)</strong> → sentiment d’infériorité : monde
            perçu comme inaccessible, renforçant la fragilité identitaire.
          </li>

          <li>
            <strong>Trauma initial</strong> → fragmentation : l’explosion
            détruit la continuité interne et ouvre la voie au mode Jinx.
          </li>
        </ul>
      </section>

      <section>
        <h2>Ce qui influence Powder</h2>
        <ul>
          <li>
            <strong>Vi</strong> → réactivation directe : le nom “Powder”, les
            gestes de protection et la proximité ramènent immédiatement le mode
            vulnérable.
          </li>

          <li>
            <strong>Silco</strong> → suppression : il renforce Jinx et étouffe
            Powder, incompatible avec son modèle.
          </li>

          <li>
            <strong>Caitlyn</strong> → menace sur Vi : active la panique et la
            dépendance.
          </li>

          <li>
            <strong>Ekko</strong> → rappel identitaire : réactive honte +
            nostalgie.
          </li>

          <li>
            <strong>Trauma</strong> → surcharge : Powder et Jinx s’activent en
            même temps, créant une oscillation interne.
          </li>

          <li>
            <strong>Piltover</strong> → inhibition : Powder se replie, se sent
            illégitime.
          </li>

          <li>
            <strong>Zaun</strong> → activation partielle : environnement
            familier, mais Powder reste fragile.
          </li>

          <li>
            <strong>Hextech</strong> → effacement : trop dangereux/complexe,
            Powder se retire et laisse la place à Jinx.
          </li>
        </ul>
      </section>
      <section>
        <h2>Continuité interne avant la rupture</h2>

        <p>
          Avant la fragmentation, Powder fonctionnait dans une continuité
          fragile mais réelle. La stabilité reposait entièrement sur des
          stabilisateurs externes.
        </p>

        <ul>
          <li>Vi = repère principal</li>
          <li>Vander = cadre protecteur</li>
          <li>Claggor = stabilité émotionnelle</li>
          <li>Ekko = miroir positif</li>
          <li>Mylo = fragilisation mais intégration</li>
        </ul>

        <p>
          Powder n’avait pas d’autonomie interne : elle empruntait la stabilité
          des autres. Quand ces stabilisateurs disparaissent, la continuité
          interne s’effondre mécaniquement.
        </p>
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
        <h2>Fonctionnement post‑rupture</h2>

        <p>
          Après la scission Powder → Jinx, le système interne ne peut plus
          revenir à son état d’origine. Powder n’a plus les conditions
          nécessaires pour redevenir dominante, et Jinx ne peut pas redevenir
          Powder.
        </p>

        <h3>Pourquoi Powder ne peut plus redevenir dominante</h3>
        <ul>
          <li>Absence de stabilisateurs</li>
          <li>Environnement hostile</li>
          <li>Surcharge immédiate</li>
          <li>Activation automatique de Jinx</li>
        </ul>

        <h3>Pourquoi Jinx ne peut pas redevenir Powder</h3>
        <ul>
          <li>Mode de survie devenu structurel</li>
          <li>Renforcement constant par Silco</li>
          <li>Lecture de menace permanente</li>
          <li>Powder = état non viable</li>
        </ul>

        <h3>Fonctionnement global</h3>
        <ul>
          <li>Jinx = attracteur dominant</li>
          <li>Powder = attracteur résiduel</li>
          <li>Hybride = état chaotique lors des surcharges</li>
          <li>Le système cherche la survie, pas la cohérence</li>
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
        <h2>Jinx comme système géopolitique : Zaun incarné</h2>

        <p>
          Jinx n’est pas une figure isolée dans Arcane. Elle est la conséquence
          directe d’un environnement géopolitique instable : Zaun. Le territoire
          produit des individus façonnés par la pauvreté structurelle, l’absence
          d’autorité centrale, la violence systémique et l’exploitation par
          Piltover. Jinx n’est pas un symbole abstrait : elle est la
          matérialisation logique d’un système en effondrement.
        </p>

        <p>
          La transition Powder → Jinx correspond à la transformation de Zaun
          vulnérable en Zaun radicalisé. Powder représente la population
          fragile, dépendante de figures locales comme Vander, vivant dans un
          tissu social instable. Jinx incarne la version militarisée du
          territoire : une réponse chaotique née de la perte des stabilisateurs
          internes et de la montée des extrêmes. Silco agit comme un proto-État,
          convertissant la douleur en ressource politique et la violence en
          stratégie.
        </p>
        <p>
          Dans la saison 1, l’attaque finale de Jinx contre le Conseil n’est pas
          un acte individuel mais un événement géopolitique. Elle marque le
          point de non-retour entre Piltover et Zaun : décennies d’exploitation,
          absence de dialogue, radicalisation progressive et disparition des
          médiateurs. Jinx incarne la rupture définitive d’un ordre déjà
          fracturé.
        </p>
      </section>
      <section>
        <h2>
          Le cadrage moral d’Arcane : rébellion "dangereuse", soumission "sage"
        </h2>

        <p>
          Arcane encode un schéma moral humain, mais elle le fait de manière
          construite : la série utilise délibérément la radicalité de Silco
          comme dispositif narratif. Plus Silco est montré comme extrême, plus
          la coopération contrainte de Vander apparaît comme la voie
          “raisonnable”. Le récit fabrique ainsi un contraste moral où le
          compromis imposé est présenté comme la solution légitime, tandis que
          la rébellion est cadrée comme une menace. Ce cadrage n’est pas
          structurel : il oriente la perception du spectateur, alors que la
          dynamique réelle du conflit est géopolitique et non morale.
        </p>

        <p>
          Cette mise en scène repose sur une dualité construite entre Vander et
          Vi d’un côté, et Silco et Jinx de l’autre. Dans ce dispositif, Jinx
          n’est pas radicale par nature : elle est intégrée à la radicalité de
          Silco par l’instrumentalisation qu’il exerce sur elle. Cette
          instrumentalisation renforce le cadrage moral en donnant à la
          rébellion une figure “dangereuse”, alors qu’elle n’est que la
          conséquence cohérente d’un système opprimé qui a perdu ses
          stabilisateurs internes. Cette stabilisation n’était pas une forme de
          libération : elle ne faisait que maintenir la cohésion interne dans un
          système qui restait oppressif.
        </p>

        <p>
          Le cadrage moral d’Arcane ne se contente donc pas d’orienter la
          lecture : il remplace la dynamique géopolitique qui produit Jinx par
          une lecture morale du conflit et transforme son état identitaire en
          manœuvre politique pour les pouvoirs en place.
        </p>
      </section>
      <section>
        <h2>Identité interne modulée / Identité politique stabilisée</h2>

        <p>
          À l’intérieur du <strong>système Jinx lui-même</strong>, l’identité
          est modulée. Le fonctionnement interne repose sur des attracteurs en
          tension (Powder, Jinx, Hybride), une fragmentation issue du trauma et
          une oscillation fonctionnelle selon la pression externe. Cette
          variabilité appartient au mécanisme interne du personnage.
        </p>

        <p>
          À l’extérieur, dans le <strong>système géopolitique</strong> (Silco,
          Zaun, Piltover), Jinx est perçue et utilisée comme une identité
          stabilisée. Elle devient un symbole cohérent : arme politique pour
          Silco, incarnation de Zaun radicalisé, menace identifiable pour
          Piltover. Cette stabilité n’est pas interne, mais{" "}
          <strong>produite par les structures de pouvoir</strong>.
        </p>

        <p>
          Cette dissociation est centrale : Jinx est dynamique en elle-même,
          mais stabilisée dans la manière dont elle est intégrée, interprétée et
          exploitée par les systèmes politiques. Ce décalage rend impossible le
          retour à Powder et ancre Jinx dans une logique tragique où l’identité
          interne et l’identité politique ne peuvent plus converger.
        </p>
      </section>
      <section>
        <h2>Piltover → Zaun : structure de domination</h2>

        <p>
          Piltover maintient Zaun dans une position subordonnée : contrôle des
          ressources, hiérarchie technologique, exploitation économique et
          absence de représentation politique. Cette relation crée un
          déséquilibre permanent qui alimente la frustration, la colère et la
          radicalisation. Jinx est une réponse née de cette dynamique : un
          produit d’un territoire écrasé par un pouvoir supérieur.
        </p>

        <p>
          La domination de Piltover n’est pas frontale mais structurelle : elle
          s’exerce par l’accès inégal aux technologies, la gestion des flux
          commerciaux, la surveillance indirecte et la dépendance économique.
          Zaun n’a pas les moyens de se stabiliser, ce qui rend inévitable
          l’émergence d’acteurs extrêmes.
        </p>
      </section>

      <section>
        <h2>Structure interne de Zaun</h2>

        <p>
          Zaun n’est pas un bloc homogène. C’est un ensemble fragmenté composé
          de zones, de factions, de réseaux et d’intérêts divergents. L’absence
          d’autorité centrale crée un espace où les alliances sont temporaires,
          les conflits fréquents et la survie prioritaire. Cette fragmentation
          rend impossible toute stabilisation durable.
        </p>

        <ul>
          <li>Factions locales : gangs, ateliers, milices</li>
          <li>
            Zones différenciées : quartiers industriels, zones toxiques, refuges
          </li>
          <li>Économie parallèle : chimtech, contrebande, récupération</li>
          <li>
            Hiérarchies mouvantes : pouvoir basé sur la force et les ressources
          </li>
          <li>Absence de médiateurs stables après la chute de Vander</li>
        </ul>

        <p>
          Dans ce contexte, Jinx n’est pas une anomalie : elle est une
          expression cohérente d’un territoire où la stabilité est impossible et
          où la violence devient un mode d’existence.
        </p>
      </section>

      <section className="patterns-section">
        <h2>Patterns géopolitiques : Zaun ↔ Jinx</h2>
        <p>
          Cette carte montre les structures internes avant les interactions.
          Elle relie le territoire (Zaun) et son expression incarnée (Jinx) à
          travers des patterns fonctionnels qui se renforcent mutuellement.
        </p>

        <div className="patterns-map">
          <div className="pattern-block powder-block">
            <h3>Zaun vulnérable (Powder)</h3>
            <ul>
              <li>Pauvreté structurelle et dépendance économique</li>
              <li>Absence d’autorité centrale ou de régulation</li>
              <li>Figures locales comme stabilisateurs (Vander)</li>
              <li>Fragilité du tissu social et des alliances</li>
              <li>Population exposée aux décisions de Piltover</li>
            </ul>
          </div>

          <div className="pattern-link">
            <span>Zaun ↔ Jinx</span>
            <small>Transformation, militarisation, rupture</small>
          </div>

          <div className="pattern-block jinx-block">
            <h3>Zaun radicalisé (Jinx)</h3>
            <ul>
              <li>Militarisation de la douleur par Silco</li>
              <li>Créativité explosive : armes, chimtech, sabotage</li>
              <li>Lecture permanente de menace (Piltover = oppresseur)</li>
              <li>Actions asymétriques contre un pouvoir supérieur</li>
              <li>Absence de médiation → logique de rupture totale</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Silco : proto-État et catalyseur</h2>

        <p>
          Silco fonctionne comme un acteur para-étatique : il structure une
          idéologie, centralise la violence, organise une économie parallèle et
          crée une identité collective pour Zaun. Il ne cherche pas à manipuler
          Jinx mais à stabiliser un mode interne déjà présent, en le
          transformant en force stratégique.
        </p>

        <p>
          Son pouvoir repose sur trois éléments : la maîtrise de la chimtech, la
          capacité à fédérer des factions instables et la transformation de la
          douleur en ressource politique. Jinx devient alors un vecteur central
          de son projet : une arme, un symbole et un message.
        </p>
      </section>

      <section>
        <h2>Point de non-retour : logique asymétrique</h2>

        <p>
          L’attaque finale de Jinx suit une logique asymétrique : un acteur
          faible frappe un acteur dominant en ciblant un point symbolique. Ce
          n’est pas une explosion impulsive mais la conclusion d’un enchaînement
          de ruptures : marginalisation, montée des extrêmes, disparition des
          médiateurs et impossibilité totale de dialogue.
        </p>

        <p>
          Jinx n’agit pas contre Piltover en tant que ville, mais contre un
          système qui a rendu toute coexistence impossible. Elle incarne la
          rupture que Zaun n’a jamais pu formuler politiquement. Son geste est
          la traduction directe d’un territoire qui n’a plus rien à perdre.
        </p>
      </section>
      <section>
        <h2>Vi ↔ Jinx : fracture interne de Zaun</h2>
        <p>
          La relation entre Vi et Jinx n’est pas un simple conflit personnel. Vi
          représente la continuité de Powder : un lien ancien, préservé malgré
          l’effondrement du territoire. Jinx, elle, incarne la version
          radicalisée née de Zaun après la chute des stabilisateurs internes.
          Leur opposition n’est pas idéologique : Vi cherche à restaurer un mode
          antérieur, tandis que Jinx fonctionne selon la logique d’un
          environnement où la rupture est devenue la seule réponse possible.
        </p>
        <p>
          Vi cherche à maintenir un lien, à préserver une continuité avec le
          Zaun vulnérable d’avant la chute. Jinx, elle, fonctionne comme
          l’expression d’un Zaun qui a perdu ses médiateurs, ses repères et ses
          structures internes. Leur opposition n’est pas morale : elle est
          structurelle. Elles représentent deux réponses divergentes à un même
          environnement instable.
        </p>

        <p>
          Cette fracture interne affaiblit Zaun. Vi porte la mémoire d’un
          territoire qui aurait pu se stabiliser. Jinx porte la logique d’un
          territoire qui n’a plus rien à perdre. Leur confrontation est
          l’illustration d’un conflit géopolitique interne : cohésion contre
          fragmentation, reconstruction contre radicalisation, continuité contre
          rupture.
        </p>

        <p>
          Dans cette dynamique, Jinx ne s’oppose pas à Vi : elle fonctionne
          selon la logique d’un Zaun transformé par la perte de ses
          stabilisateurs internes. Vi ne s’oppose pas à Jinx : elle porte la
          continuité d’un mode antérieur, formé avant la fragmentation du
          territoire. Leur relation exprime deux trajectoires issues du même
          environnement mais devenues incompatibles lorsque Zaun s’est effondré.
        </p>
      </section>
      <section>
        <h2>La saison 2 et la rupture de la logique Powder/Jinx</h2>

        <p>
          La saison 1 d’Arcane est construite comme une tragédie psychologique
          et politique : Powder et Jinx y forment une seule trajectoire,
          cohérente, fermée, profondément marquée par le trauma et le conflit
          Zaun/Piltover. Le succès massif de cette saison a entraîné un
          changement de direction pour la saison 2, qui devient moins politique
          et plus émotionnelle, avec une volonté claire d’élargir l’audience.
        </p>

        <p>
          Ce changement extérieur a un impact direct sur l’écriture de Jinx. La
          saison 2 introduit une séparation artificielle entre Powder et Jinx :
          Powder est présentée comme le “bon côté”, Jinx comme le “mauvais
          côté”. Cette dichotomie n’existait pas en saison 1, où Jinx n’était
          pas une corruption de Powder, mais la continuité tragique de Powder
          elle-même.
        </p>

        <p>
          La saison 1 montre pourtant que Powder existe encore en Jinx : elle
          réapparaît dans les moments de panique, de culpabilité ou de
          confrontation avec Vi. Mais cette Powder n’est pas une version “pure”
          ou “innocente” du personnage : elle est marquée par le trauma, la
          dissociation et la fragilité qui ont conduit à la naissance de Jinx.
          Elle n’existe plus comme identité stable ou récupérable, seulement
          comme un fragment instable. La saison 2 construit donc une Powder
          idéalisée qui n’a jamais existé dans la logique de la saison 1.
        </p>

        <p>
          Silco n’accepte que Jinx tandis que Vi cherche Powder : cette tension
          montre que Powder est toujours présente en Jinx, mais sous une forme
          instable et fragmentée. La saison 1 construit précisément cette
          coexistence : Powder n’a pas disparu, mais elle n’existe plus comme
          identité autonome ou retrouvable.
        </p>

        <p>
          Le personnage d’Isha illustre cette réécriture. Isha n’est pas une
          évolution organique de la psychologie de Jinx, mais un outil narratif
          : elle sert à montrer une version plus “stable” et “bienveillante” de
          Powder, à prouver que “du bon” subsiste en Jinx, et à rendre le
          personnage plus acceptable pour Vi et pour le public. Pourtant, Powder
          n’a jamais été stable dans la saison 1 : elle est construite comme une
          enfant déjà fragile, anxieuse et instable, dont la trajectoire mène
          naturellement à Jinx. Structurellement, Isha ne peut donc pas avoir un
          tel impact sur Powder, car elle repose sur une version idéalisée de
          Powder qui n’a jamais existé. Powder est définie par un trauma
          fondateur qui structure toute sa trajectoire, et non par un état
          antérieur sain auquel Jinx pourrait revenir. Isha fonctionne aussi
          comme un outil de rédemption : elle permet de présenter Jinx sous un
          angle moralement “sauvable”, ce qui transforme Powder en innocence
          retrouvable et contredit la logique tragique de la saison 1.
        </p>

        <p>
          La mort d’Isha confirme ce déplacement. Dans la logique de la saison
          1, une perte traumatique aurait déclenché chez Jinx une nouvelle crise
          de dissociation, de chaos, d’explosion. Dans la saison 2, la mort
          d’Isha conduit plutôt à une tristesse “classique” et à un désir de
          mourir. Ce n’est plus la dynamique interne de Jinx telle qu’elle avait
          été construite, mais une trajectoire de rédemption tragique imposée de
          l’extérieur.
        </p>

        <p>
          L’épisode 7 renforce cette séparation artificielle : Ekko y voit une
          version alternative de Powder, distincte de Jinx. Cette mise en scène
          propose une lecture morale (Powder pure, Jinx corrompue) qui n’était
          pas présente dans la première saison. Ekko finit par accepter Powder
          dans la saison 2, mais uniquement après avoir vu cette version
          alternative idéalisée, ce qui confirme que la série construit une
          Powder plus douce et plus stable que celle, traumatisée et instable,
          de la saison 1. On ne suit plus la continuité psychologique d’un même
          sujet brisé, mais une opposition simplifiée entre deux figures
          symboliques.
        </p>

        <p>
          Ainsi, la saison 2 ne suit pas la logique structurelle de Powder/Jinx
          établie en saison 1. Les choix de production extérieurs (élargissement
          de l’audience, adoucissement du personnage) modifient la cohérence
          interne du personnage : Powder et Jinx sont séparées artificiellement,
          et Isha fonctionne comme un outil de réécriture morale et de
          rédemption plutôt que comme un prolongement naturel de la psychologie
          de Jinx.
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
