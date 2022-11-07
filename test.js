const sql = require('mssql')

function executeStatement() {
    try {
        // make sure that any items are correctly URL encoded in the connection string
         sql.connect('Server=localhost,1433;Database=trinetra;User Id=sa;Encrypt=true')
        const result =  sql.query`select * from Item`
        console.log("test")
        console.dir(result)
    } catch (err) {
        console.lof(err)
        // ... error checks
    }
}

executeStatement();