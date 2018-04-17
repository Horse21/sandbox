import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '@h21/h21.core.ui/services/http-client.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  dataSource = [{name: 'a', value: 'b'}];

  constructor(private http: HttpClientService) {
  }

  ngOnInit() {

  }

  onClick() {
    this.http.get('https://github.com/vknet/vk/issues/549#issuecomment-361266517').subscribe();
  }
}
