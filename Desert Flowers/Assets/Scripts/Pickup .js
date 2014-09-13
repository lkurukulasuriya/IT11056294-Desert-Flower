#pragma strict
// min and max rotation speeds
public var minRotationSpeed:float = 0.5;
public var maxRotationSpeed:float = 2.0;
 
// calculated rotation speed
private var rotationSpeed:float;
 
 
function Update () 
{
    // rotate the gameobject every frame
    transform.Rotate(rotationSpeed, rotationSpeed, 0);

}

function Awake()
{
    // calculate a random rotation speed 
    rotationSpeed = Random.Range(minRotationSpeed, maxRotationSpeed);
}