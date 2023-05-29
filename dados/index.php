<?php
$usuarios = array();
include("users.php");
if(isset($_POST['login']) && isset($_POST['senha'])){   
if(array_key_exists($_POST['login'], $usuarios)){      
if($usuarios[$_POST['login']] == $_POST['senha']){         
session_start();         
$_SESSION['login'] = $_POST['login'];         
header('location: painel.php');      
}
else {         
$erro = 'Senha incorreta!';      }   }else{      $erro = 'Login ou senha invalidos!';   }}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Gerenciamento de Acesso</title>
<style type="text/css">
<!--
body,td,th {
	font-family: Verdana;
	font-size: 16px;
	background-color: #F2F2F2;
}
.input {
	border:3px black solid;
	font-family:verdana,arial;color:#666;font-size:17px;
	}
-->
</style></head>

<body>
<br><br><br><br><br><br><br><br><br><br>
<form method="post">
  <table width="227" border="0" align="center" cellpadding="1" cellspacing="0">
    <tr>
      <center><td height="65" colspan="2"><strong style="font-size:18px">PAINEL DE CONTROLE</strong></td></center>
    </tr>
    <tr>
    <td width="63" height="28" align="right">Usuario:</td>
    <td width="160"><input name="login" type="text" class="input" maxlength="50" id="login" /></td>
  </tr>
  <tr>
    <td align="right">Senha:</td>
    <td><input name="senha" type="password" class="input" maxlength="50" /></td>
  </tr>
    <tr>
      <td height="43">&nbsp;</td>
    <td><input type="submit" value="Entrar" style="width:100px;height:30px;" class="input" /></td>
    </tr>
    <tr>
      <td height="43" colspan="2"><?php if(isset($erro)){echo '<font color="black">';echo $erro;echo '</font>';}?></td>
    </tr>
  </table>
</form>
</body>
</html>