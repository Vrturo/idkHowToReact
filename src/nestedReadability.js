
// Nested ternary statements are generally considered to be hard to maintain as their structure can be difficult to follow.
const greeting = isJoiningRoom 
	?	'Welcome'
	: isLeavingRoom
		? 'Goodbye'
		: isReEnteringRoom
			? 'Welcome Back'
			: 'Hi';

// Using if-else statements for complex conditional assignments, it's much clear to read than the nested ternary statement. 
// However in order to use this approach, we NEED to split the declaration of the variable greeting from its assignment/
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


// Here, we have the same complex conditional assignment we had previously performed using an an immediately-invoked function expression, or IIFE. 
// When we declare our variable greeting, we can assign its value to the result of the IIFE. 
// We're able to maintain the readability of using if-else statements for conditional assignment 
// without needing to split the declaration of the variable greeting from its assignment.

const greeting = (() => {
	if (isJoiningRoom) return 'Welcome';
	if (isLeavingRoom) return 'Goodbye';
	if (isReEnteringRoom) return 'Welcome Back';
	return 'Hey there!'
})();



const greeting = (() => {
  const roomStatuses = [
    [isJoiningRoom, 'Welcome'],
    [isLeavingRoom, 'Goodbye'],
    [isEnteringRoom, 'Welcome back'],
    [true, 'Hi'],
  ]
  const roomStatus = roomStatuses.findIndex((element) => element[0])
  return roomStatuses[roomStatus][1]
})();
