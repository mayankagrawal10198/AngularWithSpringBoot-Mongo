export interface cartItemInterface {
    productName: string;
    productID: string;
    productCount: number;
    productPrice: number;
    isFavorite: boolean;
}

export interface productDetails {
    basic: cartItemInterface;
    description: string;
    rating: number;
}
