import axios from 'axios';

const FFX_SERVICE_HOST = process.env.VUE_APP_FFX_SERVICE_HOST;

async function getStationsList() {
  try {
    let response = await axios.get(FFX_SERVICE_HOST + "/station/list")
    return response.data;
  } 
  catch (err) {
    console.error(err);
    return undefined;
  }
}
  
export { getStationsList };