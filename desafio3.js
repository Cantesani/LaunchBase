const usuarios = [
    {
        nome: 'Carlos',
        tecnologia: ['HTML', 'CSS',]
    },
    {
        nome: 'Jasmine',
        tecnologia: ['JavaScript', 'CSS'] 
    },
    {
        nome: 'Tuane',
        tecnologia: ['HTML', 'Node',]
    }
]

for (let usuario of usuarios) {
    console.log(`${usuario.nome} usa a tecnologia ${usuario.tecnologia.join(',')}`)
}
 