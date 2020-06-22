import {
    getIndex
} from '@/api/index'

const state = {
    homeList: {},
}

const mutations = {
    'IMFI_HOME'(state, homeList) {
        state.homeList = homeList
    },
   
}

const actions = {
    async getHomeList({
        commit
    }) {
        let result = await getIndex()
        commit('IMFI_HOME',result.data)
    }
}

const getters = {

}


export default {
    state,
    mutations,
    actions,
    getters
}