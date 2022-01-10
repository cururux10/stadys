<html>
<body>

<?php

include('simplehtmldom_1_9_1/simple_html_dom.php');

$url = $_POST["url"];
echo $url."<br>" ;

$html = file_get_html($url);

echo " Anchor <br> " ;

$count = 20;

function callAnchor($html, $count){
foreach($html->find('a') as $element){
	echo $element-> href . '<br>';
	$count--;
	if($count < 0)
	{
		return $count;
	}
	echo $count;
	$html2 = file_get_html($element->href);
	if($html2){
		if(strcmp($html2,$html)){
			$count=callAnchor($html2,$count);
			if($count <0)
			{
				return $count;
			}
		}
	}
}
return $count;
}
callAnchor($html,$count);
?>

</body>
</html>
