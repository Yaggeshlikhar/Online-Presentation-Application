//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Output, HostListener, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }
//defining properties of component so as to be binded with html element
  selectedFile = null;
  url: string;
  static lastselectedid: string = "";
  height = 0;
  width = 0;


//Event listener on click of add text button
  addText(event) {
 //getting the parent div element 
    var element1 = document.getElementById("item1");
    var id = null;
    //creating a new element
    var div = document.createElement('p');
    div.id = 'dragText';
    //styling the text area 
    div.style.border = '2px solid black';
    //making the text box draggable
    div.draggable = true;
    div.style.position = 'fixed';
    div.style.top = '200px';
    div.style.left = '200px';
    div.style.height = '100px';
    div.style.width = '100px';
    div.style.resize = 'both';
    div.contentEditable = 'true';
    div.style.overflow = 'auto';
    //attaching event listener on drag event of text box
    div.addEventListener('drag', function (e) {
      var lastID = e.currentTarget as HTMLInputElement;

      DragDropComponent.lastselectedid = lastID.id;
      console.log(DragDropComponent.lastselectedid);
      e.dataTransfer.setData('text', lastID.id);

    }, true);
//appending the text box to parent element
    element1.appendChild(div);

  };
//Event listener on adding image button click
  addImage(event) {
    //making the choosen file as selected file
    this.selectedFile = event.target.files[0];

    if (event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
//setting the url property with the target file chosen
      this.url = event.target.files[0];

      reader.readAsDataURL(event.target.files[0]);
      this.height = 200;
      this.width = 200;
    }


  }
//Refer to https://www.w3schools.com/html/html5_draganddrop.asp

//event listener on drag event
  drag(event) {
  //setting the last selected id property with the value of target element id which invoked the event
    DragDropComponent.lastselectedid = event.target.id;
   // sets the data type and the value of the dragged data:
    event.dataTransfer.setData('text', event.target.id);

  }
//called on ondragover event
  allowDrop(event) {
    //To allow a drop, we must prevent the default handling of the element which does not allow to drop an element into another
    event.preventDefault();
  }
//event listener which gets invoked on drop of element
  drop(event) {

    event.preventDefault();
    let data = event.dataTransfer.getData('text');
  //getting the element by id
    let el = document.getElementById(DragDropComponent.lastselectedid);
    //setting the left and top postions of the text box or image
    el.style.left = event.pageX + 'px';
    el.style.top = event.pageY + 'px';




  }


}
