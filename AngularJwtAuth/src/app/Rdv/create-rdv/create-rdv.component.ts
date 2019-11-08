import { RdvService } from '../rdv.service';
import { Rdv } from '../rdv';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-rdv',
  templateUrl: './create-rdv.component.html',
  styleUrls: ['./create-rdv.component.css']
})
export class CreateRdvComponent implements OnInit {

  rdv: Rdv = new Rdv();
  submitted = false;

  constructor(private rdvService: RdvService,
    private router: Router) { }

  ngOnInit() {
  }
  List() {
    this.router.navigate(['home/rdvs']);
  }
  newRdv(): void {
    this.submitted = false;
    this.rdv = new Rdv();
  }

  save() {
    this.rdvService.createRdv(this.rdv)
      .subscribe(data => console.log(data), error => console.log(error));
    this.rdv = new Rdv();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['home/rdvs']);
  }
}
