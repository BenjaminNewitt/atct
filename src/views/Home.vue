<template>
  <div class="home container-fluid bg-ice">
    <div class="row">
      <!-- toolbar component -->
      <Toolbar />
    </div>
    <div class="row">
      <!-- give a little space -->
      <div class="col-10 mx-auto">
          <!-- array of actorGroups components -->
          <ActorGroup v-for="actorGroup in actorGroups" :key="actorGroup._id" :actorGroupData="actorGroup"></ActorGroup>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ActorGroup from "@/components/ActorGroup";
import Toolbar from "@/components/Toolbar";
export default {
  name: "Home",
  components: { ActorGroup, Toolbar },
  computed: {
    actorGroups() {
      return this.$store.state.actorGroups;
    }
  }
};
</script>

<style scoped>

</style>
