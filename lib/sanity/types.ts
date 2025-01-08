export type ProductType = {
    _id: string,
    name: string,
    productImage: {
      alt: string,
      imageUrl: string
    },
    slug: string,
    categoryName: string,
    description: string,
    price: number,
  };
  
  export type CategoryType = {
    _id: string,
    name: string,
  };
  