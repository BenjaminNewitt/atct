<template>
  <div id="Toolbar" class="col-12 py-3 border-bottom border-4 border-dark">
    <button class="btn btn-ice fw-bold border border-dark" @click="createNewActorGroup()">New Group</button>
    <!-- will take up top part of window all the way across -->
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  data() {
    return {
      newActorGroup: {
        title: "",
        notes: ""
      }
    }
  },
  methods: {
    createNewActorGroup () {
      let actorGroup = { ...this.newActorGroup};
      this.$store.dispatch("addActorGroup",actorGroup);
     actorGroup.title = "";
     actorGroup.notes = "";
    }
  }
}
</script>