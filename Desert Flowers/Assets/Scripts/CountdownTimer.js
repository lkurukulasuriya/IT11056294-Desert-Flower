#pragma strict

function Start () {

}
// the textfield to update the time to
private var textfield:GUIText;
 
// time variables
public var allowedTime:int = 60;
private var currentTime = allowedTime;
 
 
function Awake()
{
    // retrieve the GUIText Component and set the text
    textfield = GetComponent(GUIText);
     
    UpdateTimerText();
     
    // start the timer ticking
    TimerTick();
}

function UpdateTimerText()
{
    // update the textfield
    textfield.text = currentTime.ToString();
}

function TimerTick()
{
    // while there are seconds left
    while(currentTime > 0)
    {
        // wait for 1 second
        yield WaitForSeconds(1);
         
        // reduce the time
        currentTime--;
         
        UpdateTimerText();
    }
     
    // game over
     Application.LoadLevel("menu");
}