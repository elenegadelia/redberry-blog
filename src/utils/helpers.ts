export const extractIdFromUrl = (slug: string): number => {
  return Number(slug.split("-")[0]);
};

export const validateAuthor = (author: string): {} => {
  const georgianLettersRegex = /^[\u10A0-\u10FF]+$/;
  const errors = {
    fourSymbol: false,
    twoWords: false,
    georgianLetters: false,
  };
  const words = author.trim().split(/\s+/);

  if (words.length < 2) {
    errors.fourSymbol = true;
  }

  if (words.length < 2) {
    errors.twoWords = true;
  }

  for (const word of words) {
    if (!georgianLettersRegex.test(word) || word.length < 4) {
      errors.georgianLetters = true;
    }
  }

  return errors;
};
