import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'app/services/user.service';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-admin-data',
  templateUrl: './admin-data.component.html',
  styleUrls: ['./admin-data.component.scss'],
})
export class AdminDataComponent implements OnInit {

  nombre = '';
  apellido = '';
  img='';

  constructor(private userService: UserService) { }

  ngOnInit() {}

  onSubmit(form: NgForm){
    this.userService.updateUser(localStorage.getItem('user'), this.nombre, this.apellido, this.img);


  }

}
