<header class="grid col-full">
  <hr>
<?php
  if (identity ()->user ()) { ?>
    <p class="fleft">碩荷有限公司</p>
    <strong>
      <a href="<?php echo base_url (array ('admin', 'login'));?>" class="alignright">OFNA(<?php echo identity ()->user ()->account;?>)</a>
    </strong>
<?php
  } ?>
</header>