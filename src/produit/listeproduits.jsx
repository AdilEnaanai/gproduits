import { useEffect, useState } from 'react'
import axios from 'axios'
import Produit from './produit'
import FormProduit from './formproduit'
export default function ListProduits(){
    const [showForm, setShowForm] = useState(false)
    const [produits, setProduits] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/produits')
        .then(response => setProduits(response.data))
    },[produits])
    return(
        <div>
            <button onClick={() => setShowForm(!showForm)}>{showForm ? "-" : "+"}</button>
            {showForm && <FormProduit />}
            <h1>Liste des produits</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th> 
                        <th>Nom</th>
                        <th>Prix</th>
                    </tr>
                </thead>
                <tbody>
                    {produits.map(produit => (
                       <Produit key={produit.id} produit={produit} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}