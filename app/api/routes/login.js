import { bcrypt } from 'bcrypt';
import pool from "../../../lib/db";

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Methode non autorisée' });
    }
    
    const { username, password } = await req.body;

    try {
        const [user] = await pool.query('SELECT * FROM admin WHERE username = ?', [username]);

        if (user.length === 0) {
            return res.status(401).json({ error: 'Utilisateur inconnu' });
        }

        const isPasswordValid = await bcrypt.compare(password, user[0].password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Mot de passe incorrect' });
        }

        // Accès à la session configurée par sessionMiddleware
        req.session.isAdmin = true;
        await req.session.save();

        return res.status(200).json({ message: 'Connexion reussie' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erreur serveur' });
    }
};