export const dateCompare = (a, b) => {
  const A = a.split("/");
  const B = b.split("/");

  const strA = [A[2], A[1], A[0]].join("/");
  const strB = [B[2], B[1], B[0]].join("/");
  return strA.localeCompare(strB);
};
