
export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'backpack' | 'powerbank' | 'bottle';
}

export interface SelectedBundle {
  backpack?: Product;
  powerbank?: Product;
  bottle?: Product;
}

export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  newsletter: boolean;
}
