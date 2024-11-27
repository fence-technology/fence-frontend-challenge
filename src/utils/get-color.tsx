const NEUTRAL_COLORS = [
  '#FF5733',
  '#33FF57',
  '#3357FF',
  '#FF33A1',
  '#FFBD33',
  '#33FFF0',
  '#8A33FF',
  '#FF3333',
  '#33FFBD',
  '#FF5733',
  '#A8A8A8',
  '#D3D3D3',
  '#BEBEBE',
  '#E0E0E0',
  '#C0C0C0',
  '#F5F5F5',
  '#D2B48C',
  '#B0C4DE',
  '#A9A9A9',
  '#778899',
  '#DCDCDC',
  '#F0E68C',
  '#800000',
  '#FF4500',
  '#2E8B57',
  '#4682B4',
  '#D2691E',
  '#9ACD32'
]

const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

export const getRandomColor = (index: number): string => {
  const seed = index + 1
  const randomIndex = Math.floor(seededRandom(seed) * NEUTRAL_COLORS.length)
  return NEUTRAL_COLORS[randomIndex]
}

export const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
