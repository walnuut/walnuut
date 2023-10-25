import { fetch } from 'undici';

export async function get(access_token: string) {
  try {
    const userInfo = await fetch('https://discord.com/api/users/@me', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });


    const user = await userInfo.json();
    return user;
  } catch (error) {
    console.error('Error while fetching user:', error);
    throw error;
  }
}
