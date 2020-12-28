<template>
  <div id="Toolbar" class="col-12 py-3 border-bottom border-4 border-dark">
    <button class="btn btn-ice fw-bold border border-dark" @click="createNewActorGroup()">New Group</button>
    <!-- will take up top part of window all the way across -->
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  name: 'Toolbar',
  methods: {
    createNewActorGroup () {
      let newActorGroup = {};
      newActorGroup._id = nanoid();
      newActorGroup.title = "";
      newActorGroup.notes = "";
      this.$store.dispatch("addActorGroup", newActorGroup)
    }
  }
}
</script>