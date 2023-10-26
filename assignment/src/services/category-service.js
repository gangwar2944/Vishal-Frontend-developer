async function fetchDataWithDelay(apiUrl){
  await new Promise(resolve=> setTimeout(resolve,1000));
  const response = await fetch(apiUrl);
  return response;
}
export async function getAPIData(queryString) {
    // console.log("status :" , status);
    // console.log("type :" , type);
    // console.log("original_launch :" , original_launch);
    console.log("queryString",queryString);
    let apiUrl;
    if(queryString===''){
        apiUrl = 'https://api.spacexdata.com/v3/capsules';
    }else{
        apiUrl = `https://api.spacexdata.com/v3/capsules?${queryString}`;
    }
 
    try {
      const response = await fetchDataWithDelay(apiUrl);
      if (!response.ok) {
        throw new Error('API request failed');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  