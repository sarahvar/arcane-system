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
