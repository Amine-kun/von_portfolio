import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '6wlrnv0x',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skG2PSLNUkW0ac0oxq7cuVWg0GAmnh1U1FWq0M9n1zKevWOS3zJx7wUyzlE5oSDHClDtUsyg3XwG90TztlbDh2WlROOb6jDataMJynrmGyUm9id1W9Hk4ZD82Zci0pjBKvbnZyb5bEXxjVspjyyPbTaa6Ne5GK4U1f25zw6z6cXB3h9R0zAw',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);