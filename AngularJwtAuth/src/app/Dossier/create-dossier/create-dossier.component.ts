import { DossierService } from '../dossier.service';
import { Dossier } from '../dossier';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-dossier',
  templateUrl: './create-dossier.component.html',
  styleUrls: ['./create-dossier.component.css']
})
export class CreateDossierComponent implements OnInit {

  dossier: Dossier = new Dossier();
  submitted = false;

  constructor(private dossierService: DossierService,
    private router: Router) { }

  ngOnInit() {
  }

  newDossier(): void {
    this.submitted = false;
    this.dossier = new Dossier();
  }

  save() {
    this.dossierService.createDossier(this.dossier)
      .subscribe(data => console.log(data), error => console.log(error));
    this.dossier = new Dossier();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  List() {
    this.router.navigate(['home/dossiers']);
  }

  gotoList() {
    this.router.navigate(['home/dossiers']);
  }
}
