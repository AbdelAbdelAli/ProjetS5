import { Component, OnInit } from '@angular/core';
import { Dossier } from '../dossier';
import { ActivatedRoute, Router } from '@angular/router';
import { DossierService } from '../dossier.service';

@Component({
  selector: 'app-update-dossier',
  templateUrl: './update-dossier.component.html',
  styleUrls: ['./update-dossier.component.css']
})
export class UpdateDossierComponent implements OnInit {

  id: number;
  dossier: Dossier;

  constructor(private route: ActivatedRoute,private router: Router,
    private dossierService: DossierService) { }

  ngOnInit() {
    this.dossier = new Dossier();

    this.id = this.route.snapshot.params['id'];

    this.dossierService.getDossier(this.id)
      .subscribe(data => {
        console.log(data)
        this.dossier = data;
      }, error => console.log(error));
  }

  updateDossier() {
    this.dossierService.updateDossier(this.id, this.dossier)
      .subscribe(data => console.log(data), error => console.log(error));
    this.dossier = new Dossier();
    this.gotoList();
  }

  onSubmit() {
    this.updateDossier();
  }

  gotoList() {
    this.router.navigate(['home/dossiers']);
  }
}
