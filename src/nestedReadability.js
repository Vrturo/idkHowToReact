

const greeting = isJoiningRoom 
	?	'Welcome'
	: isLeavingRoom
		? 'Goodbye'
		: isReEnteringRoom
			? 'Welcome Back'
			: 'Hi';


let greeting;
if (isJoiningRoom) {
	greeting = 'Welcome';
} else if(isLeavingRoom) {
	greeting = 'Good Bye';
} else if(isReEnteringRoom) {
	greeting = 'Welcome Back';
} else {
	greeting = 'Hi';
}

const greeting (() => {
	if (isJoiningRoom) return 'Welcome';
	if (isLeavingRoom) return 'Goodbye';
	if (isReEnteringRoom) return 'Welcome Back';
	return 'Hey there!'
});