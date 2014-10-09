#pragma strict

var walkSpeed : float = 10;
private var speed : float;

function Start () {
	speed = walkSpeed;
}

function Update(){

}

function FixedUpdate () {
	transform.Translate(Vector3.forward * Time.deltaTime * speed * Input.GetAxis("Vertical"));
	transform.Translate(Vector3.right * Time.deltaTime * speed * Input.GetAxis("Horizontal"));
}