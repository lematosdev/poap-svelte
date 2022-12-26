import axios from 'axios';

export const getAccessToken = async (): Promise<string> => {
  try {
    const response = await axios(
      'https://6lz6vyjs0e.execute-api.us-east-1.amazonaws.com/access-token'
    );

    const { access_token } = await response.data;

    return access_token;
  } catch (error) {
    console.log(error);
    return '';
  }
};
