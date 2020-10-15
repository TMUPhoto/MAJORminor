<?php
session_start();
$file=fopen("瀏覽人次/p5.txt","r");
$num=fgets($file);
fclose($file);
if($_SESSION['come']!='v'){
 $num++;
 $file=fopen("瀏覽人次/p5.txt","w");
 fwrite($file,$num);
 fclose($file);
 $_SESSION['come']='v';
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="https://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>製作計數器</title>
</head>

<body>
參觀人數：
<?php
echo "$num";
?>
</body>
</html>