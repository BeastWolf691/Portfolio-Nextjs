import cookieSession from 'cookie-session';

// Configuration du middleware avec cookie-session
export function sessionMiddleware(req, res, next) {
  return cookieSession({
    name: 'session',
    secret: process.env.COOKIE_SECRET,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  })(req, res, next);
}

// Fonction pour récupérer la session
export async function getSession(req) {
  return req.session; // Retourne l'objet session actuel
}
