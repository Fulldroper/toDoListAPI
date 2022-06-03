const fastify = require('fastify')({
  logger: true
})
const auth = require('./auth.json')
const db_class = require('./lib')
const db = new db_class(auth)

fastify.get('/', (_, reply) => {
    db.getList().then(res => reply.send(res))
})
fastify.put('/', (request, reply) => {
    try {
        reply.send(db.add(request.body.value))
    } catch (error) {
        reply.send({error: "wrong input"})
    }
})
fastify.delete('/:tid', (request, reply) => {
    try {
        reply.send(db.del(request.params.tid))
    } catch (error) {
        reply.send({error: "wrong input"})
    }
})
fastify.patch('/:tid', (request, reply) => {
    try {
        reply.send(db.update(request.params.tid, request.body.value))
    } catch (error) {
        reply.send({error: "wrong input"})
    }
})

fastify.patch('/:toggle_active/:tid', (request, reply) => {
    try {
        let active;
        if (request.params["toggle_active"] === "active") {
            active = true
        } else if (request.params["toggle_active"] === "inactive") {
            active = false
        }
        reply.send(
            db.toggleDone(
                request.params.tid, 
                active
            )
        )
    } catch (error) {
        reply.send({error: "wrong input"})
    }
})
// Run the server!
fastify.listen(process.env.PORT || 80, (err, address) => {
  if (err) throw err
  console.log(`Server is now listening on ${address}`);
})