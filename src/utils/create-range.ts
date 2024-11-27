export const createRange = (from: number, to: number) => {
  const length = to - from

  return new Array(length + 1).fill(0).map((element, index) => from + index)
}
