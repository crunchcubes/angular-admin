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

import {NgbModal,NgbModalRef, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalContent } from  './modal-content.component';


@Component({
  selector: 'app-team',
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
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }

  protected getDismissReason(reason: any): string {
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
//https://stackblitz.com/angular/xxlxmbednyv?file=app%2Fmodal-component.ts