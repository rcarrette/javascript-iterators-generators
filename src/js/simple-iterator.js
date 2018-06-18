const describe = (obj) => Object.entries(obj)

const people = [
    'John',
    'Mary',
    'Peter'
]

const iterator = people[Symbol.iterator]()

console.log(describe(iterator.next()))
console.log(describe(iterator.next()))
console.log(describe(iterator.next()))
console.log(describe(iterator.next()))