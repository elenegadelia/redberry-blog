export const extractIdFromUrl = (slug: string): number => {
  return Number(slug.split("-")[0]);
};
