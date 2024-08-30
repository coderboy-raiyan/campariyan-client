export type TProductReviews = {
  ratings: number;
  totalRatings: number;
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
  categories: any;
  isDeleted: boolean;
};
