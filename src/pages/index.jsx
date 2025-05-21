import React from 'react';

export default function Portfolio() {
  return (
    <main className="p-6 space-y-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Portfolio - Junior MBA</h1>
        <p className="text-lg text-gray-600 mt-2">Bienvenue sur mon portfolio déployé avec Vite et React !</p>
      </header>

      <section className="max-w-3xl mx-auto text-center py-6">
        <h2 className="text-3xl font-bold mb-2">👨‍💻 À propos</h2>
        <p>
          Étudiant passionné par l’aéronautique et les systèmes embarqués, je conçois des solutions innovantes à
          l’interface entre matériel et logiciel. Ce portfolio présente quelques-uns de mes projets et compétences.
        </p>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-10">
        © 2025 Junior MBA – Tous droits réservés.
      </footer>
    </main>
  );
}
