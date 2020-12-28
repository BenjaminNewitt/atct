import Vue from 'vue'
import Vuex from 'vuex'
import actorGroupModule from "./actorGroupModule"
import actorInstanceModule from "./actorInstanceModule"
// implement nanoId for object IDs

Vue.use(Vuex)

export default new Vuex.Store({
  //helps break up actions to clean up store
  modules: {
    actorGroupModule,
    actorInstanceModule
  },
  state: {
    // array of projects
    projects: [],
    // activeProject for info
    activeProject: {},
    // array to hold each actor instance (column)
    actorGroups: [],
    // each actor instance
    actorInstances: [],
    // translate the actor's properties for inserting into JSON
    actorInstanceText: []
  },
  mutations: {
    //generic setting of a resource by name
    setResource(state, payload) {
      state[payload.resource] = payload.data;
    }
  },
  actions: {
  }
})
