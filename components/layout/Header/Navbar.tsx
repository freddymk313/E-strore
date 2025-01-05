"use client";

import { useState } from "react";
import { Input } from "../../ui/input";
import { Menu, Search, ShoppingBag, ShoppingCart } from "lucide-react"; // Icône Panier
import { navLinkHome } from "@/constants/data";
import Link from "next/link";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <header className="sticky top-0 bg-background text-foreground py-4 z-20">
      <div className="flex gap-4 lg:gap-6 items-center px-4 md:px-14 lg:px-20">
        <div className="flex items-center gap-1">
          <Menu size={24} className="text-foreground md:hidden" />
          <h1 className="text-3xl font-bold">E.Store</h1>
        </div>

        {/* Champ de recherche */}
        <div className="flex items-center space-x-6 w-full">
          <div className="relative w-full">
            <Search className="h-3.5 w-3.5 mx-2.5 absolute text-secondary-foreground left-0 top-2.5 -bottom-2" />
            <Input
              type="text"
              placeholder="Rechercher des produits"
              className="bg-secondary/60 border-none pl-8 pr-2 w-full text-xs md:text-xs text-secondary-foreground"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden md:block">
          <ul className="flex gap-3 text-sm">
            {navLinkHome.map((link, idx) => (
              <li key={idx}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Panier avec icône */}
        <div>
          <div className="relative">
            <a href="/cart" className="flex items-center space-x-2">
              <ShoppingBag size={24} className="text-foreground" />{" "}
              {/* Icône Panier */}
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
