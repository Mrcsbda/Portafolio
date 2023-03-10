import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: ProjectInformation[] = [
  {
    title: 'Calculator App',
    text: 'Aplicación con la cual puedes realizar las operaciones básicas talescomo sumas, restas, multiplicaciones y divisiones.',
    class: 'project p1',
    imgProject: '../../assets/projects/Calculadora.png',
    demo: 'https://calculatorapp-lx0wzdk0f-mrcsbda.vercel.app/',
    codigo: 'https://github.com/Mrcsbda/Calculator-App',
    imgTecnologias: '../../assets/projects/technologiesColorPurple.svg',
  },
    {
    title: 'Advices generator',
    text: 'Aplicación que trae anuncios aleatorios y el número del anuncio correspondiente.',
    class: 'project p2',
    imgProject: '../../assets/projects/Anuncios.png',
    demo: 'https://advice-generator-qrzn5ogxm-mrcsbda.vercel.app/',
    codigo: 'https://github.com/Mrcsbda/Advice-generator-App',
    imgTecnologias: '../../assets/projects/technologiesColorWhite.svg',
  },
  {
    title: 'Encriptador',
    text: 'Aplicación con la cual puedes encriptar y desencriptar un texto; el texto que desees desencriptar debe haber sido encriptado anteriormente en la aplicación. ',
    class: 'project p1',
    imgProject: '../../assets/projects/Encriptador.png',
    demo: 'https://mrcsbda.github.io/Encriptador/',
    codigo: 'https://github.com/Mrcsbda/Encriptador',
    imgTecnologias: '../../assets/projects/technologiesColorPurple.svg',
  },
  ]

}

interface ProjectInformation {
  title: string;
  text: string;
  class: string;
  imgProject: string;
  demo: string;
  codigo: string;
  imgTecnologias: string;
}