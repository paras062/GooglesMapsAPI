// JavaScript Document

/*Function to clear text on blur and focus*/

function onfocus_js()
{
	var txt= document.getElementById('search').value;
	if(txt=="Enter Place To Search")
	{
		document.getElementById('search').value="";
	}
}

function onblur_js()
{
	var txt=document.getElementById('search').value;
	if(txt=="" || txt==NULL)
	{
		document.getElementById('search').value="Enter Place To Search";
	}
}

function st_blur_js()
{
	var txt=document.getElementById('first_location').value;
	if(txt==""|| txt==NULL)
	{
		document.getElementById('first_location').value="Choose start point";
	}
}

function st_focus_js()
{
	var txt=document.getElementById('first_location').value;
	if(txt=="Choose start point")
	{
		document.getElementById('first_location').value="";
	}
}

function en_blur_js()
{
	var txt=document.getElementById('second_location').value;
	if(txt=="" || txt==NULL)
	{
		document.getElementById('second_location').value="Choose end Point";
	}
}

function en_focus_js()
{
	var txt=document.getElementById('second_location').value;
	if(txt=="Choose end Point")
	{
		document.getElementById('second_location').value="";
	}
}