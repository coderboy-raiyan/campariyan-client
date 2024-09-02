export type TProductReviews = {
  ratings: number;
  totalRatings: number;
};

export type TCategory = {
  name: string;
  slug: string;
  _id: string;
};

export type TProduct = {
  _id: string;
  name: string;
  description: string;
  color?: string;
  brand: string;
  returnDays?: number;
  images: {
    secure_url: string;
    public_id: string;
  }[];
  reviews: TProductReviews;
  price: number;
  stock: number;
  categories: TCategory[];
  isDeleted: boolean;
};

export type TCart = Partial<TProduct> & { quantity: number };
