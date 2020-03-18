var numDice = prompt("Number of D6 to roll: ");
var numSuccess = prompt("Number needed for success: ");

var one = 0;
var two =0;
var three=0;
var four=0;
var five=0;
var six=0;

function roll (numDice)
{
	var results = [];

	for (var i = 0; i < numDice; i++) 
	{
		results[i] = Math.floor((Math.random()*6)+1);

		if(results[i] == 1)
		{
			one++;
		}
		else if(results[i] == 2)
		{
			two++;
		}
		else if(results[i] == 3)
		{
			three++;
		}
		else if(results[i] == 4)
		{
			four++;
		}
		else if(results[i] == 5)
		{
			five++;
		}
		else if(results[i] == 6)
		{
			six++;
		}
	}

	return results;
	
}

function checkSuccess (numSuccess, rolls)
{
	var success =0;
	for(var i = 0; i<rolls.length;i++)
	{
		if(rolls[i] >= numSuccess)
			success++;
	}
	return success;

}

function printOutput (rolls, passed)
{
	var counter = 0;
	document.write("Rolling dice.... " + "<br>");
	document.write("Results: <br>");
	/*for(var i=0; i<rolls.length; i++)
	{
		document.write(rolls[i] + ",");
		counter++;
		if(counter > 10)
		{
			document.write("<br>");
			counter =0;
		}
	}
	document.write("<br>");*/
	document.write("1s: " + one + "<br>");
	document.write("2s: " + two + "<br>");
	document.write("3s: " + three + "<br>");
	document.write("4s: " + four + "<br>");
	document.write("5s: " + five + "<br>");
	document.write("6s: " + six + "<br>");
	document.write("<br>" + " Number Passed (Needing " + numSuccess + "+): " + passed);
}

var rolls = roll(numDice);
var passed = checkSuccess(numSuccess, rolls);
//document.write("Number passed: " + passed);

printOutput(rolls, passed);

