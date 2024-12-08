import pool from "../../../lib/db";
import { checkAdmin } from "../middleware/checkAdmin";

// Route pour lister tous les articles
export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const limit = parseInt(searchParams.get('limit')) || 10;
        const offest = parseInt(searchParams.get('offset')) || 0;

        const [articles] = await pool.query("SELECT * FROM articles LIMIT ? OFFSET ?", [limit, offest]);

        return new Response(JSON.stringify({ articles }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
        return new Response(JSON.stringify({ error: 'Erreur serveur' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

export async function POST(request) {
    try {
        const adminCheck = await checkAdmin(request);
        if (adminCheck) {
            return new Response(JSON.stringify({ error: 'Accès interdit' }), {
                status: 403,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const { title, content } = await request.json();
        // Validation des données
        if (!title || !content) {
            return new Response(JSON.stringify({ error: 'Les données sont incomplètes' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const result = await pool.query('INSERT INTO articles (title, content) VALUES (?, ?)', [title, content]);

        return new Response(JSON.stringify({ message: 'Article créé avec succès', id: result[0].insertId }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("Erreur lors de la création de l'article :", error);
        return new Response(JSON.stringify({ error: 'Erreur serveur' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}


export async function PUT(request) {
    // Vérification admin
    try {
        const adminCheck = await checkAdmin(request);
        if (adminCheck) {
            return new Response(JSON.stringify({ error: 'Accès non autorisé' }), {
                status: 403,
                headers: { 'Content-Type': 'application/json' },
            }); // Retourne une réponse 403 si l'utilisateur n'est pas admin
        }

        const { articleId, newContent } = await request.json();

        if (!articleId || !newContent) {
            return new Response(JSON.stringify({ error: 'Données invalides' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const [existingArticle] = await pool.query('SELECT * FROM articles WHERE id = ?', [articleId]);
        if (!existingArticle.length) {
            return new Response(JSON.stringify({ error: 'Article non trouvé' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        await pool.query('UPDATE articles SET content = ? WHERE id = ?', [newContent, articleId]);

        return new Response(JSON.stringify({ message: 'Article mis à jour avec succès !' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Erreur lors de la mise à jour :', error);
        return new Response(JSON.stringify({ error: 'Une erreur est survenue.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

export async function DELETE(request) {

    try {
        const adminCheck = await checkAdmin(request);
        if (adminCheck) {
            return new Response(JSON.stringify({ error: 'Accès non autorisé' }), {
                status: 403,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const { articleId } = await request.json();

        if (!articleId) {
            return new Response(JSON.stringify({ error: 'ID manquant' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const [existingArticle] = await pool.query('SELECT * FROM articles WHERE id = ?', [articleId]);
        if (!existingArticle.length) {
            return new Response(JSON.stringify({ error: 'Article non trouvé' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        await pool.query('DELETE FROM articles WHERE id = ?', [articleId]);

        return new Response(JSON.stringify({ message: 'Article supprimé avec succès !' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Erreur lors de la suppression :', error);
        return new Response(JSON.stringify({ error: 'Une erreur est survenue.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}