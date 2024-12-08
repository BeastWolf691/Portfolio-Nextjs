//permet de vérifier que la personne est admin
import {getSession} from '../../../lib/session';

export async function checkAdmin(request) {
    const session = await getSession(request);
    if (!session || !session.isAdmin) {
        return new Response(JSON.stringify({ error: 'Accès non autorisé' }), { status: 403 });
    }
    return null;
}