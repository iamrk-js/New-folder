import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-t-form',
  templateUrl: './t-form.component.html',
  styleUrls: ['./t-form.component.scss']
})
export class TFormComponent implements OnInit {
  @ViewChild("userForm") userForm !: NgForm;
  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(userForm: NgForm) {
    // console.log(userForm);
    console.log(this.userForm);
  }
}
