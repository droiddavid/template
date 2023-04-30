import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuItem } from 'src/app/types/menuitem';

@Injectable({
	providedIn: 'root'
})
export class HeaderService {

	private title = new Subject<any>();
	title_$ = this.title.asObservable();

	private menuItems = new Subject<any>();
	menuItems_$ = this.menuItems.asObservable;

	private headerData = new Subject<any>();
	headerData$ = this.headerData.asObservable();

	constructor() { }

	raiseEvent(event: any): void {
		this.headerData.next(event);
	}

	processLink(link: any) {
		let icon = this.getIcon(link);
		let title = this.getTitle(link);
		let menu: MenuItem[] = this.getMenuItems(link);
	}

	getIcon(link: string) {
		return link;
	}
	getTitle(link: string) {
		return link;
	}
	getMenuItems(link: MenuItem[]) {
		let menuItems: MenuItem[] = link;
		return menuItems;
	}


	newMenuItem(): MenuItem {
		return {
			liClass: "navbar-nav me-auto mb-2 mb-lg-0",
			aClasses: ["nav-item", "nav-link"],
			routerLink: "",
			text: "",
			href: ''
		} as MenuItem;
	}

	
	changeTitle(state: any) {
		this.headerData.next(state);
	};
	changeMenuItems(state: any) {
		this.headerData.next(state);
	};
}