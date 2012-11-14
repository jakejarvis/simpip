<?php
  header("Content-type: text/plain");
  if(isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    if (($pos = strpos($_SERVER['HTTP_X_FORWARDED_FOR'], ",")) !== false) {
      echo substr($_SERVER['HTTP_X_FORWARDED_FOR'], 0, $pos);
    } else {
      echo $_SERVER['HTTP_X_FORWARDED_FOR'];
    }
  } else {
    echo $_SERVER['REMOTE_ADDR'];
  }
?>