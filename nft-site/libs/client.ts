import { createClient } from 'microcms-js-sdk';
export const client = createClient({
  serviceDomain: 'blockchain-app',
  apiKey: process.env.API_KEY || ''
});
