import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct";

export default function ProductDetail({
  params,
}: {
  params: { slug: string[] };
}) {
  return (
    <div className="py-8 bg-background text-foreground">
      <BreadcrumbProduct title="Dresse" />
      <div className="px-4 md:px-14 lg:px-20 flex flex-col lg:flex-row gap-8">
        {/* Section gauche : Images du produit */}
        <div className="flex-1">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/images/pic3.png"
              alt="Product"
              width={550}
              height={550}
              className="w-full h-82 object-cover"
            />
          </div>
          <div className="flex space-x-4 mt-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className={`border-[1.95px] rounded-lg w-20 h-20 overflow-hidden cursor-pointer ${
                  index == 0 ? "border-primary" : "border-gray-100"
                }`}
              >
                <Image
                  src="/images/pic3.png"
                  alt="Thumbnail"
                  width={550}
                  height={550}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Section droite : Détails du produit */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-foreground">
            Shoes Reebok Zig Kinetica 3
          </h1>
          <p className="text-sm text-muted-foreground mt-2">42 avis • Reebok</p>

          {/* Prix */}
          <p className="text-3xl font-bold text-foreground my-4">$199.00</p>

          <p className="text-sm sm:text-base text-black/60 mt-4">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Couleur */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-secondary-foreground">
              Couleur : <span className="font-normal">Blanc</span>
            </h3>
            <div className="flex space-x-4 mt-2">
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-full border border-border cursor-pointer"
                  style={{ backgroundColor: index === 0 ? "#f0f0f0" : "#333" }}
                ></div>
              ))}
            </div>
          </div>

          {/* Taille */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-secondary-foreground">
              Taille :
            </h3>
            <div className="flex space-x-4 mt-2">
              {["40.5", "41", "42", "43", "44", "45"].map((size, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 border rounded-lg text-sm ${
                    size === "41"
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-secondary-foreground"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Ajouter au panier */}
          <div className="mt-8 flex items-center space-x-4">
            <Button className="flex-1 rounded-lg *hover:bg-opacity-90">
              Ajouter au panier
            </Button>
            {/* <button className="w-12 h-12 border rounded-lg flex items-center justify-center">
              ❤️
            </button> */}
          </div>

          {/* Livraison */}
          <p className="text-sm text-muted-foreground mt-4">
            Livraison gratuite sur les commandes de plus de $30.00
          </p>
        </div>
      </div>
    </div>
  );
}
