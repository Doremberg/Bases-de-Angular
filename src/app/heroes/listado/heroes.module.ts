import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from '../heroe/heroe.component';
import { ListadoComponent } from './listado.component';


@NgModule({    
    // Son componentes que contenga este módulo, es un arreglo
    declarations: [
        HeroeComponent,
        ListadoComponent
       ],
    //Componenetes, Servicios, Etc., que van a ser visibles afuera de este módulo
    exports: [
        ListadoComponent
    ],
    imports: [
        // Sirve para las directivas
        CommonModule
    ]
})

export class HeroesModule {}