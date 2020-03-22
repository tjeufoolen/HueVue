<template>
    <div 
        class="scene" 
        :style="{ background }"
        @click="setScene()"
    >
        <h2>{{ formattedName }}</h2>
    </div>
</template>

<script>
import gradient from 'random-gradient';

export default {
    props: ["id", "name", "group"],

    methods: {
        setScene() {
            this.$hueService.setScene(this.group, this.id);
        }
    },

    computed: {
        background: function() {
            return gradient(this.name, "vertical");
        },

        formattedName: function() {
            return this.name.charAt(0).toUpperCase() + this.name.slice(1);
        }
    }
}
</script>

<style lang="scss" scope>
.scene {
    background: #ececec;
    border-radius: 6px;
    display: flex;
    padding: 30px 20px;
    margin: 5px;
    width: 100%;

    h2 {
        font-size: 18px;
        margin: 0 auto;
        color: white;
    }

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }

    @media (min-width: 576px) { 
        width: 40%;
    }

    @media (min-width: 1200px) { 
        width: 20%;
    }
}
</style>