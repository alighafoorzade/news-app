"use server";

import { BASE_URL } from "@/constants/apis";
import newsApiFetch from "./fetch";

const endpoint = `${BASE_URL}/everything`;

async function getTopHeadLines(input: any) {
  const params = new URLSearchParams({
    ...input
  });
  const url = endpoint + "?" + params.toString();
  const res = await newsApiFetch(url);
  console.log(res);
  if (res.ok) return { ...(await res.json()), ok: true };
  else {
    return { ...(await res.json()), ok: false };
  }
}

export default getTopHeadLines;
