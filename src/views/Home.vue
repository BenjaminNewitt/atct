<template>
  <div class="home container-fluid">
    <div class="row">
      <!-- toolbar component -->
      <Toolbar />
    </div>
    <div class="row">
      <!-- give a little space -->
      <div class="col-11 mx-auto">
        <div class="row">
          <!-- array of actorGroups components -->
          <ActorGroup />
        </div>
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
};
</script>
