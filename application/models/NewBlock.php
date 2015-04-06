<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 OA Wu Design
 */

class NewBlock extends OaModel {

  static $table_name = 'new_blocks';

  static $has_one = array (
  );

  static $has_many = array (
  );

  static $belongs_to = array (
    array ('new', 'class_name' => 'Neww')
  );

  public function __construct ($attributes = array (), $guard_attributes = true, $instantiating_via_find = false, $new_record = true) {
    parent::__construct ($attributes, $guard_attributes, $instantiating_via_find, $new_record);


  }
}