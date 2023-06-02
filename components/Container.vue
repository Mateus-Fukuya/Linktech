<template>
  <div class="container m-auto">
    <h1 class="text-4xl text-green-500 mt-3">Gerador de link de WhatsApp</h1>
    <p class="text-2xl text-slate-600 mt-3">
      Crie grátis seu link de WhatsApp em instantes! Compartilhe nos canais
      digitais para iniciar conversas em apenas um clique
    </p>
    <div class="w-60 m-auto mt-3">
      <div>
        <label class="text-green-600 text-xl mt-3">Número de WhatsApp</label>
        <input
          type="tel"
          v-model="tel"
          @input="formatTel"
          maxlength="15"
          class="text-left bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="(XX) XXXXX-XXXX"
        />
        <p class="peer-invalid:visible text-red-700 font-light" v-if="error">
          O número de telefone está inválido
        </p>
      </div>
      <div class="mt-3">
        <label class="text-green-600 text-xl mt-3">Mensagem (opcional)</label>
        <input
          type="text"
          v-model="text"
          class="text-left bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <button
        class="bg-green-600 p-3 border-green-600 rounded text-white mt-3"
        v-on:click="getLink"
      >
        Gerar Link
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Container",
  data() {
    return {
      tel: "",
      text: "",
      error: false,
    };
  },
  methods: {
    getLink() {
      if (this.error || this.tel === "") return; // Se tiver algum erro retorne

      this.tel = this.tel.replaceAll(/[^0-9]/g, ""); // Reformatando número

      // Enviando para proxima pagina
      this.$router.push({
        path: "/link",
        query: { tel: this.tel, text: this.text },
      });
    },
    isValid() {
      // Caso o telefone esteja vazio
      if (this.tel === "") {
        this.error = true; // Enviando erro
      }

      // Caso o telefone tenha o tamanho diferente de 15
      else if (this.tel.length !== 15) {
        this.error = true; // Enviando erro
      }

      // Se tudo tiver certo
      else {
        this.error = false; // Validando com sucesso!
      }
    },
    formatTel() {
      // Formatando apenas para as caracteres de um telefone
      this.tel = this.tel.replace(/\D/g, "");
      this.tel = this.tel.replace(/^0/, "");

      // Quando o telefone for maior que 10
      if (this.tel.length > 10) {
        this.tel = this.tel.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3"); // Adicionar o -
      }

      // Quando o telefone for maior que 6
      else if (this.tel.length > 7) {
        this.tel = this.tel.replace(/^(\d\d)(\d{5})(\d{0,4}).*/, "($1) $2-$3"); // Adicionar o -
      }

      // Quando o telefone for maior que 2
      else if (this.tel.length > 2) {
        this.tel = this.tel.replace(/^(\d\d)(\d{0,5})/, "($1) $2"); // Fechar Parenteses
      }

      // Ao focar no input
      else {
        this.tel = this.tel.replace(/^(\d*)/, "($1");
      }

      this.isValid(); // Validando o
    },
  },
};
</script>
