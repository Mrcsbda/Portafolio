import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skillInformation: SkillInformation[] = [
    {
      image: '../../assets/skills/HTML.svg',
      alt: 'HTML5',
      p: 'HTML5'
    },
    {
      image: '../../assets/skills/CSS.svg',
      alt: 'CSS3',
      p: 'CSS3'
    },
    {
      image: '../../assets/skills/JavaScript.svg',
      alt: 'JavaScript',
      p: 'JavaScript'
    },
    {
      image: '../../assets/skills/TypeScript.svg',
      alt: 'TypeScript',
      p: 'TypeScript'
    },
    {
      image: '../../assets/skills/Angular.svg',
      alt: 'Angular',
      p: 'Angular'
    },
    {
      image: '../../assets/skills/SASS.svg',
      alt: 'Sass',
      p: 'Sass'
    },
    {
      image: '../../assets/skills/Git.svg',
      alt: 'Git',
      p: 'Git'
    },
    {
      image: '../../assets/skills/GitHub.svg',
      alt: 'Github',
      p: 'GitHub'
    },
    {
      image: '../../assets/skills/Responsive.svg',
      alt: 'Responsive Websites',
      p: 'Responsive Websites'
    },
    {
      image: '../../assets/skills/Illustrator.svg',
      alt: 'Illustrator',
      p: 'Illustrator'
    }
  ]

}

interface SkillInformation {
  image: string;
  alt: string;
  p: string;
}
