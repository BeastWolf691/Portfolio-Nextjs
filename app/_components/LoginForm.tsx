'use client';
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Tentative de connexion :', username, password);


        try {
            const response = await fetch("api/routes/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Redirection après connexion réussie
                router.push("/");
            } else {
                setError(data.error || "Échec de la connexion");
            }
        } catch (error) {
            console.error("Erreur lors de la connexion :", error);
            setError("Erreur serveur");
        }
    };
    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md p-4 rounded-md">
            <h2 className="text-lg font-semibold mb-3">Connexion à votre compte</h2>

            <label className="block mb-2">Nom d'utilisateur</label>
            <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label className="block">Mot de passe</label>
            <input
                type="password"
                className="border p-2 mb-3 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button className="bg-blue-500 px-3 py-2 text-white rounded-md" type="submit">
                Se connecter
            </button>
        </form>
    );
};
