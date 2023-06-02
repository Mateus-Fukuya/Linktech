<template>
  <div class="w-full">
    <Logo img="/img/TypeCodeIcon.png" link="typecodes.com.br" />
    <div class="w-100 bg-slate-200 p-5">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
};
</script>
