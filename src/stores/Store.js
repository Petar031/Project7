import { observable, action, computed } from 'mobx';
import vehicleMakes from "./VehicleMakes";
import vehicleModels from "./VehicleModels";

// observable property that is read during the execution of a tracked function - ono što želimo nadgledati
//computed - are values that can be derived from the existing state of other computed values. They are very similar to formulas in spreadsheet
// action - is function where you change the value of the property which we observeaa


//https://www.leighhalliday.com/create-react-app-mobx-decorators -- bird example
//https://www.youtube.com/watch?v=Dp75-DnGFrU - bird example








const stores = observable ({
  vehicleMakes,
  vehicleModels
});

export default stores;


/*class Store {
  @observable TableMake = [

  //ubaciti iz tableMake i TableModel array - https://www.youtube.com/watch?v=ZAVSxBXnTr4 , minuta 3.00

];     //property koji želimo pratiti

  //dodajemo bird u array linija koda 4, action - modify the data
  @action addTableMake = (TableMake) => {    //is a function where you change the value of th property which we observe  (u zagradu stavljam ono što observamo)
      this.table.push(TableMake);

  }
   //vrati koliko ima ptica u nizu, computed function svaki puta kada radimo sa observable u ovom slučaju birds, radimo filtriranje ili izračun i kada želimo da observable bude u realnom vremenu sa komponentom, imamo ćeliju a i b u c je izračun koji zbraja a+b, kada recimo promjenimo a ćeiju automatski se c sum ćelija promjeni 
  @computed get TableMakeCount = () => {
      return this.table.lenght;

  }

}

//kreiram varijablu store = kreiram novu Store instancu (new Store)
const store = new Store();
//eksportitam instancu od store
export default store;


//nakon navedenog potrebno provjeriti index.js i kod app.js - https://www.youtube.com/watch?v=Dp75-DnGFrU - - u mome slučaju vjerujem da mijenjam TableMake i ostale komponente prema navedenom primjeru


// na slijedećoj poveznici prikazan primjer kako izvjesti filter i id u mobx-u https://www.youtube.com/watch?v=nYvNqKrl69s  */