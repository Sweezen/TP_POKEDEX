import {Pokemon} from './pokemon.models';

export interface apiObject {
  data: Pokemon[];
  offset: number;
  limit: number;
}
