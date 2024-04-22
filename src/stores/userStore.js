import { loginAPI } from '@/apis/user'
import { useCartStore } from './cartStore'
import { mergeCartAPI } from '@/apis/cart'
export const useUserStore = defineStore('user', () => {
    // 1. 定义管理用户数据的state
    const userInfo = ref({})
    // 2. 定义获取接口数据的action函数
    const cartStore = useCartStore()
    const getUserInfo = async (user) => {
        const res = await loginAPI(user)
        userInfo.value = res.result
        //合并购物车
        await mergeCartAPI(cartStore.cartList.map(item=>{
            return{
                skuId: item.skuId,
                selected: item.selected,
                count: item.count
            }
        }))
        // //刷新购物车列表
        // cartStore.updateNewList();
        cartStore.updateLoginCartList()
    }
    // 退出时清除用户信息
    const clearUserInfo = () => {
        userInfo.value = {}
    }
    // 3. 以对象的格式把state和action return
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},{
    persist:true
}
)