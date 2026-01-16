import axios from "axios"

export default function FormProduit(){

    const addProduit = (e) => {
        e.preventDefault()
        console.log(e.target.parentElement.nom.value)
        const produit = {
            id: e.target.parentElement.id.value,
            nom: e.target.parentElement.nom.value,
            prix: parseFloat(e.target.parentElement.prix.value)
        }
        
        axios.post('http://localhost:3000/produits', produit)
        .then(response => console.log(response.data))

    
    }
    return(
        <div>
            <h1>Formulaire de produit</h1>
            <form>
                <div>
                    <label>Id :</label>
                    <input type="text" name="id" />
                </div>
                <div>
                    <label>Nom :</label>
                    <input type="text" name="nom" />
                </div>
                <div>
                    <label>Prix :</label>
                    <input type="number" name="prix" />
                </div>
                <button type="submit" onClick={addProduit}>Ajouter Produit</button>
            </form>
        </div>
    )
}