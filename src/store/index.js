import {createStore} from 'vuex'
import state from './state'
import mutations from './mutations'

export default createStore({
    state,
    getters: {
        doubleCity(state) {
            return state.city + ' ' + state.city
        }
    },
    mutations,
    actions: {},
    modules: {}
})
