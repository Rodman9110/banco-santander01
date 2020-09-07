import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contacts-list-shared',
  templateUrl: './contacts-list-shared.component.html',
  styleUrls: ['./contacts-list-shared.component.css']
})
export class ContactsListSharedComponent implements OnInit {


  @Input() contacts: any[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.contacts);

  }

}
