import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;
let produits = [
    { id: 1, nom: 'Produit A', prix: 10.0 },
    { id: 2, nom: 'Produit B', prix: 20.0 },
];

app.get('/produits', (req, res) => {
    res.json(produits);
});

app.post('/produits', (req, res) => {
    const nouveauProduit = req.body;
    produits.push(nouveauProduit);
    res.status(201).json(nouveauProduit);
});

app.listen(port, () => {
    console.log(`Produits API listening at http://localhost:${port}`);
});