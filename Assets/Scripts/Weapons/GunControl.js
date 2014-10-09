#pragma strict

var bulletBase : GameObject;
var nozzle : Transform;
var shootForce : float = 100;

function Start () {

}

function Update () {

	if (Input.GetAxis("AimHorizontal") || Input.GetAxis("AimVertical")){
  		var bullet = Instantiate(bulletBase, nozzle.position, transform.rotation);
		bullet.rigidbody.AddForce (Vector3.forward * shootForce);
		bullet.rigidbody.AddForce(nozzle.position * shootForce, ForceMode.Impulse);
   	}
}