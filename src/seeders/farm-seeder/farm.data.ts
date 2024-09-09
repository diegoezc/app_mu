export const dataFarm: Array<IFarm> = [
  {
    name: 'Santa Elena',
    sector: 'Coloncito',
    hectareas: 250,
  },
  {
    name: 'Guacaipuro',
    sector: 'Coloncito',
    hectareas: 270,
  },
  {
    name: 'Cierra Verde',
    sector: 'Rubio',
    hectareas: 9,
  },
  {
    name: 'El Carmen',
    sector: 'Santo Domingo',
    hectareas: 280,
  },
];

export interface IFarm {
  name: string;
  sector: string;
  hectareas: number;
}
