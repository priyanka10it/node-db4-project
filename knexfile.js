// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault:true,
    connection: {
      filename: './migrations/dev.db3'
    },
    pool:{
      afterCreate:(conn,done)=>{
        conn.run('PRAGMA forign_keys = ON', done);
      }
    }
  },
  
};  
