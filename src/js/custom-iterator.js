const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
}

const getRandomArrayItem = (array) => {
    return array[getRandomInt(array.length)]
}

const people = ['John', 'Mary', 'Peter']
const sizes = ['small', 'intermediate', 'tall']

const getRandomPeopleDescription = () => {
    return `${getRandomArrayItem(people)} is ${getRandomArrayItem(sizes)}`
}

const peopleGroup = {
    [Symbol.iterator]: () => {
        return {
            next: () => {
                const enoughPeopleReturned = getRandomInt(10) > 5
                return !enoughPeopleReturned ? {
                    value: getRandomPeopleDescription(),
                    done: false
                } : { done: true }
            }
        }
    }
}

const output = document.getElementById('output')

for (const item of peopleGroup) {
    output.innerHTML += `${item}<br/>`
}