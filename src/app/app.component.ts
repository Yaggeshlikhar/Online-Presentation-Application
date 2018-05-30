import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// public imageSrc = 'https://image.freepik.com/free-icon/upload-arrow_318-26670.jpg';
  
// onDropHandler(object){
//    console.log("event "+ JSON.stringify(object));
//    this.imageSrc = object.event.target.result;
// }

fileToUpload: File = null;
Name:string; 
myFile:File; /* property of File type */
handleFileInput(files: FileList) {
this.fileToUpload = files.item(0);
}

}
