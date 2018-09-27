

import { Component} from '@angular/core';
import { Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'ngbd-modal-content',
    templateUrl: './modal.component.html'
  })
  export class NgbdModalContent {
    @Input() name;
    constructor(public activeModal: NgbActiveModal) {}
  } 