import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'

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
        .then(response => {
            console.log(response.data)
            // Réinitialiser le formulaire
            e.target.parentElement.reset()
        })
        .catch(error => console.error(error))
    }

    return(
        <div className="container mt-4">
            <div className="card shadow">
                <div className="card-header bg-success text-white">
                    <h4 className="mb-0">
                        <i className="bi bi-plus-circle-fill me-2"></i>
                        Formulaire de produit
                    </h4>
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="id" className="form-label fw-bold">
                                <i className="bi bi-hash me-1"></i>
                                ID :
                            </label>
                            <input 
                                type="text" 
                                name="id" 
                                id="id"
                                className="form-control" 
                                placeholder="Entrez l'identifiant"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="nom" className="form-label fw-bold">
                                <i className="bi bi-tag-fill me-1"></i>
                                Nom :
                            </label>
                            <input 
                                type="text" 
                                name="nom" 
                                id="nom"
                                className="form-control" 
                                placeholder="Entrez le nom du produit"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="prix" className="form-label fw-bold">
                                <i className="bi bi-currency-dollar me-1"></i>
                                Prix :
                            </label>
                            <div className="input-group">
                                <input 
                                    type="number" 
                                    name="prix" 
                                    id="prix"
                                    className="form-control" 
                                    placeholder="0.00"
                                    step="0.01"
                                    required
                                />
                                <span className="input-group-text">MAD</span>
                            </div>
                        </div>

                        <div className="d-grid gap-2">
                            <button 
                                type="submit" 
                                onClick={addProduit}
                                className="btn btn-success btn-lg"
                            >
                                <i className="bi bi-check-circle me-2"></i>
                                Ajouter Produit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}