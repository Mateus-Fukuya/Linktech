<template>
  <div>
    <img src="./image/TypeCodeIcon.png" alt="Logo TYpeCodes">
    <div class="container">
      <div v-if="showInput === false">
        <h1>Gerador de link de WhatsApp</h1>
        <h3>Crie grátis seu link de WhatsApp em instantes! Compartilhe nos canais digitais para iniciar conversas em apenas um clique</h3>
        <h3>WhatsApp</h3>
        <input type="text" class="input" v-model="inputValue" placeholder="(99)9999.9999"/>
        <h3>Sua mensagem (opcional)</h3>
        <input type="text" class="input" v-model="compValue" placeholder="Mensagem Inicial"/>
        <br/>
        <button class="button" @click="handleButtonClick">Criar link</button>
      </div>
      <div v-else>
        <h2>Link Gerado</h2>
        <a>{{ this.link }}</a>
        <br/>
        <button class="button" @click="copyVariable">Copiar Link</button>
        <br/>
        <button class="button" @click="resetShowInput">Gerar Novo Link</button>
      </div>
    </div>
  </div>
  <footer>
    <h3>TypeCodes</h3>
  </footer>
</template>

<script>

export default{
    data() {
      return {
        linkB: 'https://api.whatsapp.com/send?phone=55',
        link: '',
        showInput: false,
        inputValue: '',
        compValue: ''
      };
    },
    methods: {
      handleButtonClick() {
      if (this.compValue === '') {
        this.link = this.linkB + this.inputValue;
        console.log(this.link);
      } else {
        const newComp = this.compValue.replace(/ /g, '%20');
        this.link = this.linkB + this.inputValue + '&text=' + newComp;
        console.log('A empresa foi preenchida: ' + this.compValue);
        console.log(this.link);
      }
      if (this.inputValue.length >= 10) {
        this.showInput = true;
      } else {
        alert("O campo WhatsApp deve ter pelo menos 10 dígitos.");
      }
        // console.log(`https://api.whatsapp.com/send?phone=55${this.inputValue}`);
    },
    copyVariable() {
      navigator.clipboard.writeText(this.link)
        .then(() => {
          alert("Variável copiada para a área de transferência!");
        })
        .catch((error) => {
          console.error("Erro ao copiar variável:", error);
        });
    },
    resetShowInput() {
      this.showInput = false;
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  background-color: #ECE5DD;
  padding: 20px;
}

.input {
  width: 100%;
  max-width: 300px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.button {
  background-color: #25D366;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
