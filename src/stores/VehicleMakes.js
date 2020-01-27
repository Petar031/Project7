/*import { observable, action } from 'mobx';*/
import { observable } from 'mobx';
import { Component } from "react";
/*import { autorun } from "mobx"; */ /*for testing */

/*import { create } from 'mobx-persist';*/

class VehicleMakes extends Component {
    //novo test
   
@observable allVehicleMakes = [
        { name: 'Opel Ampera', id: '03246', abrv: 'OP - AM', year: 2011 },
        { name: 'Opel Tigra', id: '03244', abrv: 'OP - TI', year: 2000 },
        { name: 'Opel Karl', id: '03224', abrv: 'OP - KA', year: 2015 },
        { name: 'Mazda Challenge', id: '02244', abrv: 'MA - CH', year: 2017 },
        { name: 'Mazda3 Sedan', id: '01244', abrv: 'MA - SE', year: 2018 },
        { name: 'Ford Mondeo', id: '74565', abrv: 'FO - MO', year: 2017 },
    ]; 

    

    /*@action exampleFunc = () => {
		console.log("Invoked action!");
    }; */


    /*@action change_me(){
        this.me = 'test 1';
    }
    
    constructor(props) {
        super(props)
        this.on_change = this.on_change.bind(this)
      } */

/*@observable allVehicleMakes = []; */


/*@action
addVehicleMakes = VehicleMake => {
  this.VehicleMakes.push(VehicleMake);
};*/



/*addVehicleMakes = (props)=> {
    console.log(props);
    const name = prompt("The name:")
    const id   = prompt("The salary:")
    const abrv = prompt("The name:")
    const year = prompt("The salary:")
    this.props.store.VehicleMakesStore.updateElement({name, id, abrv, year})
}

clearList = ()=> {
    this.props.store.VehicleMakes = []
  }*/
    



/*@persist ('list') @observable name = "string"
@persist('list')  @observable id = "number"
@persist ('list') @observable abrv ="string"
@persist ('list') @observable year ="string"*/
// definirati kao map, list ili object


/*U OVOM DIJELU ĆU DODAVATI STORE LOGIKU  https://www.youtube.com/watch?v=bXAuiEviGuI   - prioritet pratiti dio sa youtubea
https://codesandbox.io/s/jp882l3m2w !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
https://stackoverflow.com/questions/38665179/mobx-with-react-store-not-reflected-in-observer
https://egghead.io/lessons/react-pass-observable-data-through-props-in-mobx - kreator Mobxa
https://codesandbox.io/s/jp882l3m2w - primjer update tablice
https://stackoverflow.com/questions/51272656/mobx-not-updating-when-state-changes
https://github.com/mobxjs/mobx-react/issues/548
https://stackoverflow.com/questions/45840393/mobx-not-updating-react-view-when-pushing-to-an-array - istestirati ovu stranicu ima sličnosti sa mojim primjerom
https://stackoverflow.com/questions/41207491/how-to-set-new-values-to-whole-mobx-observable-array - mogu uzeti i ovo kao primjer za testiranje
https://stackoverflow.com/questions/53697326/adding-actions-to-mobx-observable-array - primjer koji mogu uzeti također
https://alligator.io/react/mobx-react-native-simplified/ - ovdje imam primjer cijelog napravljenog projekta !!!!!!!!!
https://dev.to/acro5piano/to-pass-mobxs-observable-array-to-flatlist-slice-is-needed-2b45 rad sa arrayima
https://www.google.com/search?rlz=1C1GGRV_enHR781HR878&ei=DP0cXrPBLIKrmwW6mrHoAQ&q=update+table+react+mobx&oq=update+table+react+mobx&gs_l=psy-ab.3...3090.3920..4039...0.0..0.104.600.2j4......0....1..gws-wiz.wyzIHNIeC2s&ved=0ahUKEwiz9-2h3YHnAhWC1aYKHTpNDB0Q4dUDCAs&uact=5

https://hackernoon.com/how-to-build-your-first-app-with-mobx-and-react-aea54fbb3265 - !!!!!!!!!! jedan od boljih primjera !!!!!!
https://auth0.com/blog/managing-the-state-of-react-apps-with-mobx/ - još jedan primjer !!!!!!

https://medium.com/@shoaibbhimani1392/getting-started-with-mobx-82306df92d90  - ovdje imam dobar primjer koji mogu iskoristiti za onClick kako bi sve funkcioniralo
https://www.youtube.com/watch?v=xH4gjT1F0fM - pogledati ovaj video !!!!!!!!!!!!!!!!!!!!!!!!!!
https://www.leighhalliday.com/create-react-app-mobx-decorators !!!!!!!! - jedan od najboljih za MobX pogledati i njegov primejer
upisivati how to create react mobx aplicattion in google

https://stackoverflow.com/questions/54332111/updating-data-in-a-table-react-material-ui - ovdje mogu pokupiti određene ideje za stvaranje storea !!!!!!!!!!!!! ima prikazan način da update tablice
https://stackoverflow.com/questions/55479943/how-to-make-reusable-react-mobx-components - pokušati istestirati ovaj dio ovo bi moglo upaliti 


https://stackoverflow.com/questions/54332111/updating-data-in-a-table-react-material-ui - moj dio
https://stackblitz.com/edit/react-qoqxw7?file=TableExample.js - primjer tablice najsličnija mojoj
138 stranica tamo se nalzi kada se koristi točno ACTION - morat ću ga koristiti pogledati završni primjer u knjizi kako je riješen
https://github.com/benawad/basic-react-form/tree/4_table/src - iskoristiti ovu strukturu za svoj projekt
https://github.com/mobxjs/mobx/issues/300 - proučiti navedenu poveznicu
https://stackoverflow.com/questions/57265567/any-way-to-make-a-react-presentational-component-react-to-mobx-store-changes - jedan segment koji bi mogao meni pomoći material table
https://codesandbox.io/s/400yw6yj2w - koristiti i ove elemente, dobar primjer također
https://stackoverflow.com/questions/52018404/mobx-does-not-rerender-after-an-item-in-observable-array-has-changed - detaljnije pojašnjen primjer iz linka iznad
https://stackoverflow.com/questions/tagged/mobx?sort=votes - na jednom mjestu se nalaze svi mogući upiti za MobX

ovdje se nalazi riješenje moga problema - https://github.com/mobxjs/mobx/issues/997 ako pronađem način kako ću koristiti button !!!!!!!!!!!!!!!!
https://codesandbox.io/s/7j9krpx9l1 - primjer kreiranja storea na drugačiji način
https://www.youtube.com/watch?v=Vj27n1ekPJY - icons with store
https://verify.evi1cg.me/package/mobx-react - primjer sa upotrebom storea
googleti react mobx material table



https://github.com/mobxjs/mobx/issues/997 - bilo bi dobro kada bi nešto ovako izveo

https://www.youtube.com/watch?v=Hy0Xg6p1VB4 - novi video prikazuje primjer storea !!!!!!!!!!!!!!!!!!

https://iconof.com/best-practices-for-mobx-with-react/#5-keep-your-actions-in-mobx-stores
*/





} //zagradu lijevo ne diram ni slučajno
export default VehicleMakes;



/*example @action
https://www.youtube.com/watch?v=bXAuiEviGuI u ovom dijelu na 2:30 minuti se spominje action - ispod od osnivača mobx odgovoreno daa ipak to nebi trebalo navoditi
*/

// for testing a code
/*autorun(() => {
    console.log (VehicleMakes)
}) */


/*hydrate('vehicleMakes', VehicleMakes)
    
    .then(() => console.log('some hydrated')) */
//https://github.com/pinqy520/mobx-persist/issues/53 - objašnjenje problema - potrebno definirati kojeg tipa je polje

/*export class VehicleMakes extends Component{

    @observable allVehicleMakes = [
        { name: 'Opel Ampera', id: '03246', abrv: 'OP - AM', year: 2011 },
        { name: 'Opel Tigra', id: '03244', abrv: 'OP - TI', year: 2000 },
        { name: 'Opel Karl', id: '03224', abrv: 'OP - KA', year: 2015 },
        { name: 'Mazda Challenge', id: '02244', abrv: 'MA - CH', year: 2017 },
        { name: 'Mazda3 Sedan', id: '01244', abrv: 'MA - SE', year: 2018 },
        { name: 'Ford Mondeo', id: '74565', abrv: 'FO - MO', year: 2017 },
    ];
}

*/
