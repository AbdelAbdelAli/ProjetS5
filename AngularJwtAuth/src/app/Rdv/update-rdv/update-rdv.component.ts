import { Component, OnInit } from '@angular/core';
import { Rdv } from '../rdv';
import { ActivatedRoute, Router } from '@angular/router';
import { RdvService } from '../rdv.service';

@Component({
  selector: 'app-update-rdv',
  templateUrl: './update-rdv.component.html',
  styleUrls: ['./update-rdv.component.css']
})
export class UpdateRdvComponent implements OnInit {

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

  updateRdv() {
    this.rdvService.updateRdv(this.id, this.rdv)
      .subscribe(data => console.log(data), error => console.log(error));
    this.rdv = new Rdv();
    this.gotoList();
  }

  onSubmit() {
    this.updateRdv();
  }

  gotoList() {
    this.router.navigate(['home/rdvs']);
  }
}
