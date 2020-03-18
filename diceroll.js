var numDice = prompt("Number of D6 to roll: ");
var numSuccess = prompt("Number needed for success: ");



function roll (numDice)
{
	var results = [];

	for (var i = 0; i < numDice; i++) 
	{
		results[i] = Math.floor((Math.random()*6)+1);
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
	document.write("Results: ");
	for(var i=0; i<rolls.length; i++)
	{
		document.write(rolls[i] + ",");
		counter++;
		if(counter > 10)
		{
			document.write("<br>");
			counter =0;
		}
	}
	document.write("<br>" + " Number Passed (Needing " + numSuccess + "+): " + passed);
}

var rolls = roll(numDice);
var passed = checkSuccess(numSuccess, rolls);
//document.write("Number passed: " + passed);

printOutput(rolls, passed);
