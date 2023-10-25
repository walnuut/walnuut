import { fetch } from 'undici';


export async function get({
  access_token,
  botToken,
  guildId,
  userId
}: {
  access_token: string;
  botToken: string;
  guildId: string;
  userId: string;
}) {
  try {

	const guildInfo = await fetch(`https://discord.com/api/guilds/${guildId}/members/${userId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bot ${botToken}`
  },
  body: JSON.stringify({
    access_token: `${access_token}`
  })
});
  
    const guild = await guildInfo.json();
    return guild;
    
  } catch (error) {
    console.error('Error during joining guild:', error);
    throw error;
  }
}
