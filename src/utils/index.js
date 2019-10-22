const rutFormat = value => {
  const rut = value
    .replace(/\s/g, '')
    .replace(/\./g, '')
    .replace(/-/g, '')
  const sRut1 = rut //contador de para saber cuando insertar el . o la -
  let nPos = 0 //Guarda el rut invertido con los puntos y el guión agregado
  let sInverted = '' //Guarda el resultado final del rut como debe ser
  let sRut = ''
  for (let i = sRut1.length - 1; i >= 0; i--) {
    sInverted += sRut1.charAt(i)
    if (i === sRut1.length - 1) {
      sInverted += '-'
    } else if (nPos === 3) {
      sInverted += '.'
      nPos = 0
    }
    nPos++
  }
  for (let j = sInverted.length - 1; j >= 0; j--) {
    if (sInverted.charAt(sInverted.length - 1) !== '.')
      sRut += sInverted.charAt(j)
    else if (j !== sInverted.length - 1) sRut += sInverted.charAt(j)
  }
  //Pasamos al campo el valor formateado
  return sRut.toUpperCase()
}

const rutValidation = rutInput => {
  // FORMAT
  const rut = rutInput
    .replace(/\s/g, '')
    .replace(/\./g, '')
    .replace(/-/g, '')
  const body = rut.slice(0, -1)
  let dv = rut.slice(-1).toUpperCase()
  // Compute
  let sum = 0
  let multiple = 2
  // For every digit
  for (let i = 1; i <= body.length; i++) {
    // Get product
    const index = multiple * rut.charAt(body.length - i)
    // add to count
    sum = sum + index
    // In range [2,7]
    if (multiple < 7) {
      multiple = multiple + 1
    } else {
      multiple = 2
    }
  }
  // Division Remainder
  const dvComputed = 11 - (sum % 11)
  // (0 & K)
  dv = dv === 'K' ? 10 : dv
  dv = dv === '0' ? 11 : dv
  // Is valid?
  if (`${dvComputed}` !== `${dv}`) {
    return false
  }
  return true
}

const isValid = rut => {
  const ret =
    (/^\d{1,2}\.?\d{3}\.?\d{3}[-]?[0-9kK]{1} *$/i.test(rut) ||
      /^\d{1,2}\.\d{3}\.\d{3}[-]?[0-9kK]{1} *$/i.test(rut)) &&
    rutValidation(rutFormat(rut))
  return ret
}

const isPhone = () => {
  if (window.outerWidth <= 768 || window.outerHeight >= 1366) {
    return true
  }
  return false
}

const openBases = () => {
  window.open('/public/bases.pdf')
}

export { rutValidation, rutFormat, isValid, isPhone, openBases }
