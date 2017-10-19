import { Rating } from '../rating/rating';

class Coordinates {
	lat: number | string;
	lng: number | string;
}

export class Bank {
	
	id: number;
	name: string;
	private address: string;
	location: Coordinates;
	phone: string;
	private rating: number;
	private favourites: number;
	private ratings: Rating[]

	constructor(
		id: number, 
		name: string, 
		address: string, 
		rating: number,
		favourites: number,
		ratings: Rating[]){

		this.id = id;
		this.name = name;
		this.address = address;
		this.rating = rating;
		this.favourites = favourites;
		this.ratings = ratings;
	}
}

