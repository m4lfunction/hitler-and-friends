#pragma strict

	function OnGUI() {
		if (GUI.Button(Rect(10,30,150,25),"t4ice"))
			Application.LoadLevel("TheisPlayground");
		if (GUI.Button(Rect(10,70,150,25),"m4lfunction"))
			Application.LoadLevel("DanielsPlayground");
	}