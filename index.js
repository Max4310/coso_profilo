var rpc = require("discord-rpc")
const { Activity } = require("discord.js")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
	client.request('SET_ACTIVITY', {
		pid: process.pid,
		activity : {
			details : "Entra In Discord Italia",
			assets : {
				large_image : "discord_italia_",
				large_text : "Entra In Discord Italia"
			},
			buttons : [{label : "DISCORD ITALIA" , url : "https://discord.gg/italia"}]
		}
	})
})
client.login({ clientId : "983477888886136864" }).catch(console.error);

