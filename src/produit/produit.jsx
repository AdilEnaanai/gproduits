
export default function Produit({produit}){
    return(
        <tr key={produit.id}>
            <td>{produit.id}</td>
            <td>{produit.nom}</td>
            <td>{produit.prix} €</td>
        </tr>
    )
}