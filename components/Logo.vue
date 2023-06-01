<template>
  <div class="w-full flex justify-center">
    <a :href="link" class="mt-2">
      <img :src="img" alt="Logo TypeCodes" />
    </a>
  </div>
</template>

<script lang="ts">
export default {
  name: "Logo",
  props: ["img", "link"],
};
</script>
