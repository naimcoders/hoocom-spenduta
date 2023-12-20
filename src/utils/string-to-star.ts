export const stringToStars = (strValue: string): string => {
  const lengthMinusOne = strValue.length - 1
  const replacedStr = strValue.substring(1, lengthMinusOne).replace(/./g, '*')
  const fixedStr = `${strValue[0]}${replacedStr}${strValue[lengthMinusOne]}`
  return fixedStr
}