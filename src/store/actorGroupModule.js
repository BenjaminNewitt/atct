import { nanoid } from 'nanoid'
export default {
  actions: {

    addActorGroup ({ commit }, actorGroup) {
      actorGroup._id = nanoid();
      commit('addActorGroup', actorGroup);
    }

  }
}