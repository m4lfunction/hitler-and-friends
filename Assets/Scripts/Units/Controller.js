#pragma strict

var walkSpeed : float = 10;
private var speed : float;

var nozzle : GameObject;
var maxNozzleDistance : float = 3;
private var nozzleDistance : float;

function Start () {
	speed = walkSpeed;
}

function Update(){
		nozzleDistance = Vector3.Distance(nozzle.transform.position, transform.position);
}

function FixedUpdate () {
	MoveCharacter();
	if(nozzleDistance < maxNozzleDistance){
		nozzle.transform.Translate(Vector3.forward * Time.deltaTime * speed * Input.GetAxis("AimVertical"));
		nozzle.transform.Translate(Vector3.right * Time.deltaTime * speed * Input.GetAxis("AimHorizontal"));
	}
}

function MoveCharacter(){
	transform.Translate(Vector3.forward * Time.deltaTime * speed * Input.GetAxis("Vertical"));
	transform.Translate(Vector3.right * Time.deltaTime * speed * Input.GetAxis("Horizontal"));
}