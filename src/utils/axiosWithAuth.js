import axios from 'axios';

export const axiosWithAuth = () => {

  const token = localStorage.getItem('token');
  
  
  return axios.create({
    baseURL: 'https://med-cab-bw.herokuapp.com/',
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth