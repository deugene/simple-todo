webpackJsonp([0,3],{

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TodoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoService = (function () {
    function TodoService(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
    }
    TodoService.prototype.getAll = function (user_id) {
        return this.authHttp.get("api/todos/" + user_id)
            .toPromise()
            .then(function (res) {
            var result = res.json();
            if (result.err) {
                throw new Error(result.err);
            }
            return result.data;
        })
            .catch(this.handleError);
    };
    TodoService.prototype.getTodo = function (_id) {
        return this.authHttp.get("api/todo/" + _id)
            .toPromise()
            .then(function (res) {
            var result = res.json();
            if (result.err) {
                throw new Error(result.err);
            }
            return result.data;
        })
            .catch(this.handleError);
    };
    TodoService.prototype.create = function (todo) {
        return this.authHttp.post('api/todo/', JSON.stringify(todo), { headers: this.headers }).toPromise()
            .then(function (res) {
            var result = res.json();
            if (result.err) {
                throw new Error(result.err);
            }
            return null;
        })
            .catch(this.handleError);
    };
    TodoService.prototype.update = function (todo) {
        return this.authHttp.put("api/todo/" + todo._id, JSON.stringify(todo), { headers: this.headers }).toPromise()
            .then(function (res) {
            var result = res.json();
            if (result.err) {
                throw new Error(result.err);
            }
            return null;
        })
            .catch(this.handleError);
    };
    TodoService.prototype.updateAll = function (todos, user_id) {
        return this.authHttp.put("api/todos/" + user_id, JSON.stringify({ todos: todos }), { headers: this.headers }).toPromise()
            .then(function (res) {
            var result = res.json();
            if (result.err) {
                throw new Error(result.err);
            }
            return null;
        })
            .catch(this.handleError);
    };
    TodoService.prototype.delete = function (_id) {
        return this.authHttp.delete("api/todo/" + _id, { headers: this.headers }).toPromise()
            .then(function (res) {
            var result = res.json();
            if (result.err) {
                throw new Error(result.err);
            }
            return null;
        })
            .catch(this.handleError);
    };
    TodoService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    TodoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"]) === 'function' && _b) || Object])
    ], TodoService);
    return TodoService;
    var _a, _b;
}());
//# sourceMappingURL=/home/eugenes/webdev/simple-todo/src/todo.service.js.map

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(679)
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=/home/eugenes/webdev/simple-todo/src/about.component.js.map

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'Another 1500 Todo App';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(680),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/home/eugenes/webdev/simple-todo/src/app.component.js.map

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(682),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=/home/eugenes/webdev/simple-todo/src/home.component.js.map

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Todo; });
var Todo = (function () {
    function Todo(todo, done, user_id, position, added, _id, reminder) {
        this.todo = todo;
        this.done = done;
        this.user_id = user_id;
        this.position = position;
        this.added = added;
        this._id = _id;
        this.reminder = reminder;
    }
    return Todo;
}());
//# sourceMappingURL=/home/eugenes/webdev/simple-todo/src/todo.js.map

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_todo__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_min_date_validator__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__todo_service__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TodoFormReactiveComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TodoFormReactiveComponent = (function () {
    function TodoFormReactiveComponent(todoService, authService, formBuilder) {
        this.todoService = todoService;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.gmt = new Date().getTimezoneOffset() * 60000;
        this.todo = new __WEBPACK_IMPORTED_MODULE_2__shared_todo__["a" /* Todo */]('', false, '', undefined);
        this.reminderInputType = 'hidden';
        this.formErrors = {
            'todo': '',
            'reminder': ''
        };
        this.validationMessages = {
            'todo': {
                'required': 'Title is required.',
                'maxLength': 'Title cannot be more than 100 characters long'
            },
            'reminder': {
                'minDate': 'It must be future date.'
            }
        };
    }
    TodoFormReactiveComponent.prototype.minDateTime = function () {
        return new Date(Date.now() - this.gmt).toISOString().slice(0, 16);
    };
    TodoFormReactiveComponent.prototype.toggleReminderInputType = function () {
        this.reminderInputType = this.reminderInputType === 'hidden'
            ? 'datetime-local'
            : 'hidden';
    };
    TodoFormReactiveComponent.prototype.onSubmit = function () {
        this.todo.todo = this.todoForm.value.todo;
        this.todo.todo = this.todoForm.value.reminder;
    };
    TodoFormReactiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.authService.getUserProfile()
            .then(function (profile) { return _this.user_id = profile.identities[0].user_id; })
            .catch(function (err) { return console.error(err); });
    };
    TodoFormReactiveComponent.prototype.buildForm = function () {
        var _this = this;
        this.todoForm = this.formBuilder.group({
            'todo': [
                this.todo.todo,
                [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].maxLength(100)
                ]
            ],
            'reminder': [this.todo.reminder, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__shared_min_date_validator__["a" /* minDateValidator */])()]]
        });
        this.todoForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    TodoFormReactiveComponent.prototype.onValueChanged = function (data) {
        if (!this.todoForm) {
            return;
        }
        var form = this.todoForm;
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    TodoFormReactiveComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-todo-form-reactive',
            template: __webpack_require__(683),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__todo_service__["a" /* TodoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__todo_service__["a" /* TodoService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === 'function' && _c) || Object])
    ], TodoFormReactiveComponent);
    return TodoFormReactiveComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/eugenes/webdev/simple-todo/src/todo-form-reactive.component.js.map

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_todo__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo_service__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula_ng2_dragula__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_notifications__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TodosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TodosComponent = (function () {
    function TodosComponent(todoService, router, authService, dragulaService, notificationsService) {
        var _this = this;
        this.todoService = todoService;
        this.router = router;
        this.authService = authService;
        this.dragulaService = dragulaService;
        this.notificationsService = notificationsService;
        this.gmt = new Date().getTimezoneOffset() * 60000;
        this.newTodo = new __WEBPACK_IMPORTED_MODULE_2__shared_todo__["a" /* Todo */]('', false, '', undefined);
        this.showDialog = { visible: false, type: '' };
        this.reminderInputType = 'hidden';
        this.notificationsOptions = {
            position: ['top', 'right']
        };
        dragulaService.drop.subscribe(function (value) {
            _this.onDrop(value.slice(1));
        });
    }
    TodosComponent.prototype.minDateTime = function () {
        return new Date(Date.now() - this.gmt).toISOString().slice(0, 16);
    };
    TodosComponent.prototype.humanReadableDate = function (dateTime) {
        var dateWithGmt = Date.parse(dateTime) + this.gmt;
        var date = new Date(dateWithGmt).toLocaleDateString();
        var time = new Date(dateWithGmt).toLocaleTimeString();
        return date + ' ' + time;
    };
    TodosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUserProfile()
            .then(function (profile) { return _this.user_id = profile.identities[0].user_id; })
            .then(function () { return _this.getAll()
            .then(function () {
            _this.remind();
        }); });
    };
    TodosComponent.prototype.onDrop = function (args) {
        var droppedTodoEl = args[0], from = args[1], to = args[2], nextTodoEl = args[3];
        var droppedTodo = this.todos
            .find(function (todo) { return todo._id === droppedTodoEl.getAttribute('id'); });
        var nextTodo = nextTodoEl
            ? this.todos
                .find(function (todo) { return todo._id === nextTodoEl.getAttribute('id'); })
            : undefined;
        var maxPosition = this.todos
            .reduce(function (cur, max) { return cur.position > max.position ? cur : max; }).position;
        if (nextTodo) {
            this.todos.map(function (todo) {
                if (todo._id !== droppedTodo._id && todo.position < nextTodo.position) {
                    todo.position = todo.position - 1;
                }
                else if (todo._id === droppedTodo._id) {
                    todo.position = nextTodo.position - 1;
                }
                return todo;
            });
            this.todoService.updateAll(this.todos, this.user_id);
        }
        else {
            droppedTodo.position = maxPosition + 1;
            this.todoService.update(droppedTodo);
        }
    };
    TodosComponent.prototype.getAll = function () {
        var _this = this;
        return this.todoService
            .getAll(this.user_id)
            .then(function (todos) { return _this.todos = todos.sort(function (a, b) { return a.position - b.position; }); });
    };
    TodosComponent.prototype.delete = function () {
        var _this = this;
        this.todoService
            .delete(this.selectedTodo._id)
            .then(function () {
            _this.todos = _this.todos.filter(function (t) { return t !== _this.selectedTodo; });
            _this.selectedTodo = null;
        });
    };
    TodosComponent.prototype.create = function () {
        var _this = this;
        var position;
        if (this.todos.length > 1) {
            position = this.todos
                .reduce(function (min, cur) { return min.position < cur.position ? min : cur; }).position;
        }
        else if (this.todos.length === 1) {
            position = this.todos[0].position;
        }
        else {
            position = 0;
        }
        this.newTodo.position = position - 1;
        this.newTodo.user_id = this.user_id;
        this.reminderInputType = 'hidden';
        this.todoService.create(this.newTodo).then(function () { return _this.getAll(); });
    };
    TodosComponent.prototype.update = function (todo) {
        var _this = this;
        if (todo) {
            todo.done = !todo.done;
            this.selectedTodo = todo;
        }
        this.todoService.update(this.selectedTodo).then(function () { return _this.getAll(); });
    };
    TodosComponent.prototype.cancel = function () {
        this.getAll();
    };
    TodosComponent.prototype.showModal = function (todo, type) {
        this.selectedTodo = todo;
        this.showDialog.visible = !this.showDialog.visible;
        this.showDialog.type = type;
    };
    TodosComponent.prototype.toggleReminderInputType = function () {
        this.reminderInputType = this.reminderInputType === 'hidden'
            ? 'datetime-local'
            : 'hidden';
    };
    TodosComponent.prototype.remind = function () {
        var _this = this;
        new Promise(function (res) {
            _this.todosToRemind = _this.todos.filter(function (todo) {
                var remindDate;
                if (todo.reminder) {
                    remindDate = Date.parse(todo.reminder) + _this.gmt;
                }
                return remindDate && remindDate < Date.now() - _this.gmt;
            });
            if (_this.todosToRemind.length === 0) {
                return res();
            }
            _this.todosToRemind.forEach(function (todo) {
                _this.notificationsService.success('Reminder', todo.todo, { id: todo._id });
            });
        })
            .then(function () { return setTimeout(_this.remind.bind(_this), 3000); });
    };
    TodosComponent.prototype.onDestroy = function (id) {
        var _this = this;
        var remindedTodo = this.todos.find(function (todo) { return todo._id === id; });
        remindedTodo.reminder = '';
        this.todoService.update(remindedTodo).then(function () {
            var index = _this.todosToRemind.indexOf(remindedTodo);
            _this.todosToRemind.splice(index, 1);
            if (_this.todosToRemind.length === 0) {
                _this.remind();
            }
        });
    };
    TodosComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-todos',
            template: __webpack_require__(684),
            styles: [__webpack_require__(678)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__todo_service__["a" /* TodoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__todo_service__["a" /* TodoService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_dragula_ng2_dragula__["DragulaService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_ng2_dragula_ng2_dragula__["DragulaService"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["NotificationsService"]) === 'function' && _e) || Object])
    ], TodosComponent);
    return TodosComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/home/eugenes/webdev/simple-todo/src/todos.component.js.map

/***/ },

/***/ 391:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 391;


/***/ },

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(507);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/home/eugenes/webdev/simple-todo/src/main.js.map

/***/ },

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard_service__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todos_todos_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__todo_form_reactive_todo_form_reactive_component__ = __webpack_require__(334);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var routes = [
    { path: 'todos', component: __WEBPACK_IMPORTED_MODULE_5__todos_todos_component__["a" /* TodosComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
    { path: '', redirectTo: '/todos', pathMatch: 'full' },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */] },
    { path: 'form', component: __WEBPACK_IMPORTED_MODULE_7__todo_form_reactive_todo_form_reactive_component__["a" /* TodoFormReactiveComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AUTH_PROVIDERS"],
                __WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuard */],
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/home/eugenes/webdev/simple-todo/src/app-routing.module.js.map

/***/ },

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todos_todos_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dialog_dialog_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_dragula_ng2_dragula__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_notifications__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__todo_service__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__todo_form_reactive_todo_form_reactive_component__ = __webpack_require__(334);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng2_dragula_ng2_dragula__["DragulaModule"],
                __WEBPACK_IMPORTED_MODULE_10_angular2_notifications__["SimpleNotificationsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__todos_todos_component__["a" /* TodosComponent */],
                __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dialog_dialog_component__["a" /* DialogComponent */],
                __WEBPACK_IMPORTED_MODULE_14__todo_form_reactive_todo_form_reactive_component__["a" /* TodoFormReactiveComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__todo_service__["a" /* TodoService */],
                __WEBPACK_IMPORTED_MODULE_11__auth_service__["a" /* AuthService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/eugenes/webdev/simple-todo/src/app.module.js.map

/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        this.router.navigate(['/home']);
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/home/eugenes/webdev/simple-todo/src/auth-guard.service.js.map

/***/ },

/***/ 506:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DialogComponent = (function () {
    function DialogComponent() {
        this.dialogOptionsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DialogComponent.prototype.cancel = function () {
        this.dialogOptions.visible = false;
        this.dialogOptionsChange.emit(this.dialogOptions);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], DialogComponent.prototype, "dialogOptions", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], DialogComponent.prototype, "dialogOptionsChange", void 0);
    DialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(681),
            styles: [__webpack_require__(675)],
            exportAs: 'dialog',
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('dialog', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'scale3d(.3, .3, .3)' }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(100)
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(100, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'scale3d(.0, .0, .0)' }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DialogComponent);
    return DialogComponent;
}());
//# sourceMappingURL=/home/eugenes/webdev/simple-todo/src/dialog.component.js.map

/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(504);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/home/eugenes/webdev/simple-todo/src/index.js.map

/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = minDateValidator;
function minDateValidator() {
    return function (control) {
        var gmt = new Date().getTimezoneOffset() * 60000;
        var date = new Date(Date.parse(control.value) + gmt);
        var dateNow = new Date(Date.now() - gmt);
        var no = dateNow > date;
        return no ? { 'minDate': { dateNow: dateNow } } : null;
    };
}
//# sourceMappingURL=/home/eugenes/webdev/simple-todo/src/min-date.validator.js.map

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/eugenes/webdev/simple-todo/src/environment.js.map

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/eugenes/webdev/simple-todo/src/polyfills.js.map

/***/ },

/***/ 674:
/***/ function(module, exports) {

module.exports = "footer {\n  margin-top: 10vh;\n}\n"

/***/ },

/***/ 675:
/***/ function(module, exports) {

module.exports = ".overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1999;\n}\n\n.dialog {\n  z-index: 2000;\n  position: fixed;\n  right: 0;\n  left: 0;\n  top: 4vh;\n  margin-top: 10vh;\n  margin-right: auto;\n  margin-left: auto;\n  min-height: 25vh;\n  width: 90vw;\n  max-width: 520px;\n  background-color: #fff;\n  padding: 4vh;\n  box-shadow: 0 0.7vw 0.8vw -0.4vw rgba(0, 0, 0, 0.2), 0 1.3vw 1.9vw 0.2vw rgba(0, 0, 0, 0.14), 0 0.5vw 2.4vw 0.4vw rgba(0, 0, 0, 0.12);\n}\n\n@media (min-width: 80vw) {\n  .dialog {\n    top: 4vw;\n  }\n}\n"

/***/ },

/***/ 676:
/***/ function(module, exports) {

module.exports = ".btn {\n  font-size: 2.5em;\n  margin: 1em 0 3em;\n  padding: 0.5em 1em;\n}\n"

/***/ },

/***/ 677:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 678:
/***/ function(module, exports) {

module.exports = "#del-dialog-header {\n  margin-bottom: 30px;\n}\n\n.row-centered {\n  text-align: center;\n}\n\n.col-centered {\n  display: inline-block;\n  float: none;\n  text-align: left;\n  margin-right: -4px;\n}\n\n.list-group {\n  margin-top: 2em;\n}\n\n.list-group {\n  padding-left: 14px;\n}\n\na.btn {\n  width: 8em;\n}\n\n.section {\n  padding-right: 4vw;\n}\n\n#reminder {\n  max-width: 14em;\n  float: right;\n}\n\n#reminder-group {\n  margin-top: 1em;\n}\n\n#edit-reminder {\n  margin-bottom: 1em;\n}\n\na.disabled {\n  pointer-events: none;\n}\n"

/***/ },

/***/ 679:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>About</h3>\n</div><div class=\"container\">\n  <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>\n  <div style=\"height: 10em\"></div>\n</div>\n"

/***/ },

/***/ 680:
/***/ function(module, exports) {

module.exports = "<div class=\"navbar navbar-default navbar-static-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-ex-collapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/todos\"><span>{{title}}</span></a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"navbar-ex-collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!authService.loggedIn()\"\n            (click)=\"authService.login()\">\n          <a role=\"button\">Log In</a>\n        </li>\n        <li *ngIf=\"authService.loggedIn()\"\n            (click)=\"authService.logout()\">\n          <a role=\"button\">Log Out</a>\n        </li>\n        <li *ngIf=\"authService.loggedIn()\"\n            routerLinkActive=\"active\">\n          <a routerLink=\"/todos\">Todos</a>\n        </li>\n        <li *ngIf=\"!authService.loggedIn()\"\n            routerLinkActive=\"active\">\n          <a routerLink=\"/home\">Home</a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/about\">About</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n\n<footer class=\"section section-primary\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <h1>Contact Us!</h1>\n        <p>ievgen@lorem.ipsum</p>\n      </div>\n      <div class=\"col-sm-6\">\n        <p class=\"text-info text-right\">\n          <br>\n          <br>\n        </p>\n        <div class=\"row\">\n          <div class=\"col-md-12 hidden-lg hidden-md hidden-sm text-left\">\n            <a href=\"https://www.facebook.com/profile.php?id=100004862738922\">\n              <i class=\"fa fa-3x fa-fw fa-facebook text-inverse\"></i>\n            </a>\n            <a href=\"https://github.com/deugene\">\n              <i class=\"fa fa-3x fa-fw fa-github text-inverse\"></i>\n            </a>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12 hidden-xs text-right\">\n            <a href=\"https://www.facebook.com/profile.php?id=100004862738922\">\n              <i class=\"fa fa-3x fa-fw fa-facebook text-inverse\"></i>\n            </a>\n            <a href=\"https://github.com/deugene\">\n              <i class=\"fa fa-3x fa-fw fa-github text-inverse\"></i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ },

/***/ 681:
/***/ function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"dialogOptions.visible\" class=\"dialog\">\n   <ng-content></ng-content>\n</div>\n<div *ngIf=\"dialogOptions.visible\" class=\"overlay\" (click)=\"cancel()\"></div>\n"

/***/ },

/***/ 682:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n   <div class=\"row\">\n     <div class=\"col-md-12\">\n       <h1 class=\"text-center\">Welcome to the Simple Todo App!</h1>\n     </div>\n   </div>\n   <div class=\"row\">\n     <div class=\"col-md-12 text-center\">\n       <a class=\"btn btn-lg btn-primary\"\n          (click)=\"authService.login()\">\n        Sign up!\n      </a>\n     </div>\n   </div>\n </div>\n"

/***/ },

/***/ 683:
/***/ function(module, exports) {

module.exports = "<form role=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n\n    <div class=\"input-group\" [formGroup]=\"todoForm\">\n      <input type=\"text\"\n              class=\"form-control\"\n              placeholder=\"title\"\n              formControlName=\"todo\"\n              required>\n      <span class=\"input-group-btn\">\n        <a class=\"btn btn-default\"\n            [class.disabled]=\"!todoForm.valid\"\n            (click)=\"onSubmit();\">\n          New Todo\n        </a>\n      </span>\n    </div>\n    <div *ngIf=\"formErrors.todo\" class=\"alert alert-danger\">\n      {{ formErrors.todo }}\n    </div>\n\n    <div class=\"input-group text-right\" id=\"reminder-group\" [formGroup]=\"todoForm\">\n      <input [type]=\"reminderInputType\"\n              class=\"form-control\"\n              id=\"reminder\"\n              [min]=\"minDateTime()\"\n              formControlName=\"reminder\">\n      <span class=\"input-group-btn\">\n        <a class=\"btn btn-default\"\n            (click)=\"toggleReminderInputType()\">\n          Set Reminder\n        </a>\n      </span>\n    </div>\n    <div *ngIf=\"formErrors.reminder\" class=\"alert alert-danger\">\n      {{ formErrors.reminder }}\n    </div>\n  </div>\n</form>\n"

/***/ },

/***/ 684:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>My Todos</h3>\n</div>\n<div class=\"section\">\n  <div class=\"container\">\n\n    <div *ngIf=\"!showDialog.visible\">\n      <form role=\"form\" (ngSubmit)=\"create(); todoForm.reset()\"\n            #todoForm=\"ngForm\">\n        <div class=\"form-group\">\n\n          <div class=\"input-group\">\n            <input type=\"text\"\n                   class=\"form-control\"\n                   placeholder=\"title\"\n                   pattern=\".{3,100}\"\n                   required\n                   [(ngModel)]=\"newTodo.todo\" name=\"title\"\n                   #title=\"ngModel\">\n            <span class=\"input-group-btn\">\n              <a class=\"btn btn-default\"\n                 [class.disabled]=\"!todoForm.valid\"\n                 (click)=\"create(); todoForm.reset()\">\n                New Todo\n              </a>\n            </span>\n          </div>\n          <div [hidden]=\"title.valid || title.pristine\"\n               class=\"alert alert-danger\">\n            Title is required and it can contain from 3 to 100 characters.\n          </div>\n\n          <div class=\"input-group text-right\" id=\"reminder-group\">\n            <input [type]=\"reminderInputType\"\n                   class=\"form-control\"\n                   id=\"reminder\"\n                   [min]=\"minDateTime()\"\n                   [(ngModel)]=\"newTodo.reminder\" name=\"reminder\"\n                   #reminder=\"ngModel\">\n            <span class=\"input-group-btn\">\n              <a class=\"btn btn-default\"\n                 (click)=\"toggleReminderInputType()\">\n                Set Reminder\n              </a>\n            </span>\n          </div>\n        </div>\n      </form>\n    </div>\n\n  </div>\n  <div class=\"list-group container\" [dragula]=\"'todos-list-bag'\">\n    <li *ngFor=\"let todo of todos\"\n        class=\"list-group-item clearfix\"\n        [id]=\"todo._id\"\n        (click)=\"update(todo); $event.stopPropagation()\"\n        role=\"button\">\n      <input type=\"checkbox\" [checked]=\"todo.done\">\n      <span>{{todo.todo}}</span>\n      <span class=\"pull-right\">\n        <span *ngIf=\"todo.reminder\">\n          {{humanReadableDate(todo.reminder)}}\n        </span>\n        <span>\n          <button class=\"btn btn-xs btn-primary\"\n                  (click)=\"showModal(todo, 'edit'); $event.stopPropagation()\">\n            Edit\n          </button>\n        </span>\n        <span>\n          <button class=\"btn btn-xs btn-danger\"\n                  (click)=\"showModal(todo, 'delete'); $event.stopPropagation()\">\n            Delete\n          </button>\n        </span>\n      </span>\n    </li>\n  </div>\n</div>\n\n<div *ngIf=\"showDialog\">\n  <app-dialog [(dialogOptions)]=\"showDialog\" #dialog>\n\n    <div *ngIf=\"showDialog.type === 'delete'\">\n      <div class=\"text-center\">\n        <h2 id=\"del-dialog-header\">Are you shure?</h2>\n        <div class=\"container-fluid\">\n          <div class=\"row row-centered\">\n            <div class=\"col-md-4 col-centered\">\n              <button class=\"btn-block btn btn-lg btn-default\"\n                      (click)=\"dialog.cancel()\">\n                No\n              </button>\n            </div>\n            <div class=\"col-md-4 col-centered\">\n              <button class=\"btn-block btn btn-lg btn-danger\"\n                      (click)=\"delete(); dialog.cancel()\">\n                Yes\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"showDialog.type === 'edit'\">\n      <div class=\"container-fluid\">\n        <div class=\"text-center\">\n          <h2>Edit task</h2>\n        </div>\n\n        <form role=\"form\" (ngSubmit)=\"update(); dialog.cancel()\"\n              #todoForm=\"ngForm\">\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"task\">Todo: </label>\n            <input type=\"text\"\n                   class=\"form-control\"\n                   id=\"task\"\n                   placeholder=\"title\"\n                   pattern=\".{3,100}\"\n                   required\n                   [(ngModel)]=\"selectedTodo.todo\" name=\"title\"\n                   #title=\"ngModel\">\n\n            <div [hidden]=\"title.valid || title.pristine\"\n                class=\"alert alert-danger\">\n              Title is required and it can contain from 3 to 100 characters.\n            </div>\n\n            <label class=\"control-label\" for=\"edit-reminder\">Reminder: </label>\n            <input type=\"datetime-local\"\n                  class=\"form-control\"\n                  id=\"edit-reminder\"\n                  [min]=\"minDateTime()\"\n                  [(ngModel)]=\"selectedTodo.reminder\" name=\"reminder\"\n                  #reminder=\"ngModel\">\n            <div class=\"text-right\">\n              <button class=\"btn btn-default\"\n                      (click)=\"cancel(); dialog.cancel()\">\n                Cancel\n              </button>\n              <button class=\"btn btn-primary\"\n                      type=\"submit\"\n                      [disabled]=\"!todoForm.valid\">\n                Save\n              </button>\n            </div>\n          </div>\n        </form>\n\n      </div>\n    </div>\n\n  </app-dialog>\n</div>\n\n<simple-notifications [options]=\"notificationsOptions\"\n                      (onDestroy)=\"onDestroy($event.id)\">\n</simple-notifications>\n"

/***/ },

/***/ 706:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(392);


/***/ },

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
        this.auth0Config();
    }
    AuthService.prototype.auth0Config = function () {
        var _this = this;
        this.http.get('api/config')
            .toPromise()
            .then(function (res) {
            var result = res.json();
            if (result.err) {
                throw new Error(result.err);
            }
            _this.lock = new Auth0Lock(result.clientId, result.domain);
            _this.lock.on('authenticated', function (authResult) {
                _this.idToken = authResult.idToken;
                localStorage.setItem('id_token', authResult.idToken);
                _this.getUserProfile().then(function () { return _this.router.navigate(['todos']); });
            });
        })
            .catch(function () { return console.error('auth0 config error'); });
    };
    AuthService.prototype.getUserProfile = function () {
        var _this = this;
        return new Promise(function (res) {
            var prof = JSON.parse(localStorage.getItem('profile'));
            if (prof) {
                res(prof);
                return;
            }
            _this.lock.getProfile(_this.idToken, function (err, profile) {
                if (err) {
                    throw new Error(err.message);
                }
                localStorage.setItem('profile', JSON.stringify(profile));
                res(profile);
            });
        });
    };
    AuthService.prototype.login = function () {
        this.lock.show();
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
        this.idToken = null;
        this.router.navigate(['home']);
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token', localStorage.getItem('id_token') || this.idToken);
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=/home/eugenes/webdev/simple-todo/src/auth.service.js.map

/***/ }

},[706]);
//# sourceMappingURL=main.bundle.map