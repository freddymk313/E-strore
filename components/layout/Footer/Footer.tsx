import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-200 py-8">
      <div className="px-4 md:px-14 lg:px-20">
        {/* Section supérieure */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
          {/* À propos */}
          <div>
            <h4 className="font-semibold mb-4">À propos</h4>
            <p className="text-sm text-muted-foreground">
              Découvrez les meilleurs produits à des prix compétitifs. Nous nous engageons à offrir la meilleure expérience d'achat en ligne.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:underline">
                  À propos de nous
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:underline">
                  Boutique
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contactez-nous
                </a>
              </li>
            </ul>
          </div>

          {/* Assistance */}
          <div>
            <h4 className="font-semibold mb-4">Assistance</h4>
            <ul className="space-y-2">
              <li>
                <a href="/shipping" className="hover:underline">
                  Politique de livraison
                </a>
              </li>
              <li>
                <a href="/returns" className="hover:underline">
                  Retours et remboursements
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Abonnez-vous pour recevoir nos dernières offres et nouveautés.
            </p>
            <form className="flex items-center space-x-2">
              <Input
                type="email"
                placeholder="Votre email"
                className="*bg-gray-200 text-xs"
              />
              <Button
                type="submit"
                className="bg-background text-primary"
              >
                S'abonner
              </Button>
            </form>
          </div>
        </div>

        {/* Section inférieure */}
        <div className="mt-8 border-t pt-10 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 E.store. Tous droits réservés.</p>
          <p className="mt-2">
            Développé par{" "}
            <a href="https://freddymk-portfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Freddymk
            </a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
