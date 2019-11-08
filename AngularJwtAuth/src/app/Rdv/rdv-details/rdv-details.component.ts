import { Rdv } from '../rdv';
import { Component, OnInit, Input } from '@angular/core';
import { RdvService } from '../rdv.service';
import { RdvListComponent } from '../rdv-list/rdv-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rdv-details',
  templateUrl: './rdv-details.component.html',
  styleUrls: ['./rdv-details.component.css']
})
export class RdvDetailsComponent implements OnInit {

  id: number;
  rdv: Rdv;

  constructor(private route: ActivatedRoute,private router: Router,
    private rdvService: RdvService) { }

  ngOnInit() {
    this.rdv = new Rdv();

    this.id = this.route.snapshot.params['id'];

    this.rdvService.getRdv(this.id)
      .subscribe(data => {
        console.log(data)
        this.rdv = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['home/rdvs']);
  }
}
