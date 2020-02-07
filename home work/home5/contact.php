<?php
        $name = $_POST["name"];
        $tel = $_POST["tel"];
		$company = $_POST["company"];
		
		
		$from = 'email@email.com';
        $to = 'email@email.com';
        $sub = "Форма обратной связи Контакты";
        $message = "Имя: $name\nТелефон: $tel\nКомпания: $company";
        mail ($to,$sub,$message,"Content-type:text/plain; charset = UTF-8\r\nFrom:$from");		            
?>