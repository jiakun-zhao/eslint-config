/* eslint-disable @typescript-eslint/no-unused-vars */

import HelloWorld from './HelloWorld.vue'

const a = HelloWorld

const a1 = [
  { hello: 1 },
  {
    hello: 2,
  },
]
const a2 = [
  {
    hello: 1,
  },
  { hello: 2 },
  { hello: 2 },
]

if (a === 1) {
  console.log(1)
}

while (false) {
  console.log(1)
}

switch (a) {
  case 1: console.log(1)
    break
  case 2: console.log(2)
    break
}

const b = (a: number) => `HELLO ${a}`

function c(a: string, b: string): void {
  console.log(1)
}
