import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-house-form',
  templateUrl: './house-form.component.html',
  styleUrls: ['./house-form.component.css']
})
export class HouseFormComponent implements OnInit {

  form: FormGroup;
  response;
  image;

  constructor(private formBuilder: FormBuilder, private homeService: HomeService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      houses:[]
    });
  }

  onFileSelectec(event){
    if(event.target.files.length > 0) {
      const file = event.target.files[0]
    }
  }

}
