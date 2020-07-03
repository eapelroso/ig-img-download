var elements = document.getElementsByClassName("FFVAD");

for (var i = 0; i < elements.length; i++)
{
	if (elements[i].parentElement.nextSibling != null)
		elements[i].parentElement.nextSibling.remove();

	elements[i].removeAttribute("srcset");
}

