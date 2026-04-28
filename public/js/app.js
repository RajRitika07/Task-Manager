// var app = angular.module('taskApp', []);

// app.controller('TaskController', function($scope, $http) {
//     $scope.tasks = [];
//     $scope.newTask = {};

//     // 1. Fetch all tasks from the API
//     $scope.getTasks = function() {
//         $http.get('/api/tasks')
//             .then(function(response) {
//                 $scope.tasks = response.data;
//             }, function(error) {
//                 console.error('Error fetching tasks:', error);
//             });
//     };

//     // 2. Create a new task
//     $scope.addTask = function() {
//         if (!$scope.newTask.title) return; // Basic validation

//         $http.post('/api/tasks', $scope.newTask)
//             .then(function(response) {
//                 $scope.tasks.unshift(response.data); // Add to top of list
//                 $scope.newTask = {}; // Clear form
//             }, function(error) {
//                 alert('Failed to save task');
//             });
//     };

//     // 3. Delete a task
//     $scope.deleteTask = function(id) {
//         if (confirm('Are you sure?')) {
//             $http.delete('/api/api/tasks/' + id) // Note: Fix the route in your code if it's /api/tasks
//                 .then(function() {
//                     // Remove from local array without reloading
//                     $scope.tasks = $scope.tasks.filter(t => t._id !== id);
//                 });
//         }
//     };

//     // Initial load
//     $scope.getTasks();
// });




// var app = angular.module('taskApp', []);

// app.controller('TaskController', function($scope, $http) {
//     $scope.tasks = [];
//     $scope.newTask = {};

//     // 1. Fetch Tasks from Node.js API
//     $scope.getTasks = function() {
//         $http.get('/api/tasks')
//             .then(function(response) {
//                 $scope.tasks = response.data;
//             }, function(error) {
//                 console.error('Error fetching tasks:', error);
//             });
//     };

//     // 2. Add New Task
//     $scope.addTask = function() {
//         if (!$scope.newTask.title) return;

//         $http.post('/api/tasks', $scope.newTask)
//             .then(function(response) {
//                 $scope.tasks.unshift(response.data);
//                 $scope.newTask = {}; // Reset input
//             }, function(error) {
//                 console.error('Error adding task:', error);
//             });
//     };

//     // 3. Mark as Submitted (Complete) + Animation
//     $scope.completeTask = function(task) {
//         $http.put('/api/tasks/' + task._id, { status: 'Completed' })
//             .then(function(response) {
//                 task.status = 'Completed';
                
//                 // --- PARTY POP ANIMATION ---
//                 var duration = 3 * 1000;
//                 var end = Date.now() + duration;

//                 (function frame() {
//                     confetti({
//                         particleCount: 3,
//                         angle: 60,
//                         spread: 55,
//                         origin: { x: 0 },
//                         colors: ['#ff4d4d', '#ffffff']
//                     });
//                     confetti({
//                         particleCount: 3,
//                         angle: 120,
//                         spread: 55,
//                         origin: { x: 1 },
//                         colors: ['#ff4d4d', '#302b63']
//                     });

//                     if (Date.now() < end) {
//                         requestAnimationFrame(frame);
//                     }
//                 }());
//             });
//     };

//     // 4. Delete Task
//     $scope.deleteTask = function(id) {
//         $http.delete('/api/tasks/' + id)
//             .then(function() {
//                 $scope.tasks = $scope.tasks.filter(t => t._id !== id);
//             });
//     };

//     // Initialize
//     $scope.getTasks();
// });






var app = angular.module('taskApp', []);

app.controller('TaskController', function($scope, $http) {
    $scope.tasks = [];
    $scope.newTask = {};

    $scope.getTasks = function() {
        $http.get('/api/tasks').then(function(res) { $scope.tasks = res.data; });
    };

    $scope.addTask = function() {
        if (!$scope.newTask.title) return;
        $http.post('/api/tasks', $scope.newTask).then(function(res) {
            $scope.tasks.unshift(res.data);
            $scope.newTask = {};
        });
    };

    $scope.completeTask = function(task) {
        $http.put('/api/tasks/' + task._id, { status: 'Completed' })
            .then(function() {
                task.status = 'Completed';
                
                // --- SUNFLOWER GOLD CONFETTI ---
                confetti({
                    particleCount: 150,
                    spread: 80,
                    origin: { y: 0.6 },
                    colors: ['#FFD700', '#FFA500', '#ffffff']
                });
            });
    };

    $scope.deleteTask = function(id) {
        $http.delete('/api/tasks/' + id).then(function() {
            $scope.tasks = $scope.tasks.filter(t => t._id !== id);
        });
    };

    $scope.getTasks();
});