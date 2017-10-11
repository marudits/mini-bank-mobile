import moment from 'moment';

export function calculateDiffTime(time) {
	let diffTime = moment().diff(moment(time)),
		sentTime = new Date(time);

	let countDays =  moment.utc(diffTime).dayOfYear() - 1,
		countHours = moment.utc(diffTime).hour(),
		countMinutes = moment.utc(diffTime).minute();

	if(countDays > 1){
		return moment(sentTime).format('D MMM YYYY').toString();
	} else if(countDays === 1){
		return 'Yesterday';
	} else {
		if(countHours >= 1){
			return `${countHours}h ago`;
		} else {
			return `${countMinutes}m ago`;
		}
	}
}