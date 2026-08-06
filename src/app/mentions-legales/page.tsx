export default function MentionsLegales() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="font-mono text-3xl font-bold mb-8">Mentions légales</h1>
      
      <div className="space-y-6 text-gray-300">
        <div>
          <h2 className="font-mono text-xl font-bold text-blue-400 mb-2">Éditeur du site</h2>
          <p>Ulrich Tchiem</p>
          <p>Douala, Cameroun</p>
          <p>Email : contact@emperorcloud.io</p>
        </div>

        <div>
          <h2 className="font-mono text-xl font-bold text-blue-400 mb-2">Hébergement</h2>
          <p>Ce site est hébergé par Vercel Inc.</p>
          <p>340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
        </div>

        <div>
          <h2 className="font-mono text-xl font-bold text-blue-400 mb-2">Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus de ce site (textes, images, schémas, logos) 
            est la propriété exclusive de Ulrich Tchiem, sauf mention contraire.
          </p>
          <p className="mt-2">
            Toute reproduction, même partielle, est interdite sans autorisation préalable.
          </p>
        </div>

        <div>
          <h2 className="font-mono text-xl font-bold text-blue-400 mb-2">Données personnelles</h2>
          <p>
            Ce site ne collecte aucune donnée personnelle sans consentement explicite.
            Les données envoyées via le formulaire de contact sont utilisées uniquement 
            pour répondre à votre demande.
          </p>
        </div>

        <div className="mt-8 p-4 bg-[#0d1321] border border-gray-800 rounded-lg">
          <p className="text-sm text-gray-500">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      </div>
    </section>
  );
}