import { nanoid } from 'nanoid'
export default {
  actions: {

    addActorInstance ({ commit }, actorInstance) {
      actorInstance._id = nanoid();
      commit('addActorInstance', actorInstance);
    }

  }
}