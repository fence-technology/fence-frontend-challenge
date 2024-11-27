export const removeEmptyProperties = (
  obj: Record<string, any>
): Record<string, any> => {
  return Object.entries(obj).reduce(
    (acc, [key, value]) => {
      if (value !== '' && !(Array.isArray(value) && value.length === 0)) {
        acc[key] = value
      }
      return acc
    },
    {} as Record<string, any>
  )
}
