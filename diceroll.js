var standingsSheet;
var resultsSheet;
var upcomingSheet;

var pulledData = "https://docs.google.com/spreadsheets/d/1IBkbkTjOlSNeMH7WkgbtZwhgB5q6S8QHaiIC7qX7iaM/edit?usp=sharing";


function init() {
    Tabletop.init( { key: pulledData,
                     callback: showInfo,
                     simpleSheet: false } )

     }

  function showInfo(data, tabletop) {
    //alert('Successfully processed!')
    standingsSheet = tabletop.sheets("Standings");
    resultsSheet = tabletop.sheets("Results");
    upcomingSheet = tabletop.sheets("Upcoming");
    //console.log(standingsSheet.elements);
  }
var rules = document.getElementById('rules');
var standings = document.getElementById('standings');
var upcoming = document.getElementById('upcoming');

window.addEventListener('DOMContentLoaded', init)
var standingP = document.createElement("p");
var resultsP = document.createElement("p");
var upcomingP = document.createElement("p");
var rulesP = document.createElement("p");

upcoming.onclick = function()
{
	console.log("clicked!");
	sortByWeek(upcomingSheet.elements);
	upcomingP.innerHTML = printUpcoming(upcomingSheet.elements);
	upcomingP.style.color = "white";
	standingP.remove();
	resultsP.remove();
	rulesP.remove();
	document.getElementById("main").appendChild(upcomingP);
}

standings.onclick = function()
{
	 
	sortByWins(standingsSheet.elements);
	standingP.innerHTML = printStandings(standingsSheet.elements);
	standingP.style.color = "white";
	resultsP.remove();
	upcomingP.remove();
	rulesP.remove();
	document.getElementById("main").appendChild(standingP);
	//standings.disabled = true;
}

function printStandings (sheet)
{
	var toPrint = "Billion Dollar Clown Farm TTS League Standings<br><br>";
	var count = 0;
	
	sheet.sort(function(a,b)
	{
		return b.TotalVP - a.TotalVP;
	});

	for(var i=0; i< sheet.length;i++)
	{
		toPrint = toPrint + (i+1) + ") " + sheet[i].PlayerName + " | Wins: " + sheet[i].Wins +
		 " | Losses: " + sheet[i].Losses + " | Avg VP: " + sheet[i].AvgVP + " | Total VP: " + sheet[i].TotalVP + "<br>";
		count++;
	}
	
	return toPrint;
}

function sortByWins (sheet)
{
	sheet.sort(function(a,b)
	{
		return b.Wins - a.Wins;
	});
}

function sortByWeek(sheet)
{
	sheet.sort(function(a,b)
	{
		return a.Week - b.Week;
	})
}

var results = document.getElementById('results');

results.onclick = function()
{
	sortByWeek(resultsSheet.elements);
	//resultsP.innerHTML = printStandings(resultsSheet.elements);
	resultsP.innerHTML = printResults(resultsSheet.elements);
	resultsP.style.color = "white";
	standingP.remove();
	upcomingP.remove();
	rulesP.remove();
	document.getElementById("main").appendChild(resultsP);
	//results.disabled = true;
}

function printResults (sheet)
{
	var toPrint = "Match Results" + "<br>";
	var weekCount = 1;
	toPrint = toPrint + "<br> Week 1 Results <br>";
	for(var i=0; i<sheet.length;i++)
	{

		if(sheet[i].Week != weekCount)
		{
			weekCount++;
			toPrint = toPrint + "<br> Week " + weekCount + " Results: <br>";
			toPrint = toPrint + sheet[i].Player1 + " vs. " + sheet[i].Player2 
			+ " | Score: " + sheet[i].Player1Score + "-" + sheet[i].Player2Score + "<br>";
		}
		else
		{
			
			toPrint = toPrint + sheet[i].Player1 + " vs. " + sheet[i].Player2 
			+ " | Score: " + sheet[i].Player1Score + "-" + sheet[i].Player2Score + "<br>";
		}

	}

	return toPrint;
}

rules.onclick = function()
{
	
	rulesP.innerHTML = "LEAGUE RULES <br><br>Each game will be 1500 points, with a cap of 69 models. The league will run 6 weeks, with 1 game per week. Pairings will be done randomly, and then by Win-Loss Swiss Style. Game results can be submitted through this Google  " + '<a href=https://forms.gle/ESfTjvbE8MtxBjug6>form.</a>';
	rulesP.style.color = "white";
	resultsP.remove();
	upcomingP.remove();
	standingP.remove();
	document.getElementById("main").appendChild(rulesP);
}

function printUpcoming (sheet)
{
	var toPrint = "Upcoming Matches" + "<br>";
	var weekCount = 1;
	toPrint = toPrint + "<br> Week 1 Matches <br>";
	for(var i=0; i<sheet.length;i++)
	{

		if(sheet[i].Week != weekCount)
		{
			weekCount++;
			toPrint = toPrint + "<br> Week " + weekCount + " Matches: <br>";
			toPrint = toPrint + sheet[i].Player1 + " vs. " + sheet[i].Player2 + "<br>";
		}
		else
		{
			
			toPrint = toPrint + sheet[i].Player1 + " vs. " + sheet[i].Player2 + "<br>";
		}

	}

	return toPrint;
}