export interface cartItemInterface {
  productName: string;
  productID: string;
  productCount: number;
  productPrice: number;
  isFavorite: boolean;
}

export interface productDetails {
  itemId: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  dimensions: string;
  brand: string;
  tags: string[];
  price: number;
  pics: Array<imageInfoBack>;
}

export interface imageInfo {
  image: string;
  thumbImage: string;
  title: string;
}

export interface imageInfoBack {
  image: binaryDetails;
  thumbImage: binaryDetails;
  title: string;
}

export interface binaryDetails {
  type: number;
  data: string;
}
