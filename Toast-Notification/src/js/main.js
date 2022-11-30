const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages =
[
    'Hello',
    'Hey',
    'Yooo',
    'Uhh',
    'Bro can you stop it',
    'Bro I\'m tired please stop',
    'Did you know that if you stopped now you would save 1 million dying kittens'
]

const types = ['info', 'sucess', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null)
{
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type: getRandomType())

    notif.innerText = message ? message : getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() =>
    {
        notif.remove()
    }, 3000)
}

function getRandomMessage()
{
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType()
{
    return types[Math.floor(Math.random() * types.length)]
}
