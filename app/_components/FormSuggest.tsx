"use client";
import React, { useState } from "react";

//vérification adresse mail valide 
const emailGood = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

//vérification des noms et prénoms
const nameGood = (name: string) => {
    const regex = /^[a-zA-ZÀ-ÿ\s-]+$/;
    return regex.test(name);
};

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        message: '',
    });

    //on affiche les messages d'erreur
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setError('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // on vérifie si les champs sont valides
        if (!formData.firstname || !formData.lastname || !formData.email || !formData.message) {
            setError('Veuillez remplir tous les champs');
            return;
        }

        // Vérification prénom
        if (!nameGood(formData.firstname)) {
            setError('Le prénom ne doit contenir que des lettres, espaces ou tirets.');
            return;
        }

        // Vérification nom
        if (!nameGood(formData.lastname)) {
            setError('Le nom ne doit contenir que des lettres, espaces ou tirets.');
            return;
        }

        // Vérification email
        if (!emailGood(formData.email)) {
            setError('Veuillez entrer une adresse email valide');
            return; 
        }

        // Vérification message
        if (formData.message.length < 10) {
            setError('Votre message doit contenir au moins 10 caractères');
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (response.ok) {
                alert(result.message);
                setFormData({
                    firstname: '',
                    lastname: '',
                    email: '',
                    message: '',
                })
            } else {
                alert(result.error);
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données', error);
            alert('Une erreur est survenue');
        }
    };

    return (
        <div className="flex justify-center">
            <form
                onSubmit={handleSubmit}
                className="bg-accent/10 text-card p-6 flex flex-col gap-2 rounded shadow-md space-y-4 w-full max-w-md "
            >
                <p className="text-muted-foreground text-center text-md">
                    Vous avez des suggestions d'amélioration pour ce portfolio ?
                    <br />
                    <span className="text-muted-foreground">Remplissez ce formulaire !</span>
                </p>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <div>
                    <label htmlFor="firstname" className="text-muted-foreground block text-sm font-medium">
                        Prénom
                    </label>
                    <input
                        id="firstname"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                        type="text"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastname" className="text-muted-foreground block text-sm font-medium">
                        Nom
                    </label>
                    <input
                        id="lastname"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="text-muted-foreground block text-sm font-medium">
                        Adresse e-mail
                    </label>
                    <input
                        id="email"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="text-muted-foreground block text-sm font-medium">
                        Message
                    </label>
                    <textarea
                        id="message"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-900 hover:bg-darkblue-800 text-white rounded-md py-2"
                >
                    Envoyer
                </button>
            </form>
        </div>
    );
};
