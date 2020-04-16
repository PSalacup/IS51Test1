import { Component, OnInit } from '@angular/core';
import { FlexModalService } from './shared-components/flex-modal/flex-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'final';
  aboutText = 'This application is designed by Paul Salacup (c) 2020';
  constructor(private flexModal: FlexModalService) {

  }

  ngOnInit() {
  }


showHelpText() {
  this.flexModal.openDialog('about-modal');

}

}
