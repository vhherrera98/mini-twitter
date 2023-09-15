export interface User {
  id: number;
  name: string;
  username?: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface Post {
  id: number;
  title: string;
  body: string;
  user: User;
  liked?: boolean;
}
