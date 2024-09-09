export const dataBatch: Array<IBatch> = [
  {
    name: 'Santa Elena',
    farmId: 1,
  },
  {
    name: 'Guacaipuro',
    farmId: 1,
  },
  {
    name: 'Cierra Verde',
    farmId: 1,
  },
  {
    name: 'El Carmen',
    farmId: 1,
  },
];

export interface IBatch {
  name: string;
  farmId: number;
}
