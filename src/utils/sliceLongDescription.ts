export const sliceLongDescriptin = (descr: string, letters: number) => {
  const description = descr.length > letters ? descr.slice(0, letters) + "..." : descr;

  return description;
}