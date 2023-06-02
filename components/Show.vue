<template>
  <div class="container m-auto">
    <h1 class="text-4xl text-green-500 mt-3">Link Gerado</h1>
    <div
      class="max-h-36 overflow-auto border-1 rounded border-slate-300 bg-slate-300 w-full text-black-300 md:w-1/2 m-auto mt-3 p-5"
    >
      <a :href="link" target="_blank" class="break-words">{{ link }}</a>
    </div>
    <div class="flex justify-around m-auto md:w-1/2 mt-5">
      <button
        class="bg-green-400 p-2 rounded text-white"
        @click="copyToClipBoard"
      >
        Copiar Link
      </button>
      <NuxtLink to="/">
        <button class="bg-blue-400 p-2 rounded text-white">
          Gerar Novo Link
        </button>
      </NuxtLink>
    </div>
    <div
      class="bg-blue-200 border-blue-500 text-black p-4 mt-3 md:w-1/4 w-1/2 m-auto"
      v-if="alert"
    >
      <p class="font-bold">Copiado!</p>
      <p>Seu link foi copiado para a sua área de transferencia.</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Show",
  data() {
    return {
      link: "https://api.whatsapp.com/send?phone=55",
      alert: false,
    };
  },
  mounted() {
    const query = this.$route.query; // Todos os query params

    // Adicionando o telefone ao link como string
    this.link += query.tel as string;

    // Se o texto não estiver vazio
    if ((query.text as string) !== "") {
      // Adicionando o text ao link
      this.link += `&text=${query.text as string}`;
    }
  },
  methods: {
    copyToClipBoard() {
      // Copiando link para área de transferencia
      navigator.clipboard
        .writeText(this.link)
        .then(() => {
          // Alerta positivo
          this.alert = true;
        })
        .catch((error) => {
          // Retornando erro
          console.error("Erro ao copiar variável:", error);
        });
    },
  },
};
</script>
