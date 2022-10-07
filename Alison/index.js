const { Client, GatewayIntentBits, Partials } = require('discord.js');
const { token, holeID } = require('./config.json'); //This grabs the token and hole Id from your config file.
var chap5run = 0;
var cave7fstrun = 0; //Variable used for all the users that might interact with cave6->7 in the first 2hr time window that it would kick off (No idea honestly)

/*
*Summary V0.2: 
* - Some questions will be answered. 
* - Some questions will be asked.
* - Has the rabbit shown you all there is to see?
* - 
* - Signed, [Name]
*/
const client = new Client({ partials: [Partials.Message, Partials.Channel, Partials.Reaction], intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.MessageContent] }); //Create the client that has all the permissions it wants to use (with many more available)

client.once('ready', () => {
	console.log('Shall we begin?'); //??
});


client.on('guildMemberAdd', async member => { //This kicks off when a new members is added to the server
	const holeguild = await client.guilds.cache.find((g) => g.id === holeID); //Associate a 'Guild' to a (const)ant variable - This case where the ID of the guild matches the holeID from config.json
	if(member.guild === holeguild){ //If the guild ID of the member matches the hole's ID (Notice the servers this resident is a part of...)
		member.setNickname('Lost').catch(()=>{}); //Automatically set the nickname of the new users to 'Lost' -> Catch error in case user disconnects between connecting and this line.
		const chap5chan = await client.channels.fetch("");//Direct ID of channel labeled 'chapter4' in the 'Hole' server.
		const ch5chk = (await chap5chan.messages.fetch({count:2})).first(); //Checks if chapter4 channel has any messages
		const readmechan = await client.channels.fetch("");//Readme channel (user with DMs disabled)
		const readmechk = (await readmechan.messages.fetch({count:2})).first();//Check if readme is empty
		await member.send(`Oh, dear...`)
		.then(message =>
			{
				setTimeout(function(){
					message.delete();
				}, 60000);
			})
		.catch(()=>
			{
				holeguild.members.fetch(member)
				.then(m => {
					if(member.roles.cache.has("")){//Main "Lost" ID that is added later in this sequence (unlikely they'd have it - but removing it just in case due to previous iterations of when this role was added)
						member.roles.remove("").catch(()=>{});//Remove ID that was checked above
					}
					if(!member.roles.cache.has("")){//Check if they DO NOT have the 'Blocked' ID (no DMs)
						member.roles.add("").catch(()=>{});//Add 'Blocked' ID
						if(!readmechk){
							readmechan.send(`Aw shucks!`
							+`\n\nIt looks like the entrance to the area the rabbit ran to is blocked right now.` 
							+`\n\n*On closer inspection it appears there is a notice that might be able to help...*`
							+`\n\n>>> In order to proceed please turn on the ability for **Direct Messages** in your **User Settings**:`
							+`\n1a) **__Computers:__** Click the gear  (⚙️) next to your username on the bottom left of this notice. `
							+`\n1b) **__Mobile:__** Click on the face (🙂) on the bottom right of the application (it should have your visibility status attached on the bottom right of the face)`
							+`\n2) Navigate to **Privacy & Safety**`
							+`\n3) Beneath "SERVER PRIVACY DEFAULTS" toggle on *(colored in and swiped to the right)* **Allow direct messages from server members**`
							+`\n4) When prompted to apply to all existing servers select 'Yes' (You can manually change back other servers if desired)`
							+`\n\n**[Please click the checkmark below this notice once completed to begin]**`)
							.then(m => {m.react('✅')}); 
						}
					}
				})
				.catch(()=>{
					;//donothing
				});
			});// The sequence attached here (starting with send) will first attempt to send the user a message, then it will auto-delete the message. If it cannot send (error is caught) it then tries to change the user's role to a 'Blocked' role which explains to them how to resolve this.
			//All .send / .catch / if mem->remove / if mem->add will be similar below and no additional comments will be added for them.
		await setTimeout(function(){
			member.send(`It appears we have found ourselves in a hole chasing after a rabbit with a big watch!`)
			.then(message =>
				{
					setTimeout(function(){
						message.delete();
					}, 57000);
				})
			.catch(()=>
				{
					holeguild.members.fetch(member)
					.then(m => {
						if(member.roles.cache.has("")){//'Lost'
							member.roles.remove("").catch(()=>{});//'Lost'
						}
						if(!member.roles.cache.has("")){//'Blocked'
							member.roles.add("").catch(()=>{});//'Blocked'
							if(!readmechk){
								readmechan.send(`Aw shucks!`
								+`\n\nIt looks like the entrance to the area the rabbit ran to is blocked right now.` 
								+`\n\n*On closer inspection it appears there is a notice that might be able to help...*`
								+`\n\n>>> In order to proceed please turn on the ability for **Direct Messages** in your **User Settings**:`
								+`\n1a) **__Computers:__** Click the gear  (⚙️) next to your username on the bottom left of this notice. `
								+`\n1b) **__Mobile:__** Click on the face (🙂) on the bottom right of the application (it should have your visibility status attached on the bottom right of the face)`
								+`\n2) Navigate to **Privacy & Safety**`
								+`\n3) Beneath "SERVER PRIVACY DEFAULTS" toggle on *(colored in and swiped to the right)* **Allow direct messages from server members**`
								+`\n4) When prompted to apply to all existing servers select 'Yes' (You can manually change back other servers if desired)`
								+`\n\n**[Please click the checkmark below this notice once completed to begin]**`)
								.then(m => {m.react('✅')});
							}
						}
					})
					.catch(()=>{
						;//donothing
					});
				});
			}, 3000);
		await setTimeout(function(){
			member.send(`*What's that over there?*`)
			.then(message =>
				{
					setTimeout(function(){
						message.delete();
					}, 53000);
				})
			.catch(()=>
				{
					holeguild.members.fetch(member)
					.then(m => {
						if(member.roles.cache.has("")){//`Lost`
							member.roles.remove("").catch(()=>{});//`Lost`
						}
						if(!member.roles.cache.has("")){//`Blocked`
							member.roles.add("").catch(()=>{});//`Blocked`
							if(!readmechk){
								readmechan.send(`Aw shucks!`
								+`\n\nIt looks like the entrance to the area the rabbit ran to is blocked right now.` 
								+`\n\n*On closer inspection it appears there is a notice that might be able to help...*`
								+`\n\n>>> In order to proceed please turn on the ability for **Direct Messages** in your **User Settings**:`
								+`\n1a) **__Computers:__** Click the gear  (⚙️) next to your username on the bottom left of this notice. `
								+`\n1b) **__Mobile:__** Click on the face (🙂) on the bottom right of the application (it should have your visibility status attached on the bottom right of the face)`
								+`\n2) Navigate to **Privacy & Safety**`
								+`\n3) Beneath "SERVER PRIVACY DEFAULTS" toggle on *(colored in and swiped to the right)* **Allow direct messages from server members**`
								+`\n4) When prompted to apply to all existing servers select 'Yes' (You can manually change back other servers if desired)`
								+`\n\n**[Please click the checkmark below this notice once completed to begin]**`)
								.then(m => {m.react('✅')});
							}
						}
					})
					.catch(()=>{
						;//donothing
					});
				});
			}, 7000);
			
		await setTimeout(function(){
			var errChk = 0;
			member.roles.add("").catch(e => {//`Lost`
				errChk = 1;
			});
			if(!ch5chk && errChk === 0){
				setTimeout(function(){
						chap5chan.send(`It looks like this is the table of assorted food.\n\n\n>>> **__Eat one__**`)
						.then(message => {
							message.react('[Food Emoji]')
						});
					}, 15000);
				}
			member.send(`It looks like... a table with a sign that says, "Eat one"`)
			.then(message =>
				{
					setTimeout(function(){
						message.delete();
					}, 50000);
				})
			.catch(()=>
				{
					holeguild.members.fetch(member)
					.then(m => {
						if(member.roles.cache.has("")){//`Lost`
							member.roles.remove("").catch(()=>{});//`Lost`
						}
						if(!member.roles.cache.has("")){//`Blocked`
							member.roles.add("").catch(()=>{});//`Blocked`
							if(!readmechk){
								readmechan.send(`Aw shucks!`
								+`\n\nIt looks like the entrance to the area the rabbit ran to is blocked right now.` 
								+`\n\n*On closer inspection it appears there is a notice that might be able to help...*`
								+`\n\n>>> In order to proceed please turn on the ability for **Direct Messages** in your **User Settings**:`
								+`\n1a) **__Computers:__** Click the gear  (⚙️) next to your username on the bottom left of this notice. `
								+`\n1b) **__Mobile:__** Click on the face (🙂) on the bottom right of the application (it should have your visibility status attached on the bottom right of the face)`
								+`\n2) Navigate to **Privacy & Safety**`
								+`\n3) Beneath "SERVER PRIVACY DEFAULTS" toggle on *(colored in and swiped to the right)* **Allow direct messages from server members**`
								+`\n4) When prompted to apply to all existing servers select 'Yes' (You can manually change back other servers if desired)`
								+`\n\n**[Please click the checkmark below this notice once completed to begin]**`)
								.then(m => {m.react('✅')});
							}
						}
					})
					.catch(()=>{
						;//donothing
					});
				});
			}, 10000);
			
		await setTimeout(function(){ 
			member.send(`*Hm...*`)
			.then(message =>
				{
					setTimeout(function(){
						message.delete();
					}, 47000);
				})
			.catch(()=>
				{
					holeguild.members.fetch(member)
					.then(m => 
						{
							if(member.roles.cache.has("")){//`Lost`
								member.roles.remove("").catch(()=>{});//`Lost`
							}
							if(!member.roles.cache.has("")){//`Blocked`
								member.roles.add("").catch(()=>{});//`Blocked`
								if(!readmechk){
									readmechan.send(`Aw shucks!`
									+`\n\nIt looks like the entrance to the area the rabbit ran to is blocked right now.` 
									+`\n\n*On closer inspection it appears there is a notice that might be able to help...*`
									+`\n\n>>> In order to proceed please turn on the ability for **Direct Messages** in your **User Settings**:`
									+`\n1a) **__Computers:__** Click the gear  (⚙️) next to your username on the bottom left of this notice. `
									+`\n1b) **__Mobile:__** Click on the face (🙂) on the bottom right of the application (it should have your visibility status attached on the bottom right of the face)`
									+`\n2) Navigate to **Privacy & Safety**`
									+`\n3) Beneath "SERVER PRIVACY DEFAULTS" toggle on *(colored in and swiped to the right)* **Allow direct messages from server members**`
									+`\n4) When prompted to apply to all existing servers select 'Yes' (You can manually change back other servers if desired)`
									+`\n\n**[Please click the checkmark below this notice once completed to begin]**`)
									.then(m => {m.react('✅')});
								}
							}
					})
					.catch(()=>{
						;//donothing
					});
				});
			}, 13000);
		
			
		await setTimeout(function(){
			member.send(`Perhaps we should walk over to the table in the hole and **__choose one__**?`)
			.then(message =>{
				setTimeout(function(){
					message.delete();
				}, 45000);
			})
			.catch(()=>{
				holeguild.members.fetch(member)
				.then(m => {
					if(member.roles.cache.has("")){//`Lost`
						member.roles.remove("").catch(()=>{});//`Lost`
					}
					if(!member.roles.cache.has("")){//`Blocked`
						member.roles.add("").catch(()=>{});//`Blocked`
						if(!readmechk){
							readmechan.send(`Aw shucks!`
							+`\n\nIt looks like the entrance to the area the rabbit ran to is blocked right now.` 
							+`\n\n*On closer inspection it appears there is a notice that might be able to help...*`
							+`\n\n>>> In order to proceed please turn on the ability for **Direct Messages** in your **User Settings**:`
							+`\n1a) **__Computers:__** Click the gear  (⚙️) next to your username on the bottom left of this notice. `
							+`\n1b) **__Mobile:__** Click on the face (🙂) on the bottom right of the application (it should have your visibility status attached on the bottom right of the face)`
							+`\n2) Navigate to **Privacy & Safety**`
							+`\n3) Beneath "SERVER PRIVACY DEFAULTS" toggle on *(colored in and swiped to the right)* **Allow direct messages from server members**`
							+`\n4) When prompted to apply to all existing servers select 'Yes' (You can manually change back other servers if desired)`
							+`\n\n**[Please click the checkmark below this notice once completed to begin]**`)
							.then(m => {m.react('✅')});
						}
					}
				})
				.catch(()=>{
					;//donothing
				});
			});
		}, 17000);
	}
});

/*
* - Notes were left from developmental stage of alison (for understanding of how comments would be used in place - newer developers)
*/
//Change from daydream 1 to daydream 2 at the end of daydream sequence (this places them in "stagnant" daydream channel)
//Change from daydream 3 to daydream 1 at the end of daydream sequence (this places them in "moving" daydream channel and will update daydream channel name which will  trigger below)

//Change from chasing 1 to chasing 2 at the end of chasing sequence (this places them in "stagnant" tulgey-wood channel)
//change from chasing 3 to chasing 1 at the end of chasing seqeunce (this places them in "moving" tulgey-wood channel and will update tulgey-wood channel name which will  trigger below)
client.on('channelUpdate', async (request) => { //This runs when a channel is updated when allows the sequences of events to repeat like a theme park  attraction.
	
	const holeguild = await client.guilds.cache.find((g) => g.id === holeID); //As like previous grabbing the hole guild based on its ID
	await holeguild.members.fetch(); //Refresh member list
	const chaserole = await holeguild.roles.cache.get("");//This is Chase1 (Role that's used for 'current messaging')
	const dreamrole = await holeguild.roles.cache.get("");//This is Dream1 (Role that's used for 'current messaging')
	const contchan = await client.channels.fetch("");//This is Tulgey1 ('messaging' channel)
	const contchk = (await contchan.messages.fetch({count:2})).first();//Checks to make sure Tulgey is empty
	const readmechan = await client.channels.fetch("");//Readme channel ID (If DMs are disabled)
	const readmechk = (await readmechan.messages.fetch({count:2})).first();
	const order1role = await holeguild.roles.cache.get("");//This is Order1 (Sequence in case you don't use the right order for /path)
	const order2role = await holeguild.roles.cache.get("");//This is Order2
	const order3role = await holeguild.roles.cache.get("");//This is Order3
	const order4role = await holeguild.roles.cache.get("");//This is Order4
	const order5role = await holeguild.roles.cache.get("");//This is Order5
	const order6role = await holeguild.roles.cache.get("");//This is Order6
	const order7role = await holeguild.roles.cache.get("");//This is Order7
	const order8role = await holeguild.roles.cache.get("");//This is Order8
	const cavechan = await client.channels.fetch("");//Cave1 / order1 (Temp messaging for first sequence)
	const cave1chk = (await cavechan.messages.fetch({count:2})).first(); //check if cave1 has anything written
	const cave2chan = await client.channels.fetch("");//Cave2 (Check if properly waited and answered with described food [different than table])
	const cave2chk = (await cave2chan.messages.fetch({count:2})).first(); //check if cave2 has anything written
	const cave3chan = await client.channels.fetch("");//Cave3 (uh oh triggered with impatience)
	const cave3chk = (await cave3chan.messages.fetch({count:2})).first(); //check if cave3 has anything written
	const cave4chan = await client.channels.fetch("");//Cave4 (uh oh permanent yes->ban / no->continue)
	const cave4chk = (await cave4chan.messages.fetch({count:2})).first(); //check if cave4 has anything written
	const cave5chan = await client.channels.fetch("");//Cave5 (Acceptance of patience --> 2hr wait // reminder of which food to use when we're ready)
	const cave5chk = (await cave5chan.messages.fetch({count:2})).first(); //check if cave5 has anything written
	const cave6chan = await client.channels.fetch("");//Cave6 (Patience 2hr wait)
	const cave6chk = (await cave6chan.messages.fetch({count:2})).first(); //check if cave6 has anything written
	const cave7chan = await client.channels.fetch("");//Cave7 (Ready to go channel -> correct food throws them back to order1)
	const cave7chk = (await cave7chan.messages.fetch({count:2})).first(); //check if cave7 has anything written
	const wakeupchan = await client.channels.fetch("");//Dream1 (temp messaging if wrong food is chosen on table)
	const wakeupchk = (await wakeupchan.messages.fetch({count:2})).first();//Checks that Dream1 is empty
	const chasefinrole = await holeguild.roles.cache.get(""); //Chase2 to place in "perm" chan for tulgey
	const dreamfinrole = await request.guild.roles.cache.get(""); //Dream2 to place in "perm" chan for `waking up`
	//update for order5role (resting)
	if(order5role.members.size > 0 && !cave5chk){ //Checks if the number of people associated to ordr5role is greater than 0 and there is nothing in cave5 being written right now. 
		if(!cave6chk){
			await setTimeout(function(){
				cave6chan.send(`Okay, before we try to escape the cave I think it would be a good idea to rest a bit to rejuvenate.`);
			}, 1001);
			await setTimeout(function(){
				cave6chan.send(`I’m going to take a quick nap, and we’ll have to relax here for a couple hours before continuing.`);
			}, 10001);
		}

		await setTimeout(function(){
			cave5chan.send(`Okay, before we try to escape the cave I think it would be a good idea to rest a bit to rejuvenate.`)
			.then(m => {
				setTimeout(function(){
					m.delete();
				}, 35001);
			});
		}, 1001);
		await setTimeout(function(){
			cave5chan.send(`I’m going to take a quick nap, and we’ll have to relax here for a couple hours before continuing.`)
			.then(m => {
				setTimeout(function(){
					m.delete();
				}, 29002);
			});
		}, 7001);
		await setTimeout(function(){
			cave5chan.send(`Oooh I’m so*ooo sleeeepy* I almost forgot to tell yo*uuuu…yawn* when I ask you later if you are ready to go… show me a picture of the **food we ate on the table** to jog my memory. If anything else happens I don’t think we will be able to continue anymore… *yawn* good night, friend… *Zzzzz*`)
			.then(m => {
				setTimeout(function(){
					m.delete();
				}, 23003);
			});
			holeguild.members.fetch();
			//Moves from Order5->6 when the first delete goes through.
			order5role.members.forEach(member => {
				setTimeout(function(){
					member.roles.remove("").catch(()=>{});//Order5
				}, 1000);
				setTimeout(function(){
					member.roles.add("").catch(()=>{}); //Order6
				}, 1050);
				setTimeout(function(){
					member.roles.remove("").catch(()=>{});//Order6
					member.roles.add("").catch(()=>{}); //Order7
					if(!cave7chk && cave7fstrun === 0){
						cave7fstrun = 1;
						cave7chan.send(`*stretches arms* I am up and ready to go! Are you ready to go? Since I know it’s hard for you to talk, you can react to me and I'll take it from there.`);
					}
				}, 7200000); //This is the 2 hour wait to allow them to try again on leaving the cave if they react with a [food]
			});	
		}, 13512);
		await setTimeout(function(){
			holeguild.members.fetch();
			const order45role = holeguild.roles.cache.get("");//This is Order4.5
		
			//This will be for moving all Order4.5 to Order5 (Order5-->6 is above)
			order45role.members.forEach(member => {
				member.roles.remove("").catch(()=>{});//Order4.5
				member.roles.add("").catch(()=>{});//Moves from Order4.5->5 and sets the name below to reset.
			});
			setTimeout(function(){
				cave5chan.setName('cave');//Sets the name of the channel to trigger the next event (lots of name changes... but make do with what you can)
			}, 1500);
		}, 45003);

	}
	//update for order3role (Uh oh...)
	if(order3role.members.size > 0 && !cave3chk){
		if(!cave4chk){
			await setTimeout(function(){
				cave4chan.send(`Uh oh… `);
			}, 3001);
			await setTimeout(function(){
				cave4chan.send(`It looks like we aren’t being very patient here…`);
			}, 5001);
			await setTimeout(function(){
				cave4chan.send(`Are you sure we should keep going?`);
			}, 8001);
			await setTimeout(function(){
				cave4chan.send(`There is no shame in stopping here and being proud of where we’ve come.`);
			}, 11001);
			await setTimeout(function(){
				cave4chan.send(`We can come back to this at another time in a better state of mind.`);
			}, 17001);
			await setTimeout(function(){
				cave4chan.send(`**Would you like to continue?**`)
				.then(m => {
					m.react(`✅`);
					m.react(`❌`);
				});
			}, 25001);
		}

		await setTimeout(function(){
			cave3chan.send(`Uh oh… `)
			.then(m => {
				setTimeout(function(){
					m.delete();
				}, 32001);
			});
		}, 3001);
		await setTimeout(function(){
			cave3chan.send(`It looks like we aren’t being very patient here…`)
			.then(m => {
				setTimeout(function(){
					m.delete();
				}, 30002);
			});
		}, 5001);
		await setTimeout(function(){
			cave3chan.send(`Are you sure we should keep going?`)
			.then(m => {
				setTimeout(function(){
					m.delete();
				}, 27003);
			});
		}, 8001);
		await setTimeout(function(){
			cave3chan.send(`There is no shame in stopping here and being proud of where we’ve come.`)
			.then(m => {
				setTimeout(function(){
					m.delete();
				}, 24004);
			});
		}, 11001);
		await setTimeout(function(){
			cave3chan.send(`We can come back to this at another time in a better state of mind.`)
			.then(m => {
				setTimeout(function(){
					m.delete();
				}, 18005);
			});
		}, 17001);
		await setTimeout(function(){
			cave3chan.send(`If you would genuinely like to continue (after a short rest), please select the ❌. `)
			.then(m => {
				setTimeout(function(){
					m.delete();
				}, 9006);
			});
		}, 20001);
		await setTimeout(function(){
			cave3chan.send(`If you instead select the ✅, it seems our adventure would come to an end.`)
			.then(m => {
				setTimeout(function(){
					m.delete();
				}, 5007);
			});
		}, 24001);
		await setTimeout(function(){
			cave3chan.send(`**Would you like to continue?** *Please note: If neither option works, please click into the cave again on the left*`)
			.then(m => {
				m.react(`✅`);
				m.react(`❌`);
				setTimeout(function(){
					m.delete();
				}, 5008);
			});
			holeguild.members.fetch();
			//Moves from Order3->4 when the first delete goes through.
			order3role.members.forEach(member => {
				setTimeout(function(){
					member.roles.remove("").catch(()=>{});//Order3
				}, 1100);
				setTimeout(function(){
					member.roles.add("").catch(()=>{}); //Order4
				}, 1150);
			});	
		}, 29512);
		await setTimeout(function(){
			holeguild.members.fetch();
			const order25role = holeguild.roles.cache.get("");//This is Order2.5
		
			//This will be for moving all Order2.5 to Order3 (Order3-->4 is above)
			order25role.members.forEach(member => {
				member.roles.remove("").catch(()=>{});//Order2.5
				member.roles.add("").catch(()=>{});//Moves from Order2.5->3 and sets the name below to reset.
			});
			setTimeout(function(){
				cave3chan.setName('cave');
			}, 1500);
		}, 45003);

	}

	//Update to be for order1role
	if(order1role.members.size > 0 && !cave1chk){ //
		//cave2chan
		if(!cave2chk){
			await setTimeout(function(){
				cave2chan.send(`Now we’re stuck in this cave blocked behind a giant wooden door that appears to have been placed by an… ogre of some sort?`);
			}, 1001);
			await setTimeout(function(){
				cave2chan.send(`Oh, look! The light shining through the upper part of the door has shown a handwritten note on the wall over here signed by… quite an unusual name…`);
			}, 15001);
			await setTimeout(function(){
				cave2chan.send(`>>> WELCOM TO MAH SWAMP.\nUR HEER TO PRUHVENT GESSIN THA ORDA WITHOUT THINKN.\nCLIK DIS MARK TO LEEVE.\n-**SHR=*__K__***`)
				.then(m => {m.react('✅')});;
			}, 25001);
		}

		await setTimeout(function(){
			cavechan.send(`Now we’re stuck in this cave blocked behind a giant wooden door that appears to have been placed by an… ogre of some sort?`)
			.then(m => {
				setTimeout(function(){
					m.delete();
				}, 29001);
			});
		}, 1000);
		await setTimeout(function(){
			cavechan.send(`Oh, look! The light shining through the upper part of the door has shown a handwritten note on the wall over here signed by… quite an unusual name…`)
			.then(m => {
				setTimeout(function(){
					m.delete();
				}, 22002);
			});
		}, 8000);
		await setTimeout(function(){
			cavechan.send(`>>> WELCOM TO MAH SWAMP.\nUR HEER TO PRUHVENT GESSIN THA ORDA WITHOUT THINKN.\nN ORDEH TO LEEVE U MUST GIVE CO-CO NUT NEXT\nNOT CLIK CHEK\nDYS TO KEEP PAYSHINZ N NOT B ANGRY OGRE LIK MEH\n-**SHR=*__K__*** \n*P.S. IF NOTHIN HAPPEN WITH REACT THEN GO TO CAVE AGAIN*`)
			.then(m => {
				m.react('✅');
				setTimeout(function(){
					m.delete();
				}, 10003);
			});
			holeguild.members.fetch();
			//Moves from Order1->2 when the first delete goes through.
			order1role.members.forEach(member => {
				setTimeout(function(){
					member.roles.remove("").catch(()=>{});//Order1
				}, 1050);
				setTimeout(function(){
					member.roles.add("").catch(()=>{}); //Order2
				}, 1100);
			});
		}, 20000);
		await setTimeout(function(){
			holeguild.members.fetch();
			const order0role = holeguild.roles.cache.get("");//This is Order0
		
			//This will be for moving all Order0 to Order1 (Order1-->2 is above)
			order0role.members.forEach(member => {
				member.roles.remove("").catch(()=>{});//Order0
				member.roles.add("").catch(()=>{});//Moves from Order0->1 and sets the name below to reset.
			});
			setTimeout(function(){
				cavechan.setName('cave');
			}, 1500);
		}, 31003);
	}
	if(chaserole.members.size > 0 && !contchk){ 
		const bufferchan = await client.channels.fetch(""); //Channel for buffer
		const buffchk = (await bufferchan.messages.fetch({})).first(); //Buffer check for if the rabbit has appeared
		const finchan = await client.channels.fetch("");//"Final" channel for tulgey
		const finchk = (await finchan.messages.fetch({count:2})).first();
		const rabchk = await contchan.guild.members.fetch("");//This is the rabbit's user ID
		if(chasefinrole.members.size < [Number] && !buffchk){//Please note: All areas with [~text~] means to replace [] with whatever is inside of []. (If confused: There is a way to ask questions about the code, but only code-related questions will be answered.)

			if(!finchk){
				await setTimeout(function(){
					finchan.send(`Well, that definitely seemed to get us through the door...\n\n`);
				}, 1001);
				await setTimeout(function(){
					finchan.send(`But where did the rabbit go...?\n\n`);
				}, 6001);
				await setTimeout(function(){
					finchan.send(`I'm sure they were around here somewhere...\n\n`);
				}, 9001);
			}

			await setTimeout(function(){
				contchan.send(`Well, that definitely seemed to get us through the door...\n\n`)
				.then(m => {
					setTimeout(function(){
						m.delete();
					}, 19001);
				});
			}, 1000);
			await setTimeout(function(){
				contchan.send(`But where did the rabbit go...?\n\n`)
				.then(m => {
					setTimeout(function(){
						m.delete();
					}, 14002);
				});
			}, 6000);
			await setTimeout(function(){
				contchan.send(`I'm sure they were around here somewhere...\n\n`)
				.then(m => {
					setTimeout(function(){
						m.delete();
					}, 11003);
				});
			}, 9000);
			await setTimeout(function(){
				contchan.send(`*Maybe we need to wait for more people to help us look?*`)
				.then(m => {
					setTimeout(function(){
						m.delete();
					}, 8004);
				});
				//Moves from Chase1->2 when the first delete goes through.
				chaserole.members.forEach(member => {
					member.roles.remove("").catch(()=>{});//Chase1
					member.roles.add("").catch(()=>{}); //Chase2
				});
			}, 12000);

			await setTimeout(() => {
				holeguild.members.fetch();
				const chasewait = holeguild.roles.cache.get(""); //Chase3
			
				//This will be for moving all chasing3 to chasing1 (chasing1-->2 is above)
				chasewait.members.forEach(member => {
					member.roles.remove("").catch(()=>{});//chase3
					member.roles.add("").catch(()=>{});//Moves from Chase3->1 and sets the name below to reset.
				});
				setTimeout(function(){
					contchan.setName('tulgey-wood');
				}, 1500);
			}, 23000);
		}else if(chasefinrole.members.size >= [Number] || buffchk){ //Set this number to the threshhold point.
			await setTimeout(function(){
				contchan.send(`Well, that definitely seemed to get us through the door...\n\n`)
				.then(m => {
					setTimeout(function(){
						m.delete();
					}, 21001);
				});
			}, 1000);
			await setTimeout(function(){
				contchan.send(`But where did the rabbit go...?\n\n`)
				.then(m => {
					setTimeout(function(){
						m.delete();
					}, 16002);
				});
			}, 6000);
			await setTimeout(function(){
				contchan.send(`I'm sure they were around here somewhere...\n\n`)
				.then(m => {
					setTimeout(function(){
						m.delete();
					}, 13003);
				});
				rabchk.roles.add("").catch(()=>{});//Add rabbit1 role to rabbit (to message in temp channel)
				if(!buffchk){
					rabchk.roles.add("").catch(()=>{});//Add rabbit2 role to the rabbit (to message in permanent channel)
				}
				setTimeout(function(){
					contchan.setName('tulgey-wood');
				}, 1500);
			}, 9000);
			await setTimeout(function(){
				contchan.send(`There's the Rabbit!`)//Delayed message until after the rabbit would say something
				.then(m => {
					setTimeout(function(){
						m.delete();
					}, 7004);
				});
				if(!buffchk){
					setTimeout(function(){
						finchan.send(`There's the Rabbit!`);
					}, 251);
				}
			}, 15000);
			await setTimeout(function(){
				contchan.send(`\n\nWe've got to catch them! But the path appears to be *scrambled*...`)
				.then(m => {
					setTimeout(function(){
						m.delete();
					}, 5005);
				});
				if(!buffchk){
					setTimeout(function(){
						finchan.send(`We've got to catch them! But the path appears to be *scrambled*...`);
					}, 251);
				}
			}, 17000);
			await setTimeout(function(){
				chaserole.members.forEach(thismem => { 
					thismem.send(`\n\nMaybe you could let me know the *order* that I should take for the **/path**?`)
					.then(m => {
						setTimeout(function(){
							m.delete();
						}, 30006);
						thismem.roles.remove("").catch(()=>{});//Remove chase1
						thismem.roles.add("").catch(()=>{}); //Add chase2
					})
					.catch(()=>
						{
							if(thismem.roles.cache.has("")){//Chase1
								thismem.roles.remove("").catch(()=>{});//Chase1
							}
							if(!thismem.roles.cache.has("")){//Unable to message / "Blocked" role
								thismem.roles.add("").catch(()=>{});
								if(!readmechk){
									readmechan.send(`Aw shucks!`
									+`\n\nIt looks like the entrance to the area the rabbit ran to is blocked right now.` 
									+`\n\n*On closer inspection it appears there is a notice that might be able to help...*`
									+`\n\n>>> In order to proceed please turn on the ability for **Direct Messages** in your **User Settings**:`
									+`\n1a) **__Computers:__** Click the gear  (⚙️) next to your username on the bottom left of this notice. `
									+`\n1b) **__Mobile:__** Click on the face (🙂) on the bottom right of the application (it should have your visibility status attached on the bottom right of the face)`
									+`\n2) Navigate to **Privacy & Safety**`
									+`\n3) Beneath "SERVER PRIVACY DEFAULTS" toggle on *(colored in and swiped to the right)* **Allow direct messages from server members**`
									+`\n4) When prompted to apply to all existing servers select 'Yes' (You can manually change back other servers if desired)`
									+`\n\n**[Please click the checkmark below this notice once completed to begin]**`)
									.then(m => {m.react('✅')});
								}
							}
						});
				});
				if(!buffchk){
					chasefinrole.members.forEach(member => {
						member.send(`\n\nMaybe you could let me know the *order* that I should take for the **/path**?`)
						.then(m => {
							setTimeout(function(){
								m.delete();
							}, 30006);
						})
						.catch(()=>
							{
								if(member.roles.cache.has("")){//Chase1
									member.roles.remove("").catch(()=>{});
								}
								if(!member.roles.cache.has("")){//Blocked
									member.roles.add("").catch(()=>{});
									if(!readmechk){
										readmechan.send(`Aw shucks!`
										+`\n\nIt looks like the entrance to the area the rabbit ran to is blocked right now.` 
										+`\n\n*On closer inspection it appears there is a notice that might be able to help...*`
										+`\n\n>>> In order to proceed please turn on the ability for **Direct Messages** in your **User Settings**:`
										+`\n1a) **__Computers:__** Click the gear  (⚙️) next to your username on the bottom left of this notice. `
										+`\n1b) **__Mobile:__** Click on the face (🙂) on the bottom right of the application (it should have your visibility status attached on the bottom right of the face)`
										+`\n2) Navigate to **Privacy & Safety**`
										+`\n3) Beneath "SERVER PRIVACY DEFAULTS" toggle on *(colored in and swiped to the right)* **Allow direct messages from server members**`
										+`\n4) When prompted to apply to all existing servers select 'Yes' (You can manually change back other servers if desired)`
										+`\n\n**[Please click the checkmark below this notice once completed to begin]**`)
										.then(m => {m.react('✅')});
									}
								}
							});

					});
				}
			}, 21000);

			await setTimeout(function(){
				//Remove rabbit1 and rabbit2 from rabbit so it disappears from user view until needed.
				if(rabchk.roles.cache.has("")){//R1
					rabchk.roles.remove("").catch(()=>{});
				}

				if(rabchk.roles.cache.has("")){//R2
					rabchk.roles.remove("").catch(()=>{});
				}
				
				holeguild.members.fetch();
				const chasewait = holeguild.roles.cache.get(""); //Chase3 (Role0 on other roles // this was first role and didn't think to go before 1 :D

				//This will be for moving all chasing3 to chasing1 (chasing1-->2 is above)
				chasewait.members.forEach(member => {
					member.roles.remove("").catch(()=>{});//Chase3
					member.roles.add("").catch(()=>{});//Chase1 (moves them into this bit)
				})
				setTimeout(function(){
					contchan.setName('tulgey-wood');
				}, 1500);
			}, 24007);

			if(!buffchk){
				await setTimeout(function(){
					bufferchan.send(`This is a test, please ignore.`);
				}, 22000);
			}
		}


	}
	if(dreamrole.members.size > 0 && !wakeupchk){
		const wakeupchan = await client.channels.fetch("");//Dream1 channel (temp)
		const wakeupchk = (await wakeupchan.messages.fetch({count:2})).first();
		const dreamfinchan = await client.channels.fetch("");//Dream2 channel (permanent)
		const dreamfinchk = (await dreamfinchan.messages.fetch({count:2})).first();
		await setTimeout(function(){
			wakeupchan.send(`I took a bite of it but nothing seems to be happeni...`)
			.then(m => {
				setTimeout(function(){
					m.delete();
				}, 12504);
			});
			if(!dreamfinchk){
				setTimeout(function(){
					dreamfinchan.send(`I took a bite of it but nothing seems to be happeni...`);
				}, 251);
			}
		}, 501);
		await setTimeout(function(){
			wakeupchan.send(`*Alice's eyes blink slowly and open wider as she stretches and yawns under a tree*`)
			.then(m => {
				setTimeout(function(){
					m.delete();
				}, 9503);
			});
			if(!dreamfinchk){
				setTimeout(function(){
					dreamfinchan.send(`*Alice's eyes blink slowly and open wider as she stretches and yawns under a tree*`);
				}, 251);
			}
		}, 3502);
		await setTimeout(function(){
			wakeupchan.send(`Golly... Was it all just a dream?`)
			.then(m => {
				setTimeout(function(){
					m.delete();
				}, 5502);
			});
			if(!dreamfinchk){
				setTimeout(function(){
					dreamfinchan.send(`Golly... Was it all just a dream?`);
				}, 251);
			}
		}, 7503);
		await setTimeout(function(){
			wakeupchan.send(`I guess I shouldn't worry too much about it...`)
			.then(m => {
				setTimeout(function(){
					m.delete();
				}, 2501);
			});
			if(!dreamfinchk){
				setTimeout(function(){
					dreamfinchan.send(`I guess I shouldn't worry too much about it...`);
				}, 251);
			}
		}, 10504);

		await setTimeout(function(){
			dreamrole.members.forEach(member => {
				member.roles.remove("").catch(()=>{});//Dream1
				member.roles.add("").catch(()=>{});//Dream2 role	
			});
		}, 12050);

		await setTimeout(function(){
			holeguild.members.fetch();
			const dreamwaitrole = holeguild.roles.cache.get("");//Dream3 // Waitrole (this and chasing were 3 instead of 0)
			dreamwaitrole.members.forEach(member => {
				if(member.roles.cache.has("")){//Has wait role (dream3)
					member.roles.remove("").catch(()=>{}); //remove wait role (Dream3)
					}
				member.roles.add("").catch(()=>{});//Add dream 1 role
			});
			setTimeout(function(){
				wakeupchan.setName(`daydream`);
			}, 1500);
		}, 15000);
	}
});

client.on('messageReactionAdd', async (messageReaction, userreact) => {
	await messageReaction.message.guild.members.fetch();
	const readmechan = await client.channels.fetch("");//Readme channel
	const cavechan = await client.channels.fetch("");//Cave1
	const cavechk = (await cavechan.messages.fetch({count:2})).first(); //check if cave1 has anything written
	const cave3chan = await client.channels.fetch("");//Cave3 (uh oh triggered with impatience)
	const cave3chk = (await cave3chan.messages.fetch({count:2})).first(); //check if cave3 has anything written
	const cave5chan = await client.channels.fetch("");//Cave5 (Acceptance of patience --> 2hr wait // reminder of which fruit to use when we're ready)
	const cave5chk = (await cave5chan.messages.fetch({count:2})).first(); //check if cave5 has anything written
	const readmechk = (await readmechan.messages.fetch({count:2})).first();
	const emojirem = await messageReaction.message.channel.messages.fetch(messageReaction.message).catch(() => {});
	if(userreact.id != ""){//Alison's ID for not auto-removing their reactions.
		const memchk = await messageReaction.message.guild.members.fetch(userreact.id).catch(()=>{});
		const chap5chan = await client.channels.fetch(""); //Direct ID of channel labeled 'chapter4' in the 'Hole' server.
		const ch5chk = (await chap5chan.messages.fetch({count:2})).first(); //Check if chapter4 has any messages
		
		//*Spotting the original comments should be easy as it would appear more comprehensive on the thought process of what was intending to happen (instead of explanatory in easier ways as the shorter comments are)
		if(memchk.roles.cache.has("") || memchk.roles.cache.has("")){//order 7 or 8. If 7 and [Food] - back to order 1 (or 0 if 1 is running)
		//*if 7 and not [Food] - send a message asking if they're sure that is the one they want, if they react incorrectly the dream may come to an end.
		//*if 8 and a [Food] send a message saying they chose wisely...
		//*if 8 and not a [Food] - permanently ban them
			const chkrem = await messageReaction.message.channel.messages.fetch(messageReaction.message).catch(() => {});
			await chkrem.reactions.cache.find(r => r.emoji.name = messageReaction.emoji.name).users.remove(userreact.id).catch(()=> {});
			if(messageReaction.emoji.name === '[Food]'){
				if(memchk.roles.cache.has("")){//Order7
					await memchk.roles.remove("").catch(()=>{});//Remove Order7
				}
				if(memchk.roles.cache.has("")){//Order8
					await memchk.roles.remove("").catch(()=>{});//Remove Order8
					await memchk.send(`You chose... wisely.`)
					.then(m => {
						setTimeout(function(){
							m.delete();
						}, 5000);
					})
					.catch(() =>{});
				}
				if(!cavechk){
					await memchk.roles.add("").catch(() => {}); //Add "Order1" so they can calm down a little and rest before continuing.
					await setTimeout(function(){
						cavechan.setName(`cave`);
					}, 500);
				}else{
					await memchk.roles.add("").catch(() => {}); //Add "Order0" in case cave is running.
				}
			}else{
				if(memchk.roles.cache.has("")){//Order7
					await memchk.roles.remove("").catch(()=>{});//Remove Order7
					await memchk.roles.add("").catch(()=>{});//Add Order8
					await setTimeout(function(){
						memchk.send(`Hm... Are you positive that's the reaction? We might not be allowed to continue in this place ever again if we react incorrectly...`)
						.then(m =>{
							setTimeout(function(){
								m.delete();
							}, 12000);
						})
						.catch(() =>{});
					}, 500);
				}else if(memchk.roles.cache.has("")){//Order8
					await memchk.roles.remove("").catch(()=>{});//Remove Order8
					await memchk.send(`Oops... Goodbye, my friend. I hope we get to meet again some time in the future!`)
					.then(m =>
						{
							setTimeout(function(){
								memchk.ban().catch(()=>{});
							}, 5000);
							setTimeout(function(){
								m.delete();
							}, 8000);
						})
					.catch(() =>{});
				}
			}
		}else if(memchk.roles.cache.has("") || memchk.roles.cache.has("")){//order 3 or 4 and only the X - anything else kicks them (order 5 if X or 4.5 if 5 is running)
			const chkrem = await messageReaction.message.channel.messages.fetch(messageReaction.message).catch(() => {});
			await chkrem.reactions.cache.find(r => r.emoji.name = messageReaction.emoji.name).users.remove(userreact.id).catch(()=> {});
			if(messageReaction.emoji.name === '❌'){
				if(memchk.roles.cache.has("")){//Order3
					await memchk.roles.remove("").catch(()=>{});//Remove Order3
				}
				if(memchk.roles.cache.has("")){//Order4
					await memchk.roles.remove("").catch(()=>{});//Remove Order4
				}
				if(!cave5chk){
					await memchk.roles.add("").catch(() => {}); //Add "Order5" so they can calm down a little and rest before continuing.
					await cave5chan.setName(`cave`);
				}else{
					await memchk.roles.add("").catch(() => {}); //Add "Order4.5" in case cave5 is running.
				}
			}else{
				if(memchk.roles.cache.has("")){//Order3
					await memchk.roles.remove("").catch(()=>{});//Remove Order3
				}
				if(memchk.roles.cache.has("")){//Order4
					await memchk.roles.remove("").catch(()=>{});//Remove Order4
				}
				await memchk.send(`Well... I enjoyed the time we had together, friend... Until we meet again.`)
				.then(m =>
					{
						setTimeout(function(){
							memchk.kick().catch(()=>{});
						}, 5000);
						setTimeout(function(){
							m.delete();
						}, 15000);
					})
				.catch(() =>{});
			}
		}else if(memchk.roles.cache.has("")){ //order2
			const chkrem = await messageReaction.message.channel.messages.fetch(messageReaction.message).catch(() => {});
			await chkrem.reactions.cache.find(r => r.emoji.name = messageReaction.emoji.name).users.remove(userreact.id).catch(()=> {});
			if(messageReaction.emoji.name === ''){//Ogre emoji
				await memchk.roles.remove("").catch(()=>{});//Remove Order2
				await memchk.roles.add("").catch(() => {}); //Re-add "chasing2" so they can guess the path again
				await memchk.send(`Huzzah! We made it out of the cave... But I think we should be more wary of the *order* on the **/path** we take from now on.`)
				.then(m =>
					{
						setTimeout(function(){
							m.delete();
						}, 15000);
					})
				.catch(e =>{
					if(memchk.roles.cache.has("")){//Chasing2
						memchk.roles.remove("").catch(()=>{});//Chasing2
					}
					if(!memchk.roles.cache.has("")){//Blocked role
						memchk.roles.add("").catch(()=>{}); //failed to send direct message so add the role that covers failure messages
						if(!readmechk){
							readmechan.send(`Aw shucks!`
							+`\n\nIt looks like the entrance to the area the rabbit ran to is blocked right now.` 
							+`\n\n*On closer inspection it appears there is a notice that might be able to help...*`
							+`\n\n>>> In order to proceed please turn on the ability for **Direct Messages** in your **User Settings**:`
							+`\n1a) **__Computers:__** Click the gear  (⚙️) next to your username on the bottom left of this notice. `
							+`\n1b) **__Mobile:__** Click on the face (🙂) on the bottom right of the application (it should have your visibility status attached on the bottom right of the face)`
							+`\n2) Navigate to **Privacy & Safety**`
							+`\n3) Beneath "SERVER PRIVACY DEFAULTS" toggle on *(colored in and swiped to the right)* **Allow direct messages from server members**`
							+`\n4) When prompted to apply to all existing servers select 'Yes' (You can manually change back other servers if desired)`
							+`\n\n**[Please click the checkmark below this notice once completed to begin]**`)
							.then(m => {m.react('✅')});
						}
					}

				});
			}else{
				await memchk.roles.remove("").catch(()=>{});//Remove Order2
				if(!cave3chk){
					await memchk.roles.add("").catch(() => {}); //Add Order3 ("Uh oh...")
					await setTimeout(function(){
						cave3chan.setName(`cave`);
					}, 1500);
				}else{
					await memchk.roles.add("").catch(() => {});//Add Order2.5 (waiting for previous encounter to finish)
				}
			}

		}else if(memchk.roles.cache.has("")){//Blocked role (Confirming they have updated to allow DMs)
			const chkrem = await messageReaction.message.channel.messages.fetch(messageReaction.message).catch(() => {});
			await chkrem.reactions.cache.find(r => r.emoji.name = messageReaction.emoji.name).users.remove(userreact.id).catch(() => {});
			if(messageReaction.emoji.name === '✅'){
				await memchk.roles.remove("").catch(()=>{});//Remove blocked role
				await memchk.send(`Oh, dear...`)
				.then(message =>
					{
						setTimeout(function(){
							message.delete();
						}, 60000);
					})
				.catch(()=>
					{
						if(memchk.roles.cache.has("")){//Lost
							memchk.roles.remove("").catch(()=>{});//Lost
						}
						if(!memchk.roles.cache.has("")){//Blocked (You.. you just unblocked yourself why - TESTING IS WHY!)
							memchk.roles.add("").catch(()=>{});
							if(!readmechk){
								readmechan.send(`Aw shucks!`
								+`\n\nIt looks like the entrance to the area the rabbit ran to is blocked right now.` 
								+`\n\n*On closer inspection it appears there is a notice that might be able to help...*`
								+`\n\n>>> In order to proceed please turn on the ability for **Direct Messages** in your **User Settings**:`
								+`\n1a) **__Computers:__** Click the gear  (⚙️) next to your username on the bottom left of this notice. `
								+`\n1b) **__Mobile:__** Click on the face (🙂) on the bottom right of the application (it should have your visibility status attached on the bottom right of the face)`
								+`\n2) Navigate to **Privacy & Safety**`
								+`\n3) Beneath "SERVER PRIVACY DEFAULTS" toggle on *(colored in and swiped to the right)* **Allow direct messages from server members**`
								+`\n4) When prompted to apply to all existing servers select 'Yes' (You can manually change back other servers if desired)`
								+`\n\n**[Please click the checkmark below this notice once completed to begin]**`)
								.then(m => {m.react('✅')});
							}
						}
					});
				await setTimeout(function(){
					memchk.send(`It appears we have found ourselves in a hole chasing after a rabbit with a big watch!`)
					.then(message =>
						{
							setTimeout(function(){
								message.delete();
							}, 57000);
						})
					.catch(()=>
						{
							if(memchk.roles.cache.has("")){//Lost
								memchk.roles.remove("").catch(()=>{});
							}
							if(!memchk.roles.cache.has("")){//Blocked
								memchk.roles.add("").catch(()=>{});
								if(!readmechk){
									readmechan.send(`Aw shucks!`
									+`\n\nIt looks like the entrance to the area the rabbit ran to is blocked right now.` 
									+`\n\n*On closer inspection it appears there is a notice that might be able to help...*`
									+`\n\n>>> In order to proceed please turn on the ability for **Direct Messages** in your **User Settings**:`
									+`\n1a) **__Computers:__** Click the gear  (⚙️) next to your username on the bottom left of this notice. `
									+`\n1b) **__Mobile:__** Click on the face (🙂) on the bottom right of the application (it should have your visibility status attached on the bottom right of the face)`
									+`\n2) Navigate to **Privacy & Safety**`
									+`\n3) Beneath "SERVER PRIVACY DEFAULTS" toggle on *(colored in and swiped to the right)* **Allow direct messages from server members**`
									+`\n4) When prompted to apply to all existing servers select 'Yes' (You can manually change back other servers if desired)`
									+`\n\n**[Please click the checkmark below this notice once completed to begin]**`)
									.then(m => {m.react('✅')});
								}
							}
						});
					}, 3000);
				await setTimeout(function(){
					 memchk.send(`*What's that over there?*`)
					.then(message =>
						{
							setTimeout(function(){
								message.delete();
							}, 53000);
						})
					.catch(()=>
						{
							if(memchk.roles.cache.has("")){//Lost
								memchk.roles.remove("").catch(()=>{});
							}
							if(!memchk.roles.cache.has("")){//Blocked
								memchk.roles.add("").catch(()=>{});
								if(!readmechk){
									readmechan.send(`Aw shucks!`
									+`\n\nIt looks like the entrance to the area the rabbit ran to is blocked right now.` 
									+`\n\n*On closer inspection it appears there is a notice that might be able to help...*`
									+`\n\n>>> In order to proceed please turn on the ability for **Direct Messages** in your **User Settings**:`
									+`\n1a) **__Computers:__** Click the gear  (⚙️) next to your username on the bottom left of this notice. `
									+`\n1b) **__Mobile:__** Click on the face (🙂) on the bottom right of the application (it should have your visibility status attached on the bottom right of the face)`
									+`\n2) Navigate to **Privacy & Safety**`
									+`\n3) Beneath "SERVER PRIVACY DEFAULTS" toggle on *(colored in and swiped to the right)* **Allow direct messages from server members**`
									+`\n4) When prompted to apply to all existing servers select 'Yes' (You can manually change back other servers if desired)`
									+`\n\n**[Please click the checkmark below this notice once completed to begin]**`)
									.then(m => {m.react('✅')});
								}
							}
						});
					}, 7000);
					
				await setTimeout(function(){
					 memchk.send(`It looks like... a table with a sign that says, "Eat one"`)
					.then(message =>
						{
							setTimeout(function(){
								message.delete();
							}, 50000);
						})
					.catch(()=>
						{
							if(memchk.roles.cache.has("")){//Lost
								memchk.roles.remove("").catch(()=>{});
							}
							if(!memchk.roles.cache.has("")){//Blocked
								memchk.roles.add("").catch(()=>{});
								if(!readmechk){
									readmechan.send(`Aw shucks!`
									+`\n\nIt looks like the entrance to the area the rabbit ran to is blocked right now.` 
									+`\n\n*On closer inspection it appears there is a notice that might be able to help...*`
									+`\n\n>>> In order to proceed please turn on the ability for **Direct Messages** in your **User Settings**:`
									+`\n1a) **__Computers:__** Click the gear  (⚙️) next to your username on the bottom left of this notice. `
									+`\n1b) **__Mobile:__** Click on the face (🙂) on the bottom right of the application (it should have your visibility status attached on the bottom right of the face)`
									+`\n2) Navigate to **Privacy & Safety**`
									+`\n3) Beneath "SERVER PRIVACY DEFAULTS" toggle on *(colored in and swiped to the right)* **Allow direct messages from server members**`
									+`\n4) When prompted to apply to all existing servers select 'Yes' (You can manually change back other servers if desired)`
									+`\n\n**[Please click the checkmark below this notice once completed to begin]**`)
									.then(m => {m.react('✅')});
								}
							}
						});
					}, 10000);
					
				await setTimeout(function(){
					memchk.send(`*Hm...*`)
					.then(message =>
						{ 
							memchk.roles.add("").catch(()=>{});//Add Lost
							setTimeout(function(){
								message.delete();
							}, 47000);
						})
					.catch(()=>
						{
							if(memchk.roles.cache.has("")){//Lost
								memchk.roles.remove("").catch(()=>{});
							}
							if(!memchk.roles.cache.has("")){//Blocked
								memchk.roles.add("").catch(()=>{});
								if(!readmechk){
									readmechan.send(`Aw shucks!`
									+`\n\nIt looks like the entrance to the area the rabbit ran to is blocked right now.` 
									+`\n\n*On closer inspection it appears there is a notice that might be able to help...*`
									+`\n\n>>> In order to proceed please turn on the ability for **Direct Messages** in your **User Settings**:`
									+`\n1a) **__Computers:__** Click the gear  (⚙️) next to your username on the bottom left of this notice. `
									+`\n1b) **__Mobile:__** Click on the face (🙂) on the bottom right of the application (it should have your visibility status attached on the bottom right of the face)`
									+`\n2) Navigate to **Privacy & Safety**`
									+`\n3) Beneath "SERVER PRIVACY DEFAULTS" toggle on *(colored in and swiped to the right)* **Allow direct messages from server members**`
									+`\n4) When prompted to apply to all existing servers select 'Yes' (You can manually change back other servers if desired)`
									+`\n\n**[Please click the checkmark below this notice once completed to begin]**`)
									.then(m => {m.react('✅')});
								}
							}
						});
					}, 13000);

				await setTimeout(function(){
					if(memchk.roles.cache.has("") && chap5run === 0 && !ch5chk){//This has a few checks for users with "Lost" - chap5run and ch5chk (Basically if more than one person joins quickly OR if the system needs to reset these conditions can be met either way)
						chap5run = 1;
						setTimeout(function(){
								chap5chan.send(`It looks like this is the table of assorted food.\n\n\n>>> **__Eat one__**`)
								.then(message => {
									message.react('[Food]')
								});
							}, 6000);
					}
					memchk.send(`Perhaps we should walk over to the table in the hole and **__choose one__**?`)
					.then(message =>
						{
							setTimeout(function(){
								message.delete();
							}, 45000);
						})
					.catch(()=>
						{
							if(memchk.roles.cache.has("")){//Lost
								memchk.roles.remove("").catch(()=>{});
							}
							if(!memchk.roles.cache.has("")){//Blocked
								memchk.roles.add("").catch(()=>{});
								if(!readmechk){
									readmechan.send(`Aw shucks!`
									+`\n\nIt looks like the entrance to the area the rabbit ran to is blocked right now.` 
									+`\n\n*On closer inspection it appears there is a notice that might be able to help...*`
									+`\n\n>>> In order to proceed please turn on the ability for **Direct Messages** in your **User Settings**:`
									+`\n1a) **__Computers:__** Click the gear  (⚙️) next to your username on the bottom left of this notice. `
									+`\n1b) **__Mobile:__** Click on the face (🙂) on the bottom right of the application (it should have your visibility status attached on the bottom right of the face)`
									+`\n2) Navigate to **Privacy & Safety**`
									+`\n3) Beneath "SERVER PRIVACY DEFAULTS" toggle on *(colored in and swiped to the right)* **Allow direct messages from server members**`
									+`\n4) When prompted to apply to all existing servers select 'Yes' (You can manually change back other servers if desired)`
									+`\n\n**[Please click the checkmark below this notice once completed to begin]**`)
									.then(m => {m.react('✅')});
								}
							}
						});
					}, 15000);
			}
		}else if(memchk.roles.cache.has("")){//Lost
			await memchk.roles.remove("").catch(()=>{});//remove 'lost' role (No matter what food they reacted their role will change - one chance to guess correct)
			await messageReaction.message.guild.members.fetch();
			const wakeupchan = await client.channels.fetch("");//Dream channel 1 (temp)
			const finrole = await messageReaction.message.guild.roles.cache.get("");//Chasing2 ("final" role)
			const chaserole = await messageReaction.message.guild.roles.cache.get("");//Chasing1
			await emojirem.reactions.cache.find(r => r.emoji.name = messageReaction.emoji.name).users.remove(userreact.id);
			if(messageReaction.emoji.name === '[Emoji]'){
				const bufferchan = await client.channels.fetch("");//Buffer channel - I used this to track if I was going to give rabbit2 to the rabbit and then start the "continuation" sequence 
				const buffchk = (await bufferchan.messages.fetch({})).first();
				const contchan = await client.channels.fetch("");//"tulgey-wood" - 1 (temp / messaging channel)
				const finchan = await client.channels.fetch("");//Tulgey-wood - 2 ("permanent" channel)
				const messagechk = (await contchan.messages.fetch({count:2})).first();
				const finchk = (await finchan.messages.fetch({count:2})).first();
				const rabchk = await contchan.guild.members.fetch("");//Rabbit ID

				if(messagechk){//If there is messaging going on in temp chan
					await memchk.roles.add("").catch(()=>{});//Add waiting role (chase3 / 0 for future types)
				}else{
					await memchk.roles.add("").catch(()=>{});//Otherwise add Chase1

					if(finrole.members.size < [Number] && !buffchk){//Number of users inside the last role below a set number (and "buffer chan" has nothing in it)

						await setTimeout(function(){
							contchan.send(`Well, that definitely seemed to get us through the door...\n\n`)
							.then(m => {
								setTimeout(function(){
									m.delete();
								}, 15001);
							});						
							if(!finchk){
								setTimeout(function(){
									finchan.send(`Well, that definitely seemed to get us through the door...\n\n`);
								}, 501);
							}
						}, 1000);

						await setTimeout(function(){
							contchan.send(`But where did the rabbit go...?\n\n`)
							.then(m => {
								setTimeout(function(){
									m.delete();
								}, 10002);
							});
							if(!finchk){
								setTimeout(function(){
									finchan.send(`But where did the rabbit go...?\n\n`);
								}, 501);
							}
						}, 6000);

						await setTimeout(function(){
							contchan.send(`I'm sure they were around here somewhere...\n\n`)
							.then(m => {
								setTimeout(function(){
									m.delete();
								}, 7003);
							});
							if(!finchk){
								setTimeout(function(){
									finchan.send(`I'm sure they were around here somewhere...\n\n`);
								}, 501);
							}
						}, 9000);

						await setTimeout(function(){
							contchan.send(`*Maybe we need to wait for more people to help us look?*`)
							.then(m => {
								setTimeout(function(){
									m.delete();
								}, 4004);
							});
						}, 12000);

						await setTimeout(function() {
							//Moves from Chase1->2 when the first delete goes through. (NOTE: This is separate for split processing)
							chaserole.members.forEach(member => {
								member.roles.remove("").catch(()=>{});//Chase1
								member.roles.add("").catch(()=>{}); //Chase2
							});
						}, 12500);

						await setTimeout(function() {
							messageReaction.message.guild.members.fetch();
							const chasewait = messageReaction.message.guild.roles.cache.get(""); //Chase3 (0)
						
							//This will be for moving all chasing3 to chasing1 (chasing1-->2 is above)
							chasewait.members.forEach(member => {
								member.roles.remove("").catch(()=>{});//Chase3
								member.roles.add("").catch(()=>{});//Moves from Chase3->1 and sets the name below to reset.
							});
							setTimeout(function(){
								contchan.setName('tulgey-wood');
							}, 1500);
			
						}, 19000);

					}else if(finrole.members.size >= [Number] || buffchk){
						chap5run = 1;
						await setTimeout(function(){
							contchan.send(`Well, that definitely seemed to get us through the door...\n\n`)
							.then(m => {
								setTimeout(function(){
									m.delete();
								}, 21001);
							});
						}, 1000);
						await setTimeout(function(){
							contchan.send(`But where did the rabbit go...?\n\n`)
							.then(m => {
								setTimeout(function(){
									m.delete();
								}, 16002);
							});
						}, 6000);
						await setTimeout(function(){
							contchan.send(`I'm sure they were around here somewhere...\n\n`)
							.then(m => {
								setTimeout(function(){
									m.delete();
								}, 13003);
							});
							rabchk.roles.add("").catch(()=>{});//Add rabbit1 to rabbit
							if(!buffchk){
								rabchk.roles.add("").catch(()=>{});//If nothing is written in "buffer channel" then add rabbit2
							}
							setTimeout(function(){
								contchan.setName('tulgey-wood');
							}, 1500);
						}, 9000);
						await setTimeout(function(){
							contchan.send(`There's the Rabbit!`)
							.then(m => {
								setTimeout(function(){
									m.delete();
								}, 7004);
							});
							if(!buffchk){
								setTimeout(function(){
									finchan.send(`There's the Rabbit!`);
								});
							}
						}, 15000);
						await setTimeout(function(){
							contchan.send(`\n\nWe've got to catch them! But the path appears to be *scrambled*...`)
							.then(m => {
								setTimeout(function(){
									m.delete();
								}, 5005);
							});
							if(!buffchk){
								setTimeout(function(){
									finchan.send(`\n\nWe've got to catch them! But the path appears to be *scrambled*...`);
								});
							}
						}, 17000);
						
						await setTimeout(function(){
							chaserole.members.forEach(thismem => { 
								thismem.send(`\n\nMaybe you could let me know the *order* that I should take for the **/path**?`)
								.then(m => {
									setTimeout(function(){
										m.delete();
									}, 30006);
									thismem.roles.remove("").catch(()=>{});//Chase1
									thismem.roles.add("").catch(()=>{});//Chase2
								})
								.catch(()=>	{});//No need to catch role as the hint is in the chat - no point to reset them if they try to DM alison they'll be informed 
							});
							if(!buffchk){
								setTimeout(function(){
									finrole.members.forEach(thismem => { 
										thismem.send(`\n\nMaybe you could let me know the *order* that I should take for the **/path**?`)
										.then(m => {
											setTimeout(function(){
												m.delete();
											}, 30006);
										})
										.catch(()=>{});
									});
								});
							}
						}, 21000);
						await setTimeout(function(){
							rabchk.roles.remove("").catch(()=>{});//Remove rabbit1

							if(rabchk.roles.cache.has("")){//If rabbit has rabbit2
								rabchk.roles.remove("").catch(()=>{});//Remove rabbit2
							}
							
							messageReaction.message.guild.members.fetch();
							const chasewait = messageReaction.message.guild.roles.cache.get("");//Chase3 (0)

							//This will be for moving all chasing3 to chasing1 (chasing1-->2 is above)
							chasewait.members.forEach(member => {
								member.roles.remove("").catch(()=>{});//Chase3
								member.roles.add("").catch(()=>{});//Chase1
							});
							setTimeout(function(){
								contchan.setName(`tulgey-wood`);
							}, 1500);
						}, 24000);

						if(!buffchk){
							await setTimeout(function(){
								bufferchan.send(`This is a test, please ignore.`);
							}, 23000);
						}
					}
				}
			}else{
				const wakeupchk = (await wakeupchan.messages.fetch({count:2})).first();
				const dreamfinchan = await client.channels.fetch("");//Dream channel 2
				const dreamfinchk = (await dreamfinchan.messages.fetch({count:2})).first();
				if(!wakeupchk){
					await memchk.roles.add("").catch(()=>{});//Dream1 role

					await setTimeout(function(){
						wakeupchan.send(`I took a bite of it but nothing seems to be happeni...`)
						.then(m => {
							setTimeout(function(){
								m.delete();
							}, 12504);
						});
						if(!dreamfinchk){
							setTimeout(function(){
								dreamfinchan.send(`I took a bite of it but nothing seems to be happeni...`);
							}, 251);
						}
					}, 501);
					await setTimeout(function(){
						wakeupchan.send(`*Alice's eyes blink slowly and open wider as she stretches and yawns under a tree*`)
						.then(m => {
							setTimeout(function(){
								m.delete();
							}, 9503);
						});
						if(!dreamfinchk){
							setTimeout(function(){
								dreamfinchan.send(`*Alice's eyes blink slowly and open wider as she stretches and yawns under a tree*`);
							}, 251);
						}
					}, 3502);
					await setTimeout(function(){
						wakeupchan.send(`Golly... Was it all just a dream?`)
						.then(m => {
							setTimeout(function(){
								m.delete();
							}, 5502);
						});
						if(!dreamfinchk){
							setTimeout(function(){
								dreamfinchan.send(`Golly... Was it all just a dream?`);
							}, 251);
						}
					}, 7503);
					await setTimeout(function(){
						wakeupchan.send(`I guess I shouldn't worry too much about it...`)
						.then(m => {
							setTimeout(function(){
								m.delete();
							}, 2501);
						});
						if(!dreamfinchk){
							setTimeout(function(){
								dreamfinchan.send(`I guess I shouldn't worry too much about it...`);
							}, 251);
						}
					}, 10504);

					await setTimeout(function(){
						if(memchk.roles.cache.has("")){//If they have dream1
							memchk.roles.remove("").catch(()=>{});//Remove Dream1
							memchk.roles.add("").catch(()=>{});//Dream2 role							
						}
						//Remove 
					}, 12050);

					await setTimeout(function(){
						messageReaction.message.guild.members.fetch();
						const dreamwaitrole = messageReaction.message.guild.roles.cache.get("");//All Dream3 (0) people
						dreamwaitrole.members.forEach(member => {
							if(member.roles.cache.has("")){//Has wait role
								member.roles.remove("").catch(()=>{}); //remove wait role
						 	}
							member.roles.add("").catch(()=>{});//Add dream 1 role
						});
						setTimeout(function(){
							wakeupchan.setName(`daydream`);
						}, 1500);
					}, 15000);

				}else{
					await memchk.roles.add("").catch(()=>{});//Dream wait role (dream3)
				}
			}
		}else{
			await emojirem.reactions.cache.find(r => r.emoji.name = messageReaction.emoji.name).users.remove(userreact.id).catch(() => {});
		}
	}
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;


	//This is to separate the users of "Hole" and "Server name"
	const holeguild = await client.guilds.cache.find((g) => g.id === holeID);
	await holeguild.members.fetch();
	const holerole = await holeguild.members.fetch(interaction.user);
	const bufferchan = await client.channels.fetch("");//Buff channel
	const buffchk = (await bufferchan.messages.fetch({})).first();

	const introchannel = await client.channels.fetch("");//Wait channel for U.C.E.
	const order = interaction.options.getString('order');
	const cavechan = await client.channels.fetch("");//Cave1 / order1 (temp)
	const cavechk = (await cavechan.messages.fetch({count:2})).first(); //check if cave1 has anything written

	if(holerole.roles.cache.has("") && buffchk){//Has chase2 and there's the line in buffer channel
		if (commandName === 'path'){
			if(order){
				//Could write a regex right here to bring it down to one number 
				if(order === '[Path number]' || order === '[Path number with hyphens]'){//But it is split for this program to be number and number with hyphens (representing what has been visually given to the user)
					await interaction.reply(`We've found the right path! Quickly, before it's gone forever!`);
					await setTimeout(function(){
						introchannel.createInvite({maxAge: 60, maxUses: 1}).then(introinvite =>{
							interaction.editReply(introinvite ? `https://discord.gg/` + introinvite.code : "Error?");
							setTimeout(function(){
								interaction.deleteReply();
							}, 60000);
							holerole.kick().catch(()=>{});//Kick the user from the hole as they're moving forward.
						});
					}, 5000);
				}else{
					await interaction.reply(`*Following the path ` + order + ` appears to have trapped us in a small cave...*`);
					holerole.roles.remove("").catch(() => {});//remove chasing2
					if(!cavechk){
						await holerole.roles.add("");//Set Order-1 (cave story is not currently running)
						await setTimeout(function(){
							cavechan.setName(`cave`);
						}, 1500);
					}else{
						await holerole.roles.add("");//Set Order-0 (cave story is being played)
					}
					//add order-1 role (or order-0 if "cave" is busy)
					//This will trigger the same update pattern as the other three transitions run.
					await setTimeout(function(){
						interaction.deleteReply();
					}, 6000);
				}
			}else{
				await interaction.reply(`Using the path of 1-2-3-4-5-6-7-8-9 brought us back to this spot.`);
				await setTimeout(function(){
					interaction.editReply(`Using the path of 1-2-3-4-5-6-7-8-9 brought us back to this spot.\n\nHowever, it appears we can re-arrange the order of the path...`);
				}, 5000);
				await setTimeout(function(){
					interaction.editReply(`Using the path of 1-2-3-4-5-6-7-8-9 brought us back to this spot.\n\nHowever, it appears we can re-arrange the order of the path...\n\nI wonder what *order* may be needed?`);
				}, 10000);

				await setTimeout(function(){
					interaction.deleteReply();
				}, 20000);
			}
		}else{
			await interaction.reply(`There's nothing else for us to talk about right now, let's focus on where to go.`);
			await setTimeout(function(){
				interaction.deleteReply();
			}, 5000);
		}
	}else if (holerole.roles.cache.has("") && !buffchk){//Chasing2 (without rabbit/buffer channel)
		await interaction.reply(`I think we should wait for the rabbit to appear before talking about anything.`);
		await setTimeout(function(){
			interaction.deleteReply();
		}, 5000);
	}else if (holerole.roles.cache.has("")){//Dreaming role -> Making them believe they're done
		await interaction.reply(`Hm.. seeking a path you've already found?`);
		await setTimeout(function(){
			interaction.deleteReply();
		}, 5000);
	}else if (holerole.roles.cache.has("") || holerole.roles.cache.has("")){//Chase 3 (0) and 1
		await interaction.reply(`I think there was something else we should be doing...`);
		await setTimeout(function(){
			interaction.deleteReply();
		}, 5000);
	}else if (holerole.roles.cache.has("") || holerole.roles.cache.has("") || holerole.roles.cache.has("") || holerole.roles.cache.has("") || holerole.roles.cache.has("") || holerole.roles.cache.has("") || holerole.roles.cache.has("") || holerole.roles.cache.has("") || holerole.roles.cache.has("")){ //ORDER 0-8 (stuck in the cave)
		await interaction.reply(`I believe patience is better served in the cave...`);
		await setTimeout(function(){
			interaction.deleteReply();
		}, 5000);
	}else{
		if(commandName === 'path'){//No role in hole - means you're in UCE
			interaction.reply(`Why are we talking about this again? You're already here...`);
			await setTimeout(function(){
				interaction.deleteReply();
			}, 4000);
		}
		/*else if (commandName === 'react'){ //Change it to update in-message with "Reactions: [REACTION] - NUMBER // [REACTION] - NUMBER" -- WIP (Other residents?)
			if(reactpostid && reactchannelid){
				const reactchannel = await client.channels.fetch(reactchannelid);
				const reactmsg = await reactchannel.messages.fetch(reactpostid);
				reactmsg.react(reactiontype).catch(()=>{});
				await interaction.reply('Submitted. Removing this reply in 3 seconds...');
				await setTimeout(function(){
					interaction.deleteReply();
				}, 3000);
			}else{
				await interaction.reply('Nothing to react to! (need channel and post!)');
				await setTimeout(function(){
					interaction.deleteReply();
				}, 3000);
			}
		}else if (commandName === 'help'){ // WIP - For other residents
			await interaction.reply('This message will be removed in 2 minutes.'
			+ `\n/recipe - This will allow you to create a post for the 'Recipe' channel (with appropriate ingredients)`
			+ `\n/generalpost - This will allow you to post a general message to the 'tea-time' channel (with reply options)`
			+ `\n/directmessage - This will allow you to send a direct message to permanent residents of Server Name.`
			+ `\n/reportpost - This allows you to report a post in any channel (options provided). 5 reports on a post will remove the post`)
			await setTimeout(function(){
				interaction.deleteReply();
			}, 120000);
		}else if (commandName === 'directmessage'){//??
			var dmchk = '';
			if(dmmsg){
				dmchk = dmmsg.toLowerCase().replace(/\W/g, '');
			}
			if(dmchk === 'help'){
				await interaction.reply('Asking me for help this way instead of /help? Strange. Why is that?');
				await setTimeout(function(){
					interaction.deleteReply();
				}, 8000);
			}
		}*/
	}
});

client.login(token);