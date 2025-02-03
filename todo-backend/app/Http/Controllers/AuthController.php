<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function register(Request $request)
    {

        $request->validate([
            "name"=> "required|string|max:255",
            "email"=> "required|email|unique:users,email",
            "password"=> "required|min:8",
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'message' => 'Usuario registrado exitosamente',
            'user' => $user,
        ], 201);
    }

    public function login(Request $request)
    {
        // Validar credenciales
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Autenticar al usuario y generar token
        if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json(['error' => 'Credenciales incorrectas'], 401);
        }

        // Devolver el token y la información del usuario
        return response()->json([
            'message' => 'Inicio de sesión exitoso',
            'token' => $token,
            'user' => JWTAuth::user(),
        ]);
    }

    public function checkEmail(Request $request)
    {
        // Validar el email recibido
        $request->validate(['email' => 'required|email']);

        // Comprobar si el email existe en la base de datos
        $exists = User::where('email', $request->email)->exists();

        // Devolver respuesta en formato JSON
        return response()->json(['exists' => $exists]);
    }
}
