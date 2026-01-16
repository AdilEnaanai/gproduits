import { useEffect, useState } from 'react'
import axios from 'axios'
import Produit from './produit'
import FormProduit from './formproduit'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function ListProduits(){
    const [showForm, setShowForm] = useState(false)
    const [produits, setProduits] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:3000/produits')
            .then(response => setProduits(response.data))
    },[produits])
    
    return(
        <div className="container mt-5">
            <div className="card shadow-lg">
                <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                    <h2 className="mb-0">
                        <i className="bi bi-bag-fill me-2"></i>
                        Liste des produits
                    </h2>
                    <button 
                        className="btn btn-light btn-lg rounded-circle"
                        onClick={() => setShowForm(!showForm)}
                        style={{width: '50px', height: '50px'}}
                    >
                        {showForm ? "−" : "+"}
                    </button>
                </div>
                
                <div className="card-body">
                    {showForm && (
                        <div className="alert alert-light border mb-4">
                            <FormProduit />
                        </div>
                    )}
                    
                    <div className="table-responsive">
                        <table className="table table-striped table-hover table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Prix</th>
                                </tr>
                            </thead>
                            <tbody>
                                {produits.length > 0 ? (
                                    produits.map(produit => (
                                        <Produit key={produit.id} produit={produit} />
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="text-center text-muted">
                                            Aucun produit disponible
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}