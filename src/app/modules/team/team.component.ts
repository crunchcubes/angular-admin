import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import {BaseComponent} from '../../core/base.component';
import {UserService, TeamService} from '../../core';

import { DataTable, DataTableResource } from 'angular5-data-table';
import { Input } from '@angular/core';
import {
  Team
} from '../../core';

import {NgbActiveModal, NgbModal,NgbModalRef, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';





@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal.component.html'
})
export class NgbdModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) {}
}


@Component({
  selector: 'app-default',
  templateUrl: './team.component.html'
})
export class TeamComponent extends BaseComponent {
  private teams: [Team];

  private closeResult: string
  private modal: NgbModalRef;
    
  constructor
  (
    private userService: UserService,
    private teamService: TeamService,
    private router: Router,
    private modalService: NgbModal
  ) {super()}

  open(content) {
    /*this.modal = this.modalService.open(content, {});
    
    this.modal.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });*/

    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  protected close(content):void{
    this.modal.close();
  }

  protected dismiss(content):void{
    this.modal.dismiss();
  }

  ngOnInit() {
    this.setNavigation(
      'Teams', 
      [{name: 'Team', link: '/team', type : 'active'}]
    );
  }
}


//https://ng-bootstrap.github.io/#/components/modal/examples
//https://blog.angular-university.io/angular-ng-template-ng-container-ngtemplateoutlet/