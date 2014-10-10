#pragma strict

var bulletBase : GameObject;
var nozzle : Transform;
var shootForce : float = 100;

function Start () {

}

function Update () {

	if (Input.GetAxis("AimHorizontal") || Input.GetAxis("AimVertical")){
  		var bullet : GameObject = Instantiate(bulletBase, nozzle.position,nozzle.rotation);
		//bullet.GetComponentInChildren(Rigidbody).velocity = transform.TransformDirection(Vector3(0,0,shootForce));
		//bullet.transform.Translate(Vector3.forward * shootForce * Time.deltaTime);
		bullet.rigidbody.AddRelativeForce(Vector3.forward * shootForce, ForceMode.Impulse);
   	}
}