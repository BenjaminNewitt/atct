<template>
  <div id="ActorGroup" class="col-3 border border-dark border-2">
    <button class="btn btn-sm btn-ice fw-bold border border-dark" @click="createNewActorInstance()">New Actor</button>
<!-- need to check overflow -->
<ActorInstance v-for="actorInstance in actorInstances" :key="actorInstance._id" :actorInstanceData="actorInstance"></ActorInstance>
  </div>
</template>

<script>
import ActorInstance from "@/components/ActorInstance";
export default {
  name: 'ActorGroup',
  props: ["actorGroupData"],
  components: { ActorInstance },
  data() {
    return {
      newActorInstance: {
          title: "",
          notes: "",
          groupId: this.actorGroupData._id
      }
    }
  },
  computed: {
    actorInstances() {
      return this.$store.state.actorInstances[this.actorGroupData._id] || [];
    }
  },
  methods: {
    createNewActorInstance () {
      let actorInstance = { ...this.newActorInstance };
      this.$store.dispatch("addActorInstance", actorInstance)
      actorInstance.title = "";
      actorInstance.notes = "";
    }
  }
}
</script>