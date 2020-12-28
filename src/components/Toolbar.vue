<template>
  <div id="Toolbar" class="col-12">
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
      newActorGroup.id = nanoid();
      newActorGroup.actorInstances = [];
    }
  }
}
</script>