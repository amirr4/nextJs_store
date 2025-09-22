export interface CartItem {
  cartId: string; // unique id برای هر آیتم در cart
  id: number;     // id محصول
  title: string;
  price: number;
  image: string;
  quantity: number;
}