<html>
<body>

<?php

include('simplehtmldom_1_9_1/simple_html_dom.php');

$url = $_POST["url"];
echo $url."<br>" ;

$tag = $_POST["tag"];
echo $tag."<br>";

$html = file_get_html($url);

if(strcasecmp($tag,"a")==0){
	foreach($html->find($tag) as $element)
		echo $element->href . '<br>';
}
elseif(strcasecmp($tag,"script")==0){
	foreach($html->find($tag) as $element)
		echo $element->src . '<br>';
}
else{
	foreach($html->find($tag) as $element){
			echo $element;
			echo '<br>';
	}
}
?>

</body>
</html>
