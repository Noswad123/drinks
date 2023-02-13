import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Drink extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Drink>) {
    super(data);
  }
}

export interface DrinkRelations {
  // describe navigational properties here
}

export type DrinkWithRelations = Drink & DrinkRelations;
