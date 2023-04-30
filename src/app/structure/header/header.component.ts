import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, AfterViewInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { HeaderService } from 'src/app/services/subjects/header.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


	@ViewChild('navbarToggler') navbarToggler!: ElementRef;
	@ViewChild('thelist') thelist!: ElementRef;


	@Input() icon!: string;
	@Input() title!:string;
	@Input() menu!:string;
	@Input() menuItems!:any;


	@Output() onTitleChange = new EventEmitter<string>();
	@Output() onMenuItemChange = new EventEmitter<any>();


	isLoggedIn: boolean = false;


	constructor(private headerService: HeaderService) {
		
	}


	ngOnInit(): void {}


	AfterViewInit() {
		if (this.thelist.nativeElement.classList.contains('show')) {
			this.thelist.nativeElement.classList.remove('show');
			this.navbarToggler.nativeElement.setAttribute('aria-expanded', 'false');
		}
	}


	toggler() {
		if (this.thelist.nativeElement.classList.contains('show')) {
			this.thelist.nativeElement.classList.remove('show');
			this.navbarToggler.nativeElement.setAttribute('aria-expanded', 'false');
		} else {
			this.thelist.nativeElement.classList.add('show');
			this.navbarToggler.nativeElement.setAttribute('aria-expanded', 'true');
		}
	}


	menuNavigate(routerLinkName:any) {

		// let _navBar = document.getElementsByClassName("navbar-collapse");
		// if(_navBar.length > 0) {
		// 	_navBar[0].classList.remove("show");
		// }

		this.onMenuItemChange.emit(routerLinkName);
		this.onTitleChange.emit(routerLinkName);
	}


	signOut () {
		this.isLoggedIn = false;
		localStorage.clear();
		localStorage.setItem(
			"isLoggedIn", 
			GlobalService.encode(
				JSON.stringify(
					{
						"isLoggedIn" : this.isLoggedIn
					}
				)
			)
		);
	}
}