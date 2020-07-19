import axios from 'axios'

export default function request( config ){
  //创建axios实例
  const instance = axios.create({
    baseURL:'http://127.0.0.1:8888/api/private/v1/',
    timeout:7000
  })
  //请求拦截
  //法送请求
  return instance(config)
}