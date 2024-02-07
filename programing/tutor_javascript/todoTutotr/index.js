const myTodos = [
    {
        id: 1,
        text: 'Write the letter',
        tags: ['important','writing'],
        favorite: true,
        completed: true,
    },
    {
        id: 2,
        text: 'Eat some lunch',
        tags: ['food'],
        favorite: true,
        completed: false,
    },
    {
        id: 1,
        text: 'Run around the city',
        tags: ['important','writing'],
        favorite: false,
        completed: true,
    }
]

const showTodos = data => {
    for (let i = 0; i < data.length; i++) {
        const item= data[i]
        let itemString = ''

        itemString += item.completed ? `☑` : `☐`
        itemString += ` ${item.text} `
        itemString += item.favorite ? `★` : `x`

        console.log(itemString)
    }
}

// showTodos(myTodos)

const cariTodosText = (data, cariText) => {
    let newtodos = []

    for(let i = 0; i < data.length; i++) {
        const item = data[i]

        const lowerCasedItemText = item.text.toLowerCase()
        const lowerCasedCariText = cariText.toLowerCase()

        if (lowerCasedItemText.includes(lowerCasedCariText)) {
            newtodos.push(item)
        }
    }

    return newtodos
}

const nemuTodos = cariTodosText(myTodos, 'the')


const tods = ['Write the letter', 'Eat some breakfest', 'Rund around Bandung city']

const showTods = data => {
    for (let i = 0; i < data.length ; i++) {
        const item = data[i]

        console.log(`[${i + 1}] ${item}`)
    }
}

const cariTods = (data, textToSearch) => {
    let newTods = []

    for (let i = 0 ; i < data.length; i++) {
        const item = data[i]

        const lowerCasedItem = item.toLowerCase()
        const lowerCasedText = textToSearch.toLowerCase()

        if (lowerCasedItem.includes(lowerCasedText)) {
            newTods.push(item)
        }
    }

    return newTods
}

const foundTods = cariTods(tods, 'bandung')

showTods(foundTods)
showTodos(nemuTodos)
// showTods(tods)
// showTodos(nemuTodos)