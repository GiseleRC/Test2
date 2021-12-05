import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import List from './classes/List'
import Task from './classes/Task'

Vue.use(Vuex)

const database = new VuexORM.Database()

database.register(Task)
database.register(List)

export default new Vuex.Store({
  plugins: [VuexORM.install(database)]
})