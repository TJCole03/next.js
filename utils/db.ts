import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

/*
    Every time we make a new client, it makes a new connection to the database.
    So instead what we're doing is caching that connection
    by attaching it to the global. We only create a new connection if one if it's
    not there.
    
*/

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient()
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient()
    }
    prisma = global.prisma
}

export default prisma

/*
    We are checking to see if we are in a certain environment variable, 
    creating a client, and attaching it to global.
    This is because of serverless environments and connection pooling.

    Databases are not meant to be in serverless environment by default
        DB's dont like to maintain long lived connections;
        In service environment, your service spins up, executes, then shuts down
    
    So every time you do that, you have to start a new database connection. 
    Eventually your database says "I can't handle all these connections".
    If you have 100,000 requests in a minute,that's 100,000 connections somewhere, give or take.
    Most databases can't handle that, and they're not meant for that.
    They're meant to be running on a server that's long live that has like one ortwo connections.
    That's it. 
    But luckily for us, we don't have to worry about that cuz one reason is SQLite.


 */