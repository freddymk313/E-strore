"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCategories } from "@/lib/sanity/category-query"; // Assurez-vous que le chemin correspond à votre projet
import { CategoryType } from "@/lib/sanity/types";
// import { CategoryType } from "@/types"; // Assurez-vous que votre type est correctement défini

export default function Categories() {
  const [categories, setCategories] = useState<CategoryType[]>([]); // State pour les catégories
  const pathname = usePathname();

  useEffect(() => {
    async function fetchCategories() {
      try {
        // Récupération des catégories depuis Sanity
        const allCategories: CategoryType[] = await getCategories();
        // Ajout de la catégorie "Tous" en première position
        setCategories([
          { _id: "all", name: "Tous", slug: "" }, // Catégorie "Tous" pour le lien principal
          ...allCategories,
        ]);
      } catch (error) {
        console.error("Erreur lors du chargement des catégories :", error);
      }
    }

    fetchCategories();
  }, []);

  return (
    <div className="sticky top-16 bg-background border-t border-secondary shadow-md transition z-20">
      <div className="px-4 md:px-14 lg:px-20 overflow-x-auto scrollbar-hide">
        <ul className="flex space-x-6">
          {categories.map((category) => {
            const isActive =
              (category.slug === "" && pathname === "/") || // Actif pour la page principale
              pathname.includes(category.slug); // Actif pour les autres catégories

            return (
              <li
                key={category._id}
                className={`text-foreground py-6 text-sm ${
                  isActive ? "border-b-[2px] border-primary font-semibold" : ""
                }`}
              >
                <Link href={`/${category.slug}`}>{category.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
