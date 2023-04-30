import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class MenuItemService { //MenuRoutes

	/*
		routeConfig = new Map<string,{icon: string, title: string, menu: string}>();
		routeConfig.set('/home', {icon: 'home-icon.png', title: 'Home', menu: 'Home Menu'});
		routeConfig.set('/about', {
			icon: 'about-icon.png', 
			title: 'About Us', 
			menu: 'About Us Menu'
		});
	*/


	//rxjs map operator to convert an array of strings to an array of MenuItem objects
	menuItemMap = new Map([
		['dashboard', { liClass: 'nav-item', aClasses: ['nav-link'], routerLink: '/dashboard', text: 'Dashboard', href: '' }],
		['logout', { liClass: 'nav-item', aClasses: ['nav-link'], routerLink: '/logout', text: 'Logout', href: '' }],
		['profile', { 
				"icon": 'profile-icon.png', 
				"title": 'Profile', 
				"menuItem": { 
					iClass: 'nav-item', 
					aClasses: ['nav-link'], 
					routerLink: '/profilemenu', 
					text: 'Profile', 
					href: ''
				}
			}
		]
		//... add other menu items
	]);


	private menuMap = new Map([
		['/', ['dashboard', 'logout']],
		['/profilemenu', ['dashboard', 'profile', 'logout']],
		['/phonenumbers', ['dashboard']],
		['/profileEdit', ['dashboard', 'profile', 'logout']],
		//... add other routes
	]);
 
	getMenuArray(url: string, url_param: string) {
		return this.menuMap.get(url) || 
			this.menuMap.get(`/foodDetailPage/${url_param}`) || 
			this.menuMap.get(`/foodList/${url_param}`) || 
			['dashboard', 'logout'];
	}

	constructor() { }
}