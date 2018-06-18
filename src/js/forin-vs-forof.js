const str = 'abcdefg'
const forInOutput = document.getElementById('for-in-output')
const forOfOutput = document.getElementById('for-of-output')

for (item in str)
    forInOutput.innerHTML += `${item}`

for (item of str)
    forOfOutput.innerHTML += `${item}`