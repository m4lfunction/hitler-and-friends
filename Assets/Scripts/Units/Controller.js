#pragma strict

var walkSpeed : float = 10;
var nozzleSpeed : float = 5;
var nozzleFixpoint : Transform;
private var speed : float;

var nozzle : GameObject;
var maxNozzleDistance : float = 0.1;
private var nozzleDistance : float;

function Start () {
	speed = walkSpeed;
}

function Update(){
		nozzleDistance = Vector3.Distance(nozzle.transform.position, nozzleFixpoint.position);
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
	var charPos : Vector3 = new Vector3(nozzleFixpoint.transform.position.x ,nozzleFixpoint.transform.position.y, nozzleFixpoint.transform.position.z);
	var newPos : Vector3 = new Vector3(0,nozzleFixpoint.transform.position.y, 0);
	var step : float = Time.deltaTime * nozzleSpeed;
	if(nozzleDistance < maxNozzleDistance){
		nozzle.transform.Translate(Vector3.forward * Time.deltaTime * nozzleSpeed * Input.GetAxis("AimVertical"));
		nozzle.transform.Translate(Vector3.right * Time.deltaTime * nozzleSpeed * Input.GetAxis("AimHorizontal"));
		//nozzle.transform.position = Vector3.MoveTowards(nozzle.transform.position, newPos, step);
	}else{
		//nozzle.transform.position = Vector3.MoveTowards(nozzle.transform.position, charPos, step);
		nozzle.transform.position = Vector3.MoveTowards(nozzle.transform.position, nozzleFixpoint.position, step);
	}
	
	
}