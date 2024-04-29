export const objectToCommaSeparatedArrays = (obj: Record<string,Array<any>|number| string>) => {
    const flattedFilters: Record<string, any> = {};
    Object.keys(obj).map((key) => {
      if (Array.isArray(obj[key])) {
        const flattedFilter = arrayToCommaSeparatedString(obj[key] as any[]);
        flattedFilters[key] = flattedFilter;
      } else {
        flattedFilters[key] = obj[key];
      }
    });
    return flattedFilters
}
export const arrayToCommaSeparatedString = (arr:Array<any>) => {
    return arr.join(',')
}