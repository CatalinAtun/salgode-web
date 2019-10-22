export const normalizeText = text => {
  return text
    .normalize('NFD')
    .replace(
      // eslint-disable-next-line no-misleading-character-class
      /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,
      '$1'
    )
    .toLowerCase()
}
