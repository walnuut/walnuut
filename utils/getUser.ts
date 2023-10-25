import { fetch } from 'undici';

export async function get(access_token: string) {
  try {
    const userInfo = await fetch('https://discord.com/api/users/@me', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (userInfo.statusCode !== 200) {
      throw new Error(`User info request failed with status code: ${userInfo.statusCode}`);
    }

    const user = await userInfo.body?.json();
    return user;
  } catch (error) {
    console.error('Error while fetching user:', error);
    throw error;
  }
}
