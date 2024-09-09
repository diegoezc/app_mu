export const dataOwner: Array<IOwner> = [
  {
    name: 'Santa Elena',
    phone: 'Coloncito',
    email: 'diegoezc',
    password: '123456',
  },
  {
    name: 'Guacaipuro',
    phone: 'Coloncito',
    email: 'mariaezc',
    password: '123456',
  },
  {
    name: 'Cierra Verde',
    phone: 'Rubio',
    email: 'linalcr',
    password: '123456',
  },
  {
    name: 'El Carmen',
    phone: 'Santo Domingo',
    email: 'chuchocc',
    password: '123456',
  },
];

export interface IOwner {
  name: string;
  phone: string;
  email: string;
  password: string;
}
