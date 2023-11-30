function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5uZrW9TpYtB":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbz5TzbdgUekQ8_0J8V74HpRevX4Ly_mVGqZe54ICfe5FXvXMyWv09smGrDIWnO_9pda/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v42q1attempts:player.GetVar("v42q1attempts"),v42q1answeredcorrect:player.GetVar("v42q1answeredcorrect"),v42q2attempts:player.GetVar("v42q2attempts"),v42q2answeredcorrect:player.GetVar("v42q2answeredcorrect")})
	}
	)
}

