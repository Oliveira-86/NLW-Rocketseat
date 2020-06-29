//importar a depedencia do sqlite3
//função quando está dentro de um objeto é chamado de método, (verbose), esse metodo pede para o sqlite enviar msg ao terminal com informações
const sqlite3 = require("sqlite3").verbose()

//iniciar o obejto que irá fazer operações no  banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utiliza o objeto de banco de dados, para nossas operações
/*db.serialize(() =>{

    //com comandos SQL eu vou:

    // 1. Criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,        
            image TEXT,
            name TEXT
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );`
    )

    // 2. Inserir dados na tabela

    const query = (`
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUE (?,?,?,?,?,?,?);
`)

const values = [
    "http://localhost:3000/icones/reciclagem.eletronico.jpg",
    "Guilherme Gemballa, Jardim América",
    "Número 260",
    "Santa Catarina",
    "Rio do Sul",
    "Colectoria",
    "Resíduos Eletrônicos, Lâmpadas"
]

function afterInsertData(err){
    if(err) {
        return console.log(err)
    }

    console.log("Cadastro com sucesso")
    console.log(this) 
}

//db.run(query, values, afterInsertData) 
   
// 3. Consultar os dados da tabela

/*db.all(`SELECT * FROM places`, function(err, rows){
    if( err){
    return console.log(err)
    }

    console.log("Aqui estão seus registros: ")
    console.log(rows)
})*/

// 4. Deletar um dade da tabela

    /*db.run(` DELETE FROM places WHERE id = ?`, [1], function(err){
        if (err) {
            return console.log("Registro deletado com sucesso!")
        }
    })*/

//})