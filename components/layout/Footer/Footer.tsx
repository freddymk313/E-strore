import { cn } from "@/lib/utils";
// import { integralCF } from "@/styles/fonts";
import React from "react";
// import { PaymentBadge, SocialNetworks } from "./footer.types";
import { Facebook, Github, Instagram, X } from "lucide-react";
import Link from "next/link";
import LinksSection from "./LinksSection";
import Image from "next/image";
// import NewsLetterSection from "./NewsLetterSection";
import LayoutSpacing from "./LayoutSpacing";

const socialsData = [
  {
    id: 1,
    icon: <X />,
    url: "https://twitter.com",
  },
  {
    id: 2,
    icon: <Facebook />,
    url: "https://facebook.com",
  },
  {
    id: 3,
    icon: <Instagram />,
    url: "https://instagram.com",
  },
  {
    id: 4,
    icon: <Github />,
    url: "https://github.com/mohammadoftadeh",
  },
];

const paymentBadgesData = [
  {
    id: 1,
    srcUrl: "/icons/Visa.svg",
  },
  {
    id: 2,
    srcUrl: "/icons/mastercard.svg",
  },
  {
    id: 3,
    srcUrl: "/icons/paypal.svg",
  },
  {
    id: 4,
    srcUrl: "/icons/applePay.svg",
  },
  {
    id: 5,
    srcUrl: "/icons/googlePay.svg",
  },
];

const Footer = () => {
  return (
    <footer className="mt-10">
      {/* <div className="relative">
        <div className="absolute bottom-0 w-full h-1/2 bg-[#F0F0F0]"></div>
        <div className="px-4">
         
        </div>
      </div> */}
      <div className="pt-8 md:pt-[50px] bg-primary pb-2">
        <div className="max-w-frame mx-auto px-4 md:px-14 lg:px-20">
          <nav className="lg:grid lg:grid-cols-12 mb-8">
            <div className="flex flex-col lg:col-span-3 lg:max-w-[248px]">
              <h1
                className={cn([
                  // integralCF.className,
                  "text-[28px] lg:text-[32px] mb-6 text-primary-foreground",
                ])}
              >
                E.STORE
              </h1>
              <p className="text-primary-foreground/60 text-sm mb-9">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="flex items-center">
                {socialsData.map((social) => (
                  <Link
                    href={social.url}
                    key={social.id}
                    className="bg-primary-foreground hover:bg-foreground hover:text-primary-foreground transition-all mr-3 w-7 h-7 rounded-full border border-primary-foreground/20 hover:border-primary-foreground/80 flex items-center justify-center p-1.5"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden lg:grid col-span-9 lg:grid-cols-4 lg:pl-10">
              <LinksSection />
            </div>
            <div className="grid lg:hidden grid-cols-2 sm:grid-cols-4">
              <LinksSection />
            </div>
          </nav>

          <hr className="h-[1px] border-t-primary-foreground/10 mb-6" />
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-2">
            <p className="text-sm text-center sm:text-left text-primary-foreground/60 mb-4 sm:mb-0 sm:mr-1">
              E.store. &copy; 2024 Tous droits réservés. Concu par{" "}
              <Link
                href="https://freddymk-portfolio.vercel.app"
                className="text-primary-foreground font-medium"
              >
                Freddymk
              </Link>
            </p>
            <div className="flex items-center">
              {paymentBadgesData.map((badge, _, arr) => (
                <span
                  key={badge.id}
                  className={cn([
                    arr.length !== badge.id && "mr-3",
                    "w-[46px] h-[30px] rounded-[5px] border-[#D6DCE5] bg-white flex items-center justify-center",
                  ])}
                >
                  <Image
                    priority
                    src={badge.srcUrl}
                    width={33}
                    height={100}
                    alt="user"
                    className="max-h-[15px]"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
        <LayoutSpacing />
      </div>
    </footer>
  );
};

export default Footer;
