<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ConsolasController extends Controller
{
    public function getMarcas(){
    //$marcas = ["Sony","Microsoft","Nintendo","Sega"]; //aRREGLO estatico en php
    $marcas = array();
    $marcas[] = "Sony";
    $marcas[] = "Microsoft";
    $marcas[] = "Nientiendo";
    $marcas[] = "Sega";
    return $marcas;
    }
}
