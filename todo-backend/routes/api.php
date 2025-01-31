<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

Route::get('/', function () {
    return "pene";
});

Route::get('/tasks', [TaskController::class,'index'])->name('tasks.index');
Route::post('/tasks', [TaskController::class,'store'])->name('store.index');
Route::delete('/tasks/{id}', [TaskController::class,'destroy'])->name('destroy.index');