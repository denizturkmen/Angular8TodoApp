import { Component } from '@angular/core';
import { Model ,TodoItem} from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  model = new Model();
  isDisplay=false;
  
  getName(){
    return this.model.user;
  }

  getItems(){
    //return this.model.items;
    //return this.model.items.filter(item =>item.action); //action yes olan gelir
    if(this.isDisplay){
      return this.model.items;
    }

    return this.model.items.filter(item => !item.action); //action no olan gelir
  }
  addItem(value) {
    if (value!="") {
      this.model.items.push(new TodoItem(value,false));
    }
  }
}
