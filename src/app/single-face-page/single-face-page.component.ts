import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../service/face-snaps.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-page',
  templateUrl: './single-face-page.component.html',
  styleUrls: ['./single-face-page.component.scss']
})
export class SingleFacePageComponent implements OnInit {


  @Input() faceSnap!: FaceSnap;
  click !: boolean;

  ngOnInit() {
    this.click = false;
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  constructor(private faceSnapsService: FaceSnapsService,
              private route:ActivatedRoute) {}

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
}

