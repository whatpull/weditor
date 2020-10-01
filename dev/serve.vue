<script>
import Vue from 'vue';
import { Weditor } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    Weditor
  }
});
</script>

<template>
  <div id="app">
    <weditor />
  </div>
</template>
