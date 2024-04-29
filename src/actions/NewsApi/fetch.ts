const newsApiFetch = (input: URL | RequestInfo, init?: RequestInit | undefined): Promise<Response> => {   
    return fetch(input, {
      ...init,
      headers: {
        Authorization: `${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
      },
    });
}

export default newsApiFetch;