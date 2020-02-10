import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {
  
  info: any = {};
  cargada:boolean = false;

  equipo: any = [];
  cargada_sobre_nosotros: boolean = false;

  constructor(public http: HttpClient) {
    this.carga_info();
    this.cargar_sobre_nosotros();
  }

  public carga_info(){
    this.http.get("assets/data/info.pagina.json")
      .subscribe(data => {

        /**console.log(data);*/
        this.info = data;
        this.cargada = true;
      });      
  }

  public cargar_sobre_nosotros(){
    this.http.get('https://civic-badge-254923.firebaseio.com/equipo.json')
      .subscribe(data =>{
        
        console.log(data)
        this.equipo = data[0];
        this.cargada_sobre_nosotros = true;
      });
  }

   
}
