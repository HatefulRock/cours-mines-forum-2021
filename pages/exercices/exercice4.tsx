import type { NextPage } from 'next'

const Exercise4: NextPage = () => {
  return (
    <><h1>Exercice 4</h1>
    <p>Consignes</p>
    <ul>
      <li>Recopier les exercices 1 et 2 ci-dessous</li>
      <li>Les adapter pour que les 2 exercices soient sur 2 colonnes différentes sur Desktop, et sur une seule colonne sur
        Mobile</li>
      <li>Adapter le formulaire pour qu&apos;il respecte les guidelines Bootstrap sur les formulaires</li>
    </ul>
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <table className="table">
      <tr>
        <th>Balises </th>
        <th>Contenu</th>
      </tr>
      <tr>
        <td>&lt;div&gt;</td>
        <td>text</td>
      </tr>
      <tr>
        <td>&lt;span&gt;</td>
        <td>tout</td>
      </tr>
      <tr>
        <td>&lt;article&gt;</td>
        <td>text</td>
      </tr>
      <tr>
        <td>&lt;nav&gt;</td>
        <td>text</td>
      </tr>
      <tr>
          <td>&lt;section&gt;</td>
          <td>text</td>
        </tr>
        <tr>
          <td>&lt;table&gt;</td>
          <td>tout</td>
        </tr>
        <tr>
          <td>&lt;li&gt;</td>
          <td>text</td>
        </tr>
        <tr>
          <td>&lt;h1&gt;</td>
          <td>text</td>
        </tr>
        <tr>
          <td>&lt;p&gt;</td>
          <td>text</td>
        </tr>
    </table>
    </div>
    <div className="col-sm-12 col-md-6">
    <h2>Exercice 2</h2>
    <form method="post">
        <label htmlFor="lastname">Nom</label>
        <input type="text" id="lastname" name="lastname" placeholder="Nom" />
        <label htmlFor="name">Prénom</label>
        <input type="text" id="name" name="name" placeholder="Prénom" />
        <label htmlFor="Email">Email</label>
        <input type="text" id="email" name="" placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Password" />
        <label htmlFor="Réglement">J&apos;accepte les conditions d&apos;utilisation</label>
        <input type="checkbox" id="Réglement" name="Réglement" />
      <div>
        <button type="submit">Envoyer</button>
        </div>
    </form>
    </div>
    </div>
    </>
    
  )
}

export default Exercise4
