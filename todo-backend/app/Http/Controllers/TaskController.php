<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TaskController extends Controller
{
    public function index() {

        $tasks = Task::all();
        return response()->json($tasks, 200);

    }

    public function store(Request $request) {

        $validator = Validator::make($request->all(), [
            "title"=> "required",
            "description"=> "required",
            "completed" => "required"
        ]);

        if ($validator->fails()) {
            $data = [
                "mesaage" => "error",
                "errors" => $validator->errors(),
                "status" => 400,
            ];
            return response()->json($data, 400);
        }

        $task = Task::create([
            'title' => $request->title,
            'description'=> $request->description,
            'completed' => $request->completed,
        ]);

        if (!$task) {
            $data = [
                'message' => 'Error al crear la tarea',
                'status'=> 400,
            ];

            return response()->json($data, 400);
        }

        $data = [
            'task' => $task,
            'status' => 201
        ];

        return response()->json($data, 200);
    }

    public function destroy($id) {

        Task::destroy($id);
        
        return response()->json([
            'message'=> 'Tarea eliminanda'
        ], 200);
    }
}
