const input = "Cras pretium orci sed nibh tristique elementum. Morbi ut aliquet nibh, vel suscipit sapien. Quisque venenatis ante a vulputate porta. Vivamus auctor convallis laoreet. Fusce id tellus augue. Suspendisse tristique ullamcorper leo, nec commodo ante gravida in. Donec vel a lectus vitae elit rhoncus tincidunt. Mauris eu elit quis sem volutpat laoreet. Aliquam dapibus vitae a metus nec posuere."

const lowCase = w => w.toLowerCase()

let hash = input.match(/(\w)+/g).map(lowCase).reduce( (previus, word) => {
    previus[word] = ( previus[word] || 0 ) + 1
    return previus
}, {})

console.log(hash)