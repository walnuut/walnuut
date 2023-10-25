import { fetch } from 'undici';

export async function get({
  clientId,
  clientSecret,
  redirectUri,
  scope,
  code,
}: {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  scope: string;
  code: string;
}) {
  try {
    const tokenParams = new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUri,
      scope: 'identify email guilds guilds.join',
    }).toString();

    const tokenInfo = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: tokenParams,
    });


    const token = await tokenInfo.json();
    return token;
  } catch (error) {
    console.error('Error while fetching token:', error);
    throw error;
  }
}
