const app = Vue.createApp({
  data() {
    return {
      selectedAnimalType: "",
      animals: [],
    };
  },
  methods: {
    async fetchAnimals() {
      this.animals = []; 
      if (this.selectedAnimalType) {
        try {
          const response = await fetch(`${this.selectedAnimalType}.json`);
          if (!response.ok) {
            throw new Error("Erro ao carregar os dados");
          }
          this.animals = await response.json();
        } catch (error) {
          console.error(error);
        }
      }
    },
  },
});

app.mount("#app");



