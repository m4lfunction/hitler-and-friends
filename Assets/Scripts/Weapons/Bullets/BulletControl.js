#pragma strict

var destroyAfterSeconds : float = 8;
private var destroyTimer : float;

function Start () {
	destroyTimer = Time.time + destroyAfterSeconds;
}

function Update () {
	if (Time.time >= destroyTimer){
		Destroy(gameObject);
	}
}