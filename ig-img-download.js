var elements = document.getElementsByClassName("FFVAD");

for (var i = 0; i < elements.length; i++)
{
	elements[i].parentElement.nextSibling.remove();
}
