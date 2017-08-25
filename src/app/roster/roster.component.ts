import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from "@angular/router";
import { MemberService } from '../member.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  providers: [MemberService]
})
export class RosterComponent implements OnInit {

  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
    console.log(this.router.url);
  }

 goToDetailPage(clickedMember) {
   this.router.navigate(['members', clickedMember.$key]);
 };

}
