// TODO: Rename it to convertUnderscoreToSentenceCase and move it to string utils file
export const formatLabel = (str: string): string => {
  return str.replaceAll('_', ' ').replace(/\b\w/g, (char) => char.toUpperCase())
}
