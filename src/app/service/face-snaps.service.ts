import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService{
  mySnap: FaceSnap[] = [
    {
      id: 1,
      title: 'Topo',
      description: 'I am working on my dream !',
      createdDate: new Date(),
      snaps: 6,
      imageUrl: 'https://media-exp1.licdn.com/dms/image/C4D03AQGYdqaFAURKrw/profile-displayphoto-shrink_400_400/0/1649386529963?e=1666828800&v=beta&t=z2hgaCBWDny7QOPPsnyvcGt4ZgZ5wVOtp_Yh5aN1MKs',
      location: 'Rabat'
    },
    {
      id: 2,
      title: 'Sima',
      description: 'I Love her',
      createdDate: new Date(),
      snaps: 7,
      imageUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQGsunRoyI0PaQ/profile-displayphoto-shrink_400_400/0/1639178194943?e=1666828800&v=beta&t=42szSV5s9viDdvdLkD9mxQPcYL1pBHdKmb5UzhV1Cn0',
      location: 'Casablanca'
    },
    {
      id: 3,
      title: 'oldMe',
      description: 'Hate him',
      createdDate: new Date(),
      snaps: 200,
      imageUrl: 'https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/281528248_3247751938880292_711587685616274159_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGuacDsFaIWjoHyNtr6byG-6oVVi8HIdUHqhVWLwch1QSe3ADAJbsLRZZDfH9vZXBQGb7uIpm0MhMrgmg9gNqBV&_nc_ohc=uO8at_a6PQQAX-gcAxi&_nc_zt=23&_nc_ht=scontent-mad1-1.xx&oh=00_AT_Wj1hkHnHScBt-nb0JCEbyVZ9HtjjnFKws9vAy4Cd9qQ&oe=630DD2F0'
    }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.mySnap;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.mySnap.find(faceSnap => faceSnap.id === faceSnapId);
    if(!faceSnap)
    {
      throw new Error('FaceSnap not found');
    }
    else
    {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: Boolean) : void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === true ? faceSnap.snaps++ : faceSnap.snaps--;
  }

}
