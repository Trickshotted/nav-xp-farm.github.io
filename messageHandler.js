function sleep(milisec) {
    return new Promise(resolve => {
    setTimeout(() => { resolve('') }, milisec);
    })
    }

    let run;
    let upperBound = 0
    let lowerBound = 0
    let messagesSent = 0
async function start(){

  var response2 = await fetch("https://discord.com/api/v9/users/@me", {
  "headers": {
    "authorization": document.getElementById("token").value,
    "content-type": "application/json"
  },
  "body": null,
  "method": "GET"
});
const data2 = await response2.json()
document.getElementById("username").innerHTML = data2.username + "<label style=\"font-size:13px; color:#bfbfbf\">#" + data2.discriminator + "</label>"
document.getElementById("pfp").src = "https://cdn.discordapp.com/avatars/" + data2.id + "/" + data2.avatar + ".png"

    while(true){

var response = await fetch("https://discord.com/api/v9/channels/" + document.getElementById("channelid").value + "/messages", {
  "headers": {
    "authorization": document.getElementById("token").value,
    "content-type": "application/json"
  },
  "body": "{\"content\":\"_ _\"}",
  "method": "POST"
});
const data = await response.json()
messagesSent = messagesSent + 1
document.getElementById("stats").innerHTML = "Messages Sent: " + messagesSent + "<br>Last Sent Message: <b>" + data.timestamp.split("T")[1].split("+")[0].split(".")[0] + "</b> on <b>" + data.timestamp.split("T")[0].replace(/-/g, "/") + "</b><br>ID: <b>" + data.id + "</b>"
await sleep(100)
fetch("https://discord.com/api/v9/channels/" + document.getElementById("channelid").value + "/messages/" + data.id, {
  "headers": {
    "authorization": document.getElementById("token").value
  },
  "body": null,
  "method": "DELETE"
});



await sleep(60000)
    }

}





//NzA1NDcxODYwNTE0NzUwNTk2.YghLIg.kJAXoCTQYE7Fek42prBTbwuRfUY
