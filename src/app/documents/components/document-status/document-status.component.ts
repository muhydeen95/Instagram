import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentDTO } from 'app/documents/models/documents.model';
import { DocumentService } from 'app/documents/services/document.service';
import { ResponseModel } from 'app/models/response.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-document-status',
  templateUrl: './document-status.component.html',
  styleUrls: ['./document-status.component.scss'],
})
export class DocumentStatusComponent implements OnInit {
  public toggled: boolean = false;
  public message: string = '';
  public userChats = [
    {
      id: 1,
      user: 'recipient',
      message: 'Lorem ipsum dolor sit amet,',
      time: '2:00pm',
    },
    {
      id: 2,
      user: 'sender',
      message: 'Lorem ipsum dolor sit amet,',
      time: '2:05pm',
    },
    {
      id: 3,
      user: 'recipient',
      message:
        'Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming can be done using a variety of computer programming languages, such as JavaScript, Python, and C++.,',
      time: '2:10pm',
    },
    {
      id: 4,
      user: 'recipient',
      message:
        'that tell a computer how an be done using a variety of computer programming languages, such as JavaScript, Python, and C++.,',
      time: '2:12pm',
    },
    {
      id: 5,
      user: 'sender',
      message:
        'that tell a computer how an be done using a variety of computer programming languages, such as JavaScript, Python, and C++.,',
      time: '2:35pm',
    },
    {
      id: 6,
      user: 'recipient',
      message:
        'that tell a computer how an be done using a variety of computer programming languages, such as JavaScript, Python, and C++.,',
      time: '2:35pm',
    },
    {
      id: 7,
      user: 'sender',
      message:
        'that tell a computer how an be done using a variety of computer programming languages, such as JavaScript, Python, and C++.,',
      time: '2:35pm',
    },
  ];

  private sub: Subscription = new Subscription();
  public documentDetail!: DocumentDTO;
  public loading: boolean = false;
  public docId: number = 0;
  constructor(
    private _docService: DocumentService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const param: any = this.activatedRoute.params;
    this.docId = param['value'].id;
    this.getDocumentDetail(this.docId);
  }

  public getDocumentDetail(id: number): void {
    this.loading = true;
    this.sub.add(
      this._docService.getDocumentByIdRequest(id).subscribe({
        next: (res: ResponseModel<DocumentDTO>) => {
          this.loading = false;
          this.documentDetail = res.response;
        },
        error: (error: ResponseModel<null>) => {
          this.loading = false;
        },
      })
    );
  }

  handleSelection(event: any) {
    this.message += event.char;
  }

  submit() {
    let date = new Date();
    let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    let am_pm = date.getHours() >= 12 ? 'pm' : 'am';
    hours = hours < 10 ? 0 + hours : hours;
    let minutes =
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let time = hours + ':' + minutes + ' ' + am_pm;
    const chat = {
      id: 5,
      user: 'sender',
      message: this.message,
      time: time,
    };
    if (this.message != '') {
      this.userChats.push(chat);
    }
    this.message = '';
  }
}
