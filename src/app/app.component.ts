import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize } from "rxjs/operators";
@Component({
  selector:'app-root',
  templateUrl:'app.component.html',
  styleUrls:['app.component.scss'],
})
export class AppComponent {
  file:String
  downloadURL: any;
  fb: any;
  filename: any;
  constructor(private afStorage: AngularFireStorage , private firestore: AngularFirestore ,private af : AngularFireDatabase) { }
  upload(event) { 
    const file = event.target.files[0];
    this.file = file.name
    this.filename = event.target.files[0];
  }

  uploadImage(){
    console.log(this.file);
    const upload = this.afStorage.upload(`/images/${this.file}`, this.filename);
    const filePath = `/images/${this.file}`;
    const fileRef = this.afStorage.ref(filePath)
    upload.snapshotChanges().pipe(
      finalize(()=>{
        this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log("x");
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log("url subss");
        }
      });
    const tutorial = { title:  `${this.file}`, url: `${this.fb}`};
    this.firestore.collection('Image').add(tutorial);
    this.firestore.collection('Image').valueChanges().subscribe((data)=>{
      console.log(data)
    })
  }
}