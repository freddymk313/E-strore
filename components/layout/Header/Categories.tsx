"use client"
import { categories } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Categories() {
  const pathname = usePathname(); // Récupère le chemin actuel

  return (
    <div className="sticky top-16 bg-background border-t border-secondary shadow-md transition z-20">
      <div className="px-4 md:px-14 lg:px-20 overflow-x-auto scrollbar-hide">
        <ul className="flex space-x-6">
          {categories.map((category, index) => {
            const isActive =
              (category === "Tous" && pathname === "/") || // Active pour la page principale
              pathname.includes(category.toLowerCase()); // Active pour les autres pages

            return (
              <li
                key={index}
                className={`text-foreground py-6 text-sm ${
                  isActive ? "border-b-[2px] border-primary font-semibold" : ""
                }`}
              >
                <Link href={`/${category === "Tous" ? "" : category.toLowerCase()}`}>
                  {category}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
