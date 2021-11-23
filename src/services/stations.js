import axios from 'axios';

const FFX_SERVICE_HOST = process.env.VUE_APP_FFX_SERVICE_HOST;

function getStationsList() {
  axios.get(FFX_SERVICE_HOST + "/station/list")
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.log(error)
  })
}
  
export { getStationsList };