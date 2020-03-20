import axios from 'axios'

export async function handler(event, context, callback) {
  const data = await axios.get(
    'https://covaid19.azurewebsites.net/api/Data/GetCustomerData'
  )
  // console.log(data.data)

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ areas: data.data }),
  })
}
