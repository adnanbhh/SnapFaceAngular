import {Component, OnInit, Input} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../service/face-snaps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap;
  click !: boolean;

  ngOnInit() {
    this.click = false;
  }

  constructor(private faceSnapsService: FaceSnapsService,
              private router: Router) {}

  onAddSnaps()
  {
    if(this.click == false)
    {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, true);
      this.click = true;
    }
    else
    {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, false);
      this.click = false;
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl( `mySnap/${this.faceSnap.id}`);
  }
}
