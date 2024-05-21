let emails = [
    'email1@gmail.com',
    'email2@gmail.com',
    'email3@gmail.com',
    'email4@gmail.com',
    'email5@gmail.com'
];

// for (let elemento = 0; elemento < emails.length; elemento++) {
//     console.log(`Enviado para o email: ${emails[elemento]}`);
// }

// O método forEach() utiliza o parâmetro 'email' para contar os elementos de um array
emails.forEach((email, cadastro, completo) => {
    console.log(" ");
    console.log(`Enviado para o email: ${email}`);
    console.log(`Seu número de cadastro é: ${cadastro}`);
    console.log(`Seu número de cadastro é: ${completo} `);
});