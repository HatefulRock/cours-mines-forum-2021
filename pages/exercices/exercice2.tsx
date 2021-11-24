import type { NextPage } from 'next'

const Exercise2: NextPage = () => {
  return (
    <><h1>Exercice 2</h1>
    <p>Consignes :</p>
    <ul>
    <li>Mettre en forme l&apos;exercice 2</li>
    <li>Créer ci-dessous un formulaire d&apos;inscription contenant les champs : Prénom, nom, email, mot de passe, checkbox pour
      accepter un quelconque règlement et un bouton de validation.</li>
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

export default Exercise2
