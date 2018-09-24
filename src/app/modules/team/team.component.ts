import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import {BaseComponent} from '../../core/base.component';
import {UserService, TeamService} from '../../core';

import { DataTable, DataTableResource } from 'angular5-data-table';

import {
  Team
} from '../../core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-default',
  templateUrl: './team.component.html'
})
export class TeamComponent extends BaseComponent {
  private teams: [Team];

  private closeResult: string
  modal: any;
    
  constructor
  (
    private userService: UserService,
    private teamService: TeamService,
    private router: Router,
    private modalService: NgbModal
  ) {super()}

  open(content) {
    this.modal = this.modalService.open(content, {}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  close(){
    this.modal.close();
  }

  ngOnInit() {
    this.setNavigation(
      'Teams', 
      [{name: 'Team', link: '/team', type : 'active'}]
    );
  }
}
