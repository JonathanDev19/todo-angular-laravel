<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

Route::get('/tasks', [TaskController::class,'index'])->name('tasks.index');
Route::post('/tasks', [TaskController::class,'store'])->name('store.index');
Route::delete('/tasks/{id}', [TaskController::class,'destroy'])->name('destroy.index');
Route::post('/register', [AuthController::class,'register'])->name('register.index');
Route::post('/login', [AuthController::class,'login'])->name('login.index');
Route::post('/check-email', [AuthController::class,'checkEmail'])->name('email.index');