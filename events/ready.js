module.exports = (client) => {
  console.log("[Discord API]: Logged In As " + client.user.tag);
   client.user.setActivity({
    "details": "This bot made by AH1",
    "state": "AH1 For Ever",
    "name": "AH1 For Ever",
    "type": 1,
    "url": "https://www.twitch.tv/aa"
  })
  const http = require('http');
  setInterval(() => {
    http.get(`http://localhost:3000`,()=>{
        
 
    client.users.fetch(process.env.devs, false).then((user) => {
      user.send("a");
    });
  
    });
  }, 28000);
};
