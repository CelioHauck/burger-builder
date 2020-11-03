export default interface Customer {
  name: string;
  address: Address;
  email: string;
}

interface Address {
  street: string;
  zipCode: string;
  country: string;
}
