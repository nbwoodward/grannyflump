export const headers = [
  "You're new grandparents! Your wonderful grandchildren will call you:",
  "You've always wanted to be:",
  'The best grandparents in the world are:',
  'Hey everyone, we are know known as:',
]

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

export function getGpaName() {

  const numNames = Math.floor(Math.random()  * 3) + 1

  if (numNames === 1){
    return getFromArray(gpaNames)
  }

  const name1 = getFromArray(termsOfEndearment)
  if (numNames === 2){
    return `grandpa ${name1}`
  }

  const name2 = getFromArray(termsOfEndearment)
  if (numNames === 3){
    return `grandpa ${name1} ${name2}`
  }
}

export function getGmaName() {

  const numNames = Math.floor(Math.random()  * 3) + 1

  if (numNames === 1){
    return getFromArray(gmaNames)
  }

  const name1 = getFromArray(termsOfEndearment)
  if (numNames === 2){
    return `grandma ${name1}`
  }

  const name2 = getFromArray(termsOfEndearment)
  if (numNames === 3){
    return `grandma ${name1} ${name2}`
  }
}

export function getHeader() {
  return getFromArray(headers)
}

function getFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
