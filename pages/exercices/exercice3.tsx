import type { NextPage } from 'next'

const Exercise3: NextPage = () => {
  return (
  <><><h1>Exercice 3</h1>
      <p>Consignes :</p>
      </><ul>
        <li>Mettre en forme l&apos;exercice 3</li>
        <li>Recopier le formulaire d&apos;inscription précédent ci-dessous</li>
        <li>Grâce au fichier style.css, mettre le texte des labels en bleu, agrandir la police dans les input texte, placer un
          bloc en position absolue à droite du champ adresse email avec un texte de votre choix en police 10px rouge.</li>
      </ul>
      <form method="post">
      <div>
        <label htmlFor="lastname">Nom</label>
        <input type="text" id="lastname" name="lastname" placeholder="Nom" />
      </div>
      <div>
        <label htmlFor="name">Prénom</label>
        <input type="text" id="name" name="name" placeholder="Prénom" />
      </div>
      <div>
        <label htmlFor="Email">Email</label>
        <input type="text" id="email" name="" placeholder="Email" />
        <span>Ne pas lire</span>
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Password" />
      </div>
      <div>
        <label htmlFor="Réglement">J&apos;accepte les conditions d&apos;utilisation</label>
        <input type="checkbox" id="Réglement" name="Réglement" />
      </div>

      <div>
        <button type="submit">Envoyer</button>
      </div>
    </form>
      </>
  )
}

export default Exercise3
