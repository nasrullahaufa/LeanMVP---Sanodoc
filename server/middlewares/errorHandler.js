function errorHandler(err, req, res, next){
  console.log(err.name, err.message)
    switch(err.name) {

        case 'BADUSERPASS':
            
            
            res.status(400).json({ error: err.message})
            break;
     

        default:
            const status = err.status || 500
            const message = err.message || 'Internal Server Error'
            res.status(status).json({ error: message })
    }
}

module.exports = errorHandler