"use client";
import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Rating from "../Rating";
import Link from "next/link";

const topProducts = [
  // Remplacez par vos données réelles de produits
  {
    id: 1,
    name: "T-shirt with Tape Details",
    gallery: ["/images/pic1.png", "/images/pic10.png", "/images/pic11.png"],
    price: "$20",
    rating: 4.0,
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    gallery: ["/images/pic2.png"],
    price: "$30",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Chechered Shirt",
    gallery: ["/images/pic3.png"],
    price: "$25",
    rating: 4.0,
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    gallery: ["/images/pic4.png"],
    price: "$40",
    rating: 4.0,
  },
  {
    id: 5,
    name: "Vertical Striped Shirt",
    gallery: ["/images/pic5.png"],
    price: "$50",
    rating: 3.5,
  },
  {
    id: 6,
    name: "Courage Graphic T-shirt",
    gallery: ["/images/pic6.png"],
    price: "$50",
    rating: 4.0,
  },
  {
    id: 7,
    name: "Loose Fit Bermuda Shorts",
    gallery: ["/images/pic7.png"],
    price: "$50",
    rating: 4.2,
  },
  {
    id: 8,
    name: "Faded Skinny Jeans",
    gallery: ["/images/pic8.png"],
    price: "$50",
    rating: 4.5,
  },
];

export default function TopProducts() {
  const containerRef = useRef(null);
  const controls = useAnimation();

  // Mouvement automatique horizontal
  useEffect(() => {
    const interval = setInterval(() => {
      // controls.start({
      //   x: [0, -containerRef?.current.scrollWidth / 2],
      //   transition: { duration: 10, repeat: Infinity, ease: "linear" },
      // });
    }, 1000);

    return () => clearInterval(interval);
  }, [controls]);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-8 bg-background text-foreground">
      <div className="px-4 md:px-14 lg:px-20">
        <h2 className="text-2xl font-bold mb-4">Top Produits</h2>

        <div className="relative ">
          {/* Bouton gauche */}
          <button
            onClick={scrollLeft}
            className="absolute top-1/2 -left-3 transform bg-primary -translate-y-1/2 text-primary-foreground p-1 rounded-full z-10 shadow-md"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Liste de produits */}
          <motion.div
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide gap-4"
            animate={controls}
          >
            {topProducts.map((product) => (
              <Link
              key={product.id}
              href={`/product/${product.id}/${product.name}`}
                className="min-w-[250px] bg-white *border *border-gray-200 rounded-lg shadow-sm p-2 md:p-3 flex-shrink-0"
              >
                <Image
                  src={product.gallery[0]}
                  alt={product.name}
                  height={500}
                  width={500}
                  className="w-full h-52 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-medium mb-2">{product.name}</h3>
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
                <p className="text-primary font-semibold">{product.price}</p>
              </Link>
            ))}
          </motion.div>

          {/* Bouton droit */}
          <button
            onClick={scrollRight}
            className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-primary text-primary-foreground p-1 rounded-full z-10 shadow-md"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
