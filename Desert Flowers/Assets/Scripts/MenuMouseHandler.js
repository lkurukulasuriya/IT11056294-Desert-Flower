#pragma strict

function Start () {

}
/**
    Mouse Down Event Handler
*/
function OnMouseDown()
{
    // if we clicked the play button
    if (this.name == "PlayBT")
    {
        // load the game
        Application.LoadLevel("game");
    }// if we clicked the help button
	else if (this.name == "HelpBT")
	{
	    // rotate the camera to view the help &quot;page&quot;
	     iTween.RotateTo(Camera.main.gameObject, Vector3(0, 258.9244, 0), 1.0);
	}
	// if we clicked the Back button
	else if (this.name == "BackBT")
	{
	    // rotate the camera to view the menu "page"
	    iTween.RotateTo(Camera.main.gameObject, Vector3(0, 204.8826, 0), 1.0);
	}
}