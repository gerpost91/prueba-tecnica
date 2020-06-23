import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/services.index';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styles: [
  ]
})
export class UserProfileComponent implements OnInit {

  usuario: any;

  constructor(private user: UserService, private router: ActivatedRoute) { }


  ngOnInit(): void {
    // pasa por url el id
    this.router.params.subscribe(params => {
      this.getUser(params.id);
    });
  }


  getUser(id: any) {
    this.user.getUser(id).subscribe((data: any) => {
      this.usuario = data.user;
      console.log(this.user);
    });

  }




}
