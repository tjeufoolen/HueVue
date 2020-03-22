<template>
  <div class="scene-list">
    <h1>Scenes</h1>
    
    <div class="scenes">
      <Scene 
        v-for="scene in scenes" 
        
        v-bind:id="scene.id"
        v-bind:name="scene.name" 
        v-bind:group="scene.group" 
        
        v-bind:key="scene.key"
      ></Scene>
    </div>
  </div>
</template>

<script>
import Scene from './Scene';

export default {
  name: 'SceneList',
  
  data() {
    return {
      scenes: [] 
    }
  },

  components: {
    Scene
  },

  created() {
    this.scenes = this.$hueService.getScenes();
  }
}
</script>

<style lang="scss" scope>
.scene-list {
  text-align: center;
  font-weight: 900;
  font-size: 1.4rem;

  .scenes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>