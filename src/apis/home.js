import http from '@/utils/http'

export function getBannerAPI (distributionSite='1') {
    return http.get('/home/banner',{params:{distributionSite}})
}

// export function getNewApi () {
//     return http.get('/home/new')
// }
export const getNewAPI = () => {
    return http.get('/home/new')
}

export function getHotAPI () {
    return http.get('/home/hot')
}

export function getGoodsAPI () {
    return http.get('/home/goods')
}