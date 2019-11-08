import { RdvDetailsComponent } from '../rdv-details/rdv-details.component';
import { Observable } from "rxjs";
import { RdvService } from "../rdv.service";
import { Rdv } from "../rdv";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-rdv-list",
  templateUrl: "./rdv-list.component.html",
  styleUrls: ["./rdv-list.component.css"]
})
export class RdvListComponent implements OnInit {
  rdvs: Observable<Rdv[]>;

  constructor(private rdvService: RdvService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.rdvs = this.rdvService.getRdvsList();
  }

  deleteRdv(id: number) {
    this.rdvService.deleteRdv(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  rdvDetails(id: number){
    this.router.navigate(['home/detailsRdv', id]);
  }

  updateRdv(id: number){
    this.router.navigate(['home/updateRdv', id]);
  }
  add(){
    this.router.navigate(['home/addRdv']);
  }

}
