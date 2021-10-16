export const headers = [
  "You're new grandparents! Your wonderful grandchildren will call you:",
  "You've always wanted to be:",
  'The best grandparents in the world are:',
  'Hey everyone, we are now known as:',
]

export function getHeader() {
  return headers[getIndFromArray(headers)]
}

const gpaNames = [
  'gpa',
  'gramps',
  'papa',
  'apa',
  'jim',
  'theodore',
  'big papa',
  'big daddy',
  'big paw',
  'paw paw',
  'pops',
  'poppy',
  'bumpy',
  'boppa',
  'ace',
  'boss',
  'bubba',
  'buck',
  'buddy',
  'buzzy',
  'captain',
  'champ',
  'chief',
  'coach',
  'duke',
  'granite',
  'king',
  'papi',
  'papadaddy',
  'papster',
  'pepe',
  'skippy',
  'skip',
  'skipper',
  'rocky',
  'popz',
]

const gmaNames = [
  'gma',
  'grams',
  'nana',
  'ana',
  'ama',
  'gretchen',
  'sally',
  'marmie',
  'mammie',
  'gams',
  'gamma',
  'memaw',
  'sassy',
  'lolly',
  'big mamma',
  'queenie',
  'bambi',
  'coco',
  'maymay',
  'kitty',
  'gogo',
  'gabby',
  'bunny',
  'poppy',
]

const termsOfEndearment = [
  'sugar',
  'noodles',
  'cuddles',
  'kooky',
  'muffin',
  'nutterbutter',
  'loop',
  'goop',
  'grump',
  'frump',
  'lump',
  'bump',
  'clump',
  'stump',
  'stumpy',
  'neff',
  'fluffy',
  'puffy',
  'stuffy',
  'nuft',
  'tuft',
  'hackles',
  'trump',
]

export function getRandomNames(){

  const numGmaNames = Math.floor(Math.random()  * 3) + 1
  const gma1 = getIndFromArray(gmaNames)
  const gma2 = getIndFromArray(termsOfEndearment)
  const gma3 = getIndFromArray(termsOfEndearment)

  const numGpaNames = Math.floor(Math.random()  * 3) + 1
  const gpa1 = getIndFromArray(gpaNames)
  const gpa2 = getIndFromArray(termsOfEndearment)
  const gpa3 = getIndFromArray(termsOfEndearment)

  const encoded = getEncodedString(numGmaNames, gma1, gma2, gma3, numGpaNames,gpa1,gpa2,gpa3)

  const gmaName = getGmaName(numGmaNames, gma1, gma2, gma3)
  const gpaName = getGpaName(numGpaNames, gpa1, gpa2, gpa3)
  return [gmaName, gpaName, encoded]
}

export function getGmaName(numNames, gma1,gma2,gma3) {

  if (numNames === 1){
    return gmaNames[gma1]
  }

  const name1 = termsOfEndearment[gma2]
  if (numNames === 2){
    return `grandma ${name1}`
  }

  const name2 = termsOfEndearment[gma3]
  if (numNames === 3){
    return `grandma ${name1} ${name2}`
  }
}

export function getGpaName(numNames, gpa1,gpa2,gpa3) {

  if (numNames === 1){
    return gpaNames[gpa1]
  }

  const name1 = termsOfEndearment[gpa2]
  if (numNames === 2){
    return `grandpa ${name1}`
  }

  const name2 = termsOfEndearment[gpa3]
  if (numNames === 3){
    return `grandpa ${name1} ${name2}`
  }
}


function getIndFromArray(arr) {
  return Math.floor(Math.random() * arr.length)
}

function getEncodedString(numGmaNames, gma1, gma2, gma3, numGpaNames,gpa1,gpa2,gpa3) {
return [
    ntos(numGmaNames),
    ntos(gma1),
    ntos(gma2),
    ntos(gma3),
    ntos(numGpaNames),
    ntos(gpa1),
    ntos(gpa2),
    ntos(gpa3)
  ].join('o')
}

export function decodeString(encoded){
  const [a, b, c, d, e, f,g,h] = encoded.split('o')

    const numGmaNames = ston(a)
    const gma1 = ston(b)
    const gma2 = ston(c)
    const gma3 = ston(d)
    const numGpaNames = ston(e)
    const gpa1 = ston(f)
    const gpa2 = ston(g)
    const gpa3 = ston(h)

  const gmaName = getGmaName(numGmaNames, gma1, gma2, gma3)
  const gpaName = getGpaName(numGpaNames, gpa1, gpa2, gpa3)
  return [gmaName, gpaName]


}

function ntos(num){
  return num.toString(16)
}

function ston(str){
  return parseInt(str,16)
}

