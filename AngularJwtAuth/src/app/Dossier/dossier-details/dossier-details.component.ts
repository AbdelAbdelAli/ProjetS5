import { Dossier } from '../dossier';
import { Component, OnInit, Input } from '@angular/core';
import { DossierService } from '../dossier.service';
import { DossierListComponent } from '../dossier-list/dossier-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dossier-details',
  templateUrl: './dossier-details.component.html',
  styleUrls: ['./dossier-details.component.css']
})
export class DossierDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['home/dossiers']);
  }
}
