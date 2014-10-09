#pragma strict

var bulletBase : GameObject;
var nozzle : Transform;
var shootForce : float = 100;

function Start () {

}

function Update () {
//	var ray : Ray = Camera.main.ScreenPointToRay (Input.mousePosition);
//	var hit : RaycastHit;
//	var playerPlane = new Plane(Vector3.up, transform.position);
	
	if (Input.GetButton("Fire1")){
	  
		var bullet = Instantiate(bulletBase, nozzle.position, transform.rotation);
		bullet.rigidbody.AddForce (Vector3.forward * shootForce);
//		if (Physics.Raycast(ray, hit)){
//      var dir = hit.point - bullet.transform.position;
      //
      bullet.rigidbody.AddForce(nozzle.position * shootForce, ForceMode.Impulse);
      }
	}
	
	
	
//}