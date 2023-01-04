import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>

    <h3>La base es: <strong>{{base}}</strong></h3>
    <!--Cuando abrimos parentesis, es para usar un evento-->
    <button (click)="acumular(base)">+ {{base}}</button>
    
    <span>{{numero}}</span>
    
    <button (click)="acumular(-base)">- {{base}}</button>
    `
})

export class ContadorComponent {
    title: string = 'Contador App';
    numero: number = 10;
    base: number = 5;
    
    //Acumular sustituye sumar y restar
    acumular(valor: number){
       this.numero += valor;
    }
    /*sumar(){
     this.numero += 1;
    }
   
    restar(){
     this.numero -= 1;
    }*/
   
    /*TAREA:
       1- crear propiedad llamada base: number.
       2- Se inicializa en 5.
       3- Enviar la base como parametro al acumulador.
    */
}