import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-status',
  templateUrl: './document-status.component.html',
  styleUrls: ['./document-status.component.scss']
})
export class DocumentStatusComponent implements OnInit {
  public userChats = [
    {id: 1, user: 'recipient',  message: 'Lorem ipsum dolor sit amet,', time: '2:00pm'},
    {id: 2, user: 'sender',  message: 'Lorem ipsum dolor sit amet,', time: '2:05pm'},
    {id: 3, user: 'recipient',  message: 'Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming can be done using a variety of computer programming languages, such as JavaScript, Python, and C++.,', time: '2:10pm'},
    {id: 3, user: 'recipient',  message: 'that tell a computer how an be done using a variety of computer programming languages, such as JavaScript, Python, and C++.,', time: '2:12pm'},
    {id: 3, user: 'sender',  message: 'that tell a computer how an be done using a variety of computer programming languages, such as JavaScript, Python, and C++.,', time: '2:35pm'},
    {id: 3, user: 'recipient',  message: 'that tell a computer how an be done using a variety of computer programming languages, such as JavaScript, Python, and C++.,', time: '2:35pm'},
    {id: 3, user: 'sender',  message: 'that tell a computer how an be done using a variety of computer programming languages, such as JavaScript, Python, and C++.,', time: '2:35pm'},
  ]

  constructor() { }

  ngOnInit() {
  }

  submit(event: any) {
    console.log(event.value)
  }

}
