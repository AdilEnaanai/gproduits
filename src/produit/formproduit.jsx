import axios from "axios"
import { useState } from "react"
export default function FormProduit(){
    const [id, setId] = useState('');
    const [nom, setNom] = useState('');
    const [prix, setPrix] = useState(0);
    const addProduit = (e) => {
        e.preventDefault()
        const produit = {
            id: id,
            nom: nom,
            prix: prix
        }
        
        axios.post('http://localhost:3000/produits', produit)
        .then(response => console.log(response.data))

    
    }
    return(
        <div>
            <h1>Formulaire de produit</h1>
            <form onSubmit={addProduit}>
                <div>
                    <label>Id :</label>
                    <input type="text" name="id" value={id} onChange={e => setId(e.target.value)} />
                </div>
                <div>
                    <label>Nom :</label>
                    <input type="text" name="nom" value={nom} onChange={e => setNom(e.target.value)} />
                </div>
                <div>
                    <label>Prix :</label>
                    <input type="number" name="prix" value={prix} onChange={e => setPrix(parseFloat(e.target.value))} />
                </div>
                <button type="submit">Ajouter Produit</button>
            </form>
        </div>
    )
}