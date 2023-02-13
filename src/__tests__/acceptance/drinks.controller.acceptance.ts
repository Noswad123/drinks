import {Client, expect} from '@loopback/testlab';
import {DrinksApplication} from '../..';
import {setupApplication} from './test-helper';

describe('DrinksController', () => {
  let app: DrinksApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('invokes GET /drinks', async () => {
    const res = await client.get('/drinks').expect(200);
    expect(res.text).to.equal('martini');
  });
});
