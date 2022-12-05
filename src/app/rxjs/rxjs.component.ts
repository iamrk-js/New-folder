import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UrlSegment } from '@angular/router';
import { combineLatest, filter, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
  users: Iuser[] = [
    { id: '1', name: 'John', isActive: true },
    { id: '2', name: 'Jack', isActive: true },
    { id: '2', name: 'Mike', isActive: true },
  ];
  constructor(private http: HttpClient) { }
  users$: Observable<Iuser[]> = of(this.users)
  usernames$ = this.users$.pipe(
    map((users) => users.map((user) => user.name))
  )
  activeUser$ = this.users$.pipe(
    filter((users) => users.every((user) => user.isActive))
  )

  data$ = combineLatest([
    this.users$,
    this.usernames$,
    this.activeUser$
  ]).pipe(
    map(([users, usernames, filteredNames]) => ({
      users, usernames, filteredNames
    }))
  )
  ngOnInit(): void {
    this.data$.subscribe(console.log)
  }

}

export interface Iuser {
  id: string;
  name: string;
  isActive: boolean
}
