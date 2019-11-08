import { DossierDetailsComponent } from '../dossier-details/dossier-details.component';
import { Observable } from "rxjs";
import { DossierService } from "../dossier.service";
import { Dossier } from "../dossier";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-dossier-list",
  templateUrl: "./dossier-list.component.html",
  styleUrls: ["./dossier-list.component.css"]
})
export class DossierListComponent implements OnInit {
  dossiers: Observable<Dossier[]>;

  constructor(private dossierService: DossierService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.dossiers = this.dossierService.getDossiersList();
  }

  deleteDossier(id: number) {
    this.dossierService.deleteDossier(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  dossierDetails(id: number){
    this.router.navigate(['home/detailsDossier', id]);
  }

  updateDossier(id: number){
    this.router.navigate(['home/updateDossier', id]);
  }
  add(){
    this.router.navigate(['home/addDossier']);
  }

}
