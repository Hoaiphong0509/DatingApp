import { LikesParams } from './../_models/likesParams';
import { Pagination } from './../_models/pagination';
import { MembersService } from './../_services/members.service';
import { Member } from './../_models/member';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  members: Partial<Member[]>;
  pagination: Pagination;

  predicate: string = 'liked'
  pageNumber: number = 1;
  pageSize: number = 5;

  constructor(private memberService: MembersService) {

  }

  ngOnInit(): void {
    this.loadLikes()
  }

  loadLikes(){
    this.memberService.getLikes(this.predicate, this.pageNumber, this.pageSize).subscribe(response => {
      this.members = response.result;
      this.pagination = response.pagination;
    })
  }

  pageChanged(event: any){
    this.pageNumber = event.page;
    this.loadLikes();
  }

}
