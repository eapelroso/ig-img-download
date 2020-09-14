function removeOverlays()
{		
	var elements = document.getElementsByClassName("FFVAD");

	for (var i = 0; i < elements.length; i++)
	{
		if (elements[i].parentElement.nextSibling != null)
			elements[i].parentElement.nextSibling.remove();

		elements[i].removeAttribute("srcset");

	}

}

function assignEvents(){
	var nextButtons = document.getElementsByClassName("coreSpriteRightChevron");
	for (var i = 0; i < nextButtons.length; i++) 
	{
		nextButtons[i].addEventListener("click", function() { removeOverlays(); } );		
	}
	var previousButtons = document.getElementsByClassName("coreSpriteLeftChevron");
	for (var i = 0; i < previousButtons.length; i++) 
	{
		previousButtons[i].addEventListener("click", function() { removeOverlays(); } );		
	}
}

assignEvents();
removeOverlays();