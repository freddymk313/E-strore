"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Rating from "../Rating";

interface Product {
  id: number;
  name: string;
  gallery: string[];
  price: string;
  rating: number;
  category: string;
}

// Exemple de données, à remplacer par une requête dynamique vers votre API ou votre base de données
// const sampleProducts: Product[] = [
//   {
//     id: 1,
//     name: "Produit 1",
//     category: "Catégorie 1",
//     image: "/product1.jpg",
//     price: "$20",
//   },
//   {
//     id: 2,
//     name: "Produit 2",
//     category: "Catégorie 2",
//     image: "/product2.jpg",
//     price: "$30",
//   },
//   {
//     id: 3,
//     name: "Produit 3",
//     category: "Catégorie 1",
//     image: "/product3.jpg",
//     price: "$25",
//   },
//   {
//     id: 4,
//     name: "Produit 4",
//     category: "Catégorie 3",
//     image: "/product4.jpg",
//     price: "$40",
//   },
//   {
//     id: 5,
//     name: "Produit 5",
//     category: "Catégorie 2",
//     image: "/product5.jpg",
//     price: "$50",
//   },
//   {
//     id: 6,
//     name: "Produit 6",
//     category: "Catégorie 1",
//     image: "/product6.jpg",
//     price: "$35",
//   },
//   {
//     id: 7,
//     name: "Produit 7",
//     category: "Catégorie 3",
//     image: "/product7.jpg",
//     price: "$45",
//   },
//   {
//     id: 8,
//     name: "Produit 8",
//     category: "Catégorie 2",
//     image: "/product8.jpg",
//     price: "$55",
//   },
//   {
//     id: 9,
//     name: "Produit 9",
//     category: "Catégorie 1",
//     image: "/product9.jpg",
//     price: "$60",
//   },
//   {
//     id: 10,
//     name: "Produit 10",
//     category: "Catégorie 3",
//     image: "/product10.jpg",
//     price: "$65",
//   },
// ];

const sampleProducts = [
  // Remplacez par vos données réelles de produits
  {
    id: 1,
    name: "T-shirt with Tape Details",
    gallery: ["/images/pic1.png", "/images/pic10.png", "/images/pic11.png"],
    price: "$20",
    rating: 4.0,
    category: "Vetements",
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    gallery: ["/images/pic2.png"],
    price: "$30",
    rating: 4.5,
    category: "Vetements",
  },
  {
    id: 3,
    name: "Chechered Shirt",
    gallery: ["/images/pic3.png"],
    price: "$25",
    rating: 4.0,
    category: "Vetements",
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    gallery: ["/images/pic4.png"],
    price: "$40",
    rating: 4.0,
    category: "Vetements",
  },
  {
    id: 5,
    name: "Vertical Striped Shirt",
    gallery: ["/images/pic5.png"],
    price: "$50",
    rating: 3.5,
    category: "Vetements",
  },
  {
    id: 6,
    name: "Courage Graphic T-shirt",
    gallery: ["/images/pic6.png"],
    price: "$50",
    rating: 4.0,
    category: "Vetements",
  },
  {
    id: 7,
    name: "Loose Fit Bermuda Shorts",
    gallery: ["/images/pic7.png"],
    price: "$50",
    rating: 4.2,
    category: "Vetements",
  },
  {
    id: 8,
    name: "Faded Skinny Jeans",
    gallery: ["/images/pic8.png"],
    price: "$50",
    rating: 4.5,
    category: "Vetements",
  },
];

export default function ProductsSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const categories = [
    ...new Set(sampleProducts.map((product) => product.category)),
  ];

  useEffect(() => {
    // Remplacez cette logique par un fetch dynamique depuis une API
    setProducts(sampleProducts);
  }, []);

  return (
    <section className="py-8 bg-background text-foreground">
      <div className="px-4 md:px-14 lg:px-20">
        <h2 className="text-2xl font-bold mb-6">Produits par catégorie</h2>

        {categories.map((category) => {
          const categoryProducts = products
            .filter((product) => product.category === category)
            .slice(0, 8);

          return (
            <div key={category} className="mb-10">
              <div className="flex gap-x-4 items-center mb-4">
                <h3 className="text-xl font-semibold">{category}</h3>
                <div className="border-b w-[80%] border-secondary"></div>
                <Link
                  href={`/category/${category.toLowerCase()}`}
                  className="flex items-center"
                >
                  <span className="text-primary flex justify-end text-sm hover:underline">
                    Tous
                  </span>
                  <ChevronRight size={18} />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {categoryProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}/${product.name}`}
                    className="bg-white rounded-lg shadow-sm p-3"
                  >
                    <Image
                      src={product.gallery[0]}
                      alt={product.name}
                      width={800}
                      height={800}
                      className="w-full h-80 md:h-52 object-cover rounded-md mb-4"
                    />
                    <h4 className="text-lg font-medium mb-2">{product.name}</h4>
                    <div className="flex items-end mb-1 xl:mb-2">
                      <Rating
                        initialValue={product.rating}
                        allowFraction
                        SVGclassName="inline-block"
                        emptyClassName="fill-gray-50"
                        size={18}
                        readonly
                      />
                      <span className="text-black text-xs xl:text-sm ml-[11px] xl:ml-[13px] pb-0.5 xl:pb-0">
                        {product.rating.toFixed(1)}
                        <span className="text-black/60">/5</span>
                      </span>
                    </div>
                    <p className="text-primary font-semibold">
                      {product.price}
                    </p>
                  </Link>
                ))}
              </div>

              <div className="flex items-center justify-center mt-10">
                <Link
                  href={`/category/${category.toLowerCase()}`}
                  className="flex items-center border transition border-gray-300 rounded-lg py-2.5 px-4 group hover:bg-primary"
                >
                  {/* <button> */}
                  <span className="text-primary group-hover:text-white block text-sm mr-1.5">
                    Voir Tous
                  </span>
                  <ChevronRight size={16} className=" group-hover:text-white" />
                  {/* </button> */}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
