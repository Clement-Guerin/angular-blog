import {Component} from '@angular/core';
import {Post} from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [new Post('Mike Ross',
    'Just found this new app that tells you which of your family members are racist. It\'s called Facebook.',
    0),
    new Post('Harvey Specter',
      'Write the name of someone you hate on your body everyday in permanent marker, ' +
      'so no matter how you die they\'ll become a suspect.',
      0),
    new Post('Tommy Shelby',
      'Why do we call it truth or dare when we all know it\'s really "Who do you like" or "Awkward sexual task".',
      0)
  ];

  constructor() {
  }
}
