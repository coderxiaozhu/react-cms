let BASE_URL = '';
let TIMEOUT = 5000;

if(process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://152.136.185.210:4000'
}else if(process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://152.136.185.210:4000'
}

export { BASE_URL, TIMEOUT }
