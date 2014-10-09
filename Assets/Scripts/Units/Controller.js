#pragma strict

var walkSpeed : float = 10;
var nozzleSpeed : float = 5;
private var speed : float;

var nozzle : GameObject;
var maxNozzleDistance : float = 0.1;
private var nozzleDistance : float;

function Start () {
	speed = walkSpeed;
}

function Update(){
		nozzleDistance = Vector3.Distance(nozzle.transform.position, transform.position);
}

function FixedUpdate () {
	MoveCharacter();
	MoveNozzle();
}

function MoveCharacter(){
	transform.Translate(Vector3.forward * Time.deltaTime * speed * Input.GetAxis("Vertical"));
	transform.Translate(Vector3.right * Time.deltaTime * speed * Input.GetAxis("Horizontal"));
}

function MoveNozzle(){
	if(nozzleDistance < maxNozzleDistance){
		nozzle.transform.Translate(Vector3.forward * Time.deltaTime * nozzleSpeed * Input.GetAxis("AimVertical"));
		nozzle.transform.Translate(Vector3.right * Time.deltaTime * nozzleSpeed * Input.GetAxis("AimHorizontal"));
	}else{
		var step : float = Time.deltaTime * nozzleSpeed;
		nozzle.transform.position = Vector3.MoveTowards(nozzle.transform.position, transform.position, step);
	}
}