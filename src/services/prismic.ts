import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';

export function getPrismicClient(req?: unknown): DefaultClient {
  const prismic = Prismic.client(process.env.PRISMIC_API_ENDPOINT, {
    req,
  });

  return prismic;
}

// Não esquecer de pegar as chaves aqui e colocar no .env.local
// PRISMIC_API_ENDPOINT=https://spacetravel.cdn.prismic.io/api/v2
// PRISMIC_ACCESS_TOKEN=MC5ZR1V6VmhJQUFDSUFTcFFK.77-9OGrvv703VwPvv70Q77-977-977-977-9HDjvv73vv70iJyHvv73vv73vv70s77-977-977-9Ee-_ve-_ve-_ve-_vQ
