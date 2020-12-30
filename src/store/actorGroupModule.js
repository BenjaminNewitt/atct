import { nanoid } from 'nanoid'
export default {
  actions: {

    addActorGroup ({ commit, dispatch }, actorGroup) {
      actorGroup._id = nanoid();
      commit('addActorGroup', actorGroup);
      dispatch('addGroupEntryToActorInstances', actorGroup._id)
    },
    addGroupEntryToActorInstances ({commit}, actorGroupId) {
      commit('addGroupEntrytoActorInstances', actorGroupId);
    }
  }
}