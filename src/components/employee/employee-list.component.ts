import { Component, OnInit } from '@angular/core';
import { ItemSliding } from 'ionic-angular';
import { Platform } from 'ionic-angular';

//ionic native
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

//Component
import { Employee } from './employee';

//Service
import { EmployeeService } from '../../utils/services/employee.service';

//Config
import { CREDENTIAL } from '../../utils/config/app';
import { ANDROID } from '../../utils/config/native';

@Component({
	selector: 'employee-list',
	templateUrl: './employee-list.component.html'
})

export class EmployeeList implements OnInit {
	private listItem: Employee[];
	private query: string;

	constructor(
		private employeeService: EmployeeService,
		private callNumber: CallNumber,
		private emailComposer: EmailComposer,
		private platform: Platform
		){

		this.emailComposer.addAlias(ANDROID.email.alias.name, ANDROID.email.alias.source);
	}

	ngOnInit(): void {
		const params = {
			include: [
				{
					relation: 'department',
					fields: ['name']
				},
				{
					relation: 'position',
					fields: ['name', 'departmentId']
				}
			],
			order: 'name ASC'
		}
		this.getList(params);
	}

	action(type: string, item: Employee, ionItemSliding: ItemSliding): void {
		switch (type) {
			case 'call':
				this.callNumber.callNumber(item.phone, true)
					.then(() => console.log('Launched dialer!'))
					.catch(() => console.error('Error launching dialer'));
				break;
			case 'mail':
				let email = {
					to: item.email,
					subject: `${CREDENTIAL.company.abbrv}`,
					body: `Hello, ${item.name}`,
					isHtml: true
				}

				if(this.platform.is('android')){
					this.emailComposer.open({
						app: ANDROID.email.alias.name,
						...email
					});
				} else {
					window.open(`mailto:${email.to}?subject=${email.subject}&body=${email.body}`);
				}
				
				break;
			default:
				break;
		}

		ionItemSliding.close();
	}

	getList(params: Object = null): void {
		
		this.employeeService.getList(params)
			.then(items => this.listItem = items)
	}

	private onSearchInput(e: any): void{
		let params = {
			where: {
				name: {
					ilike: `%${this.query}%`
				}
			},
			include: [
				{
					relation: 'department',
					fields: ['name']
				},
				{
					relation: 'position',
					fields: ['name', 'departmentId']
				}
			],
			order: 'name ASC'
		}

		this.getList(params);
	}
}
