$(document).ready(function() 
{
	//declare a starting variable for the clock
	var timer = 60;
	
	//create a function to start the clock
	function run()
	{
		intervalID=setInterval(decrement, 1000);
	};
	//create function to stop the clock
	function stop()
	{
		clearInterval(intervalID);
	};
	//create a countdoown function
	function decrement() 
	{
		timer--
		$('.timer').text(timer + ' seconds remaining.')
		if (timer === 0)
		{
				stop();
				//$alert('You got '+ score(); ' out of 10!');
		}
	};
	//populate the timer value into the HTML
	$('.timer').html(timer + ' seconds remaining.');
	//Start button shows the body/submit button, hides instructions/start, starts the clock
	$('.start').on('click', function() {
		$('.triviaBody').css('display', 'inline-block');
		$('.submit').css('display', 'inline-block');
		$('.start').css('display', 'none');
		$('.instructions').css('display', 'none');
		run();
	});

	//create variables for each question, set equal to value of checked radio button
	var answerOne = $("input[name=questionOne]:checked").val();//RETURNING UNDEFINED
	var answerTwo = $("input[name=questionTwo]:checked").val();
	//create array with indexes equal to checked radio button

	var answers = [];

	var scoreTotal = 0;

	//create function to tally up score
	function answersCorrect()
	{
		//if loop returns string value 'correct', increase scoreTotal by one
		for (var i=0; i < answers.length; i++) 
		{
			if (answers[i]=='correct') {scoreTotal++}	
		};
	};
	
	$('.submit').on('click', function() 
		{
			answers.push($("input[name=questionOne]:checked").val());
			answers.push($("input[name=questionTwo]:checked").val());
			answers.push($("input[name=questionThree]:checked").val());
			answers.push($("input[name=questionFour]:checked").val());
			answers.push($("input[name=questionFive]:checked").val());
			answers.push($("input[name=questionSix]:checked").val());
			answers.push($("input[name=questionSeven]:checked").val());
			answers.push($("input[name=questionEight]:checked").val());
			answers.push($("input[name=questionNine]:checked").val());
			answers.push($("input[name=questionTen]:checked").val());
			stop();
			answersCorrect();
			alert('You scored ' + scoreTotal + ' out of 10 correct!');
			scoreTotal = 0;
			console.log(scoreTotal);
		});
	});