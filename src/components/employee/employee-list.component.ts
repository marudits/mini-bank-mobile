import { Component, OnInit } from '@angular/core';
import { ItemSliding } from 'ionic-angular';

//ionic native
import { CallNumber } from '@ionic-native/call-number';

//Component
import { Employee } from './employee';

//Service
import { EmployeeService } from '../../utils/services/employee.service';


@Component({
	selector: 'employee-list',
	templateUrl: './employee-list.component.html'
})

export class EmployeeList implements OnInit {
	private listItem: Employee[];
	private query: string;

	constructor(
		private employeeService: EmployeeService,
		private callNumber: CallNumber
		){}

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
				console.log('Call to: ', item.phone);
				this.callNumber.callNumber(item.phone, true)
					.then(() => console.log('Launched dialer!'))
					.catch(() => console.error('Error launching dialer'));
				break;
			case 'mail':
				console.log('Mail to: ', item.email);
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
		console.log('onSearchInput: ', e);
		console.log('query: ', this.query);

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
