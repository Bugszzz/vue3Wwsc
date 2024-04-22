import http from "@/utils/http";


export function getTopCategoryAPI(id){
    return http.get('/category',{params:{id}});
}

export function getCategoryFilterAPI(id){
    return http.get('/category/sub/filter',{params:{id}});
}


/**
 * @description: 获取二级分类商品列表
 * @data {
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   }
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
    return http.post('/category/goods/temporary',data);
}