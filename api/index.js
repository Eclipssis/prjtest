export const axios_fake = (method, url, payload) => {
  console.log('Send API request', {method, url, payload})
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve({
        success: true,
        code: 200
      })
    }, 1200);
  })
}