import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent{

  elements: NavElements[] = [
    {
      label: 'Inicio',
      route: ''
    },
    {
      label: 'Habilidades',
      route: 'habilidades'
    },
    {
      label: 'Proyectos',
      route: 'proyectos'
    },
    {
      label: 'Contacto',
      route: 'contacto'
    }
  ]

  navElements: boolean = false;
  @Output() activeSidenav = new EventEmitter<boolean>()

  open() {
    this.navElements = true;
    this.activeSidenav.emit(true)
  }
  close() {
    this.navElements = false;
    this.activeSidenav.emit(false)
  }
}

interface NavElements {
  label: string;
  route: string;
}