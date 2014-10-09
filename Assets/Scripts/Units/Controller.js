#pragma strict

var walkSpeed : float = 10;
private var speed : float;

var nozzle : GameObject;

function Start () {
	speed = walkSpeed;
}

function Update(){

}

function FixedUpdate () {
	MoveCharacter();
	nozzle.transform.Translate(Vector3.forward * Time.deltaTime * speed * Input.GetAxis("AimVertical"));
	nozzle.transform.Translate(Vector3.right * Time.deltaTime * speed * Input.GetAxis("AimHorizontal"));
}

function MoveCharacter(){
	transform.Translate(Vector3.forward * Time.deltaTime * speed * Input.GetAxis("Vertical"));
	transform.Translate(Vector3.right * Time.deltaTime * speed * Input.GetAxis("Horizontal"));
}