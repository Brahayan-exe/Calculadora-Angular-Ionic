import { Component, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class Tab2Page {

operacion: string= "";
  constructor() { }

  agregar(tecla: string){
    this.operacion += tecla
  }

  borrar(){
    this.operacion = "";
  }

  calcular() {
    try {
      this.operacion = eval(this.operacion).toString(); // Convertir resultado a string
    } catch (error) {
      this.operacion = "Error"; // Mensaje si hay un error en la expresión
    }
  }
  
  elevarCuadrado() {
    try {
      this.operacion = (eval(this.operacion) ** 2).toString();
    } catch (error) {
      this.operacion = "Error";
    }
  }


}
