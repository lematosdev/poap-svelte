import axios from 'axios';

export const getAccessToken = async (): Promise<string> => {
  try {
    const response = await axios(
      import.meta.env.VITE_API_URL
    );

    const { access_token } = await response.data;

    return access_token;
  } catch (error) {
    console.log(error);
    return '';
  }
};
