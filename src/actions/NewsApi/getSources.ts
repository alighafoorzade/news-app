"use server";

import { BASE_URL } from '@/constants/apis';
import newsApiFetch from './fetch';

const endpoint = `${BASE_URL}/sources`;

async function getSources() {
  const res = await newsApiFetch(endpoint);
  if (res.ok) return { ...(await res.json()), ok: true };
  else {
    return { ...(await res.json()), ok: false };
  }
}

export default getSources;
