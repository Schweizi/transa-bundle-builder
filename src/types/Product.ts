
export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'backpack' | 'powerbank' | 'bottle';
}

export interface Vote {
  productId: string;
  productName: string;
  category: 'backpack' | 'powerbank' | 'bottle';
  vote: 'yes' | 'no';
}

export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  newsletter: boolean;
}
