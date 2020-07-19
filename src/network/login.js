import request from './request'

export function loginRequest( data ){
  return request({
    url:'login',
    method:'POST',
    data
  })
}