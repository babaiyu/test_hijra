export const maxText = (txt: string, limit = 50) => {
  let result = '';

  if (txt.length < limit) result = txt;
  else result = `${txt.substring(0, limit)}...`;

  return result;
};
