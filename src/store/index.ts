import { createStore } from 'vuex'
// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            isNewPage: false
        }
    },
    mutations: {
        goNewpage(state) {
            state.isNewPage = true
        },
        reNewPage(state){
            state.isNewPage = false

        }
    }
})
export default store