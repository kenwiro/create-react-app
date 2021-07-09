type Address = {
  city: string,
  geo: {
    lat: string,
    lng: string
  },
  street: string,
  suite: string,
  zipcode: string
};

type Company = {
  bs: string,
  catchPhrase: string,
  name: string
};

export type User = {
  id: number,
  address: Address,
  company: Company,
  email: string,
  name: string,
  phone: string,
  username: string,
  website: string
};
