import { observable, action, computed } from 'mobx';

class Store {
  @observable birds = [];     //property koji želimo pratiti
      
  //dodajemo bird u array linija koda 4, action - modify the data
  @action addBird = (bird) => {
      this.birds.push(bird);

  }
   //vrati koliko ima ptica u nizu, computed function svaki puta kada radimo sa observable u ovom slučaju birds, radimo filtriranje ili izračun i kada želimo da observable bude u realnom vremenu sa komponentom, imamo ćeliju a i b u c je izračun koji zbraja a+b, kada recimo promjenimo a ćeiju automatski se c sum ćelija promjeni 
  @computed get birdCount = ()  {
      return this.birds.length;

  }

}

//kreiram varijablu store = kreiram novu Store instancu (new Store)
const store = new Store();
//eksportitam instancu od store
export default store;