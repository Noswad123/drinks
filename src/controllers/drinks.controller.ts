// import {inject} from '@loopback/core';
import {get} from '@loopback/rest';


export class DrinksController {
  constructor() {}

  @get('/drinks', {
    responses: {
      '200': {
        description: 'a list of drinks',
        content: {
          'application/json': {
            schema: {
              type: 'string'
            }
          }
        }
      }
    }
  })
  async getDrinks():Promise<String> {
    return 'martini';
  }
}
