export default function Produit({produit}){
    return(
        <tr key={produit.id}>
            <td className="align-middle">{produit.id}</td>
            <td className="align-middle fw-semibold">{produit.nom}</td>
            <td className="align-middle">
                <span className="badge bg-success rounded-pill fs-6">
                    {produit.prix} MAD
                </span>
            </td>
        </tr>
    )
}