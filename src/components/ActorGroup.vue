<template>
  <div id="ActorGroup" class="ActorGroup col-3 border border-dark border-2">
    <form>
      <input
        v-model="actorGroupData.title"
        type="text"
        class="form-control"
        placeholder="Group"
        @submit.prevent="renameActorGroup()"
      />
    </form>
    <button
      class="btn btn-sm btn-ice fw-bold border border-dark"
      @click="createNewActorInstance()"
    >
      New Actor
    </button>
    <!-- need to check overflow -->
    <div class="row">
      <ActorInstanceComponent
        v-for="actorInstance in actorInstances"
        :key="actorInstance._id"
        :actorInstanceData="actorInstance"
        class="col-12 mb-2"
      />
    </div>
  </div>
</template>

<script>
import ActorInstanceComponent from "@/components/ActorInstance";
export default {
  name: "ActorGroup",
  props: ["actorGroupData"],
  components: { ActorInstanceComponent },
  data() {
    return {
      newActorInstance: {
        title: "",
        notes: "",
        color: "",
        // properties will live in an object, an array wouldn't be specific enough, and keeping properties in order would be tricky
        actorProperties: {},
        groupId: this.actorGroupData._id,
      },
    };
  },
  computed: {
    actorInstances() {
      return this.$store.state.actorInstances[this.actorGroupData._id] || [];
    },
  },
  methods: {
    createNewActorInstance() {
      let actorInstance = { ...this.newActorInstance };
      this.$store.dispatch("addActorInstance", actorInstance);
      actorInstance.title = "";
      actorInstance.notes = "";
    },
    renameActorGroup() {
      console.log(this.actorGroupData.title);
    }
  },
};
</script>
