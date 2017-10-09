export class Rating {
	id: number;
	bankId: number;
	text: string;
	value: number;
	name: string;
	email: string;
	createdAt: string;
	bank: Object[];

	constructor(
		id: number,
		bankId: number,
		text: string,
		value: number,
		name: string,
		email: string,
		createdAt: string,
		bank: Object[]
		){

		this.id = id;
		this.bankId = bankId;
		this.text = text;
		this.value = value;
		this.name = name;
		this.email = email;
		this.createdAt = createdAt;
		this.bank = bank || [];
	}
}
