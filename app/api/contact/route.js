// app/api/contact/route.js
import pool from '../../../lib/db';

export async function POST(request) {
    const { firstname, lastname, email, message } = await request.json();

    try {
        // Insérer les données dans la base de données
        const result = await pool.query(
            'INSERT INTO contacts (firstname, lastname, email, message) VALUES (?, ?, ?, ?)',
            [firstname, lastname, email, message]
        );

        // Répondre au client avec un message de succès
        return new Response(JSON.stringify({ message: 'Votre message a été envoyé avec succès !' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Erreur lors de l\'insertion des données :', error);
        return new Response(JSON.stringify({ error: 'Une erreur est survenue lors de l\'envoi de votre message.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
