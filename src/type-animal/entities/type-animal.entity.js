"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeAnimal = void 0;
var typeorm_1 = require("typeorm");
var animal_entity_1 = require("src/animal/entities/animal.entity");
var medical_history_entity_1 = require("src/medical-history/entities/medical-history.entity");
var TypeAnimal = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _animals_decorators;
    var _animals_initializers = [];
    var _animals_extraInitializers = [];
    var _medical_history_decorators;
    var _medical_history_initializers = [];
    var _medical_history_extraInitializers = [];
    var TypeAnimal = _classThis = /** @class */ (function () {
        function TypeAnimal_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.name = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.animals = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _animals_initializers, void 0));
            this.medical_history = (__runInitializers(this, _animals_extraInitializers), __runInitializers(this, _medical_history_initializers, void 0));
            __runInitializers(this, _medical_history_extraInitializers);
        }
        return TypeAnimal_1;
    }());
    __setFunctionName(_classThis, "TypeAnimal");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _name_decorators = [(0, typeorm_1.Column)()];
        _animals_decorators = [(0, typeorm_1.OneToMany)(function () { return animal_entity_1.Animal; }, function (animal) { return animal.type_animal; })];
        _medical_history_decorators = [(0, typeorm_1.OneToMany)(function () { return medical_history_entity_1.MedicalHistory; }, function (medical_history) { return medical_history.type_animal; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _animals_decorators, { kind: "field", name: "animals", static: false, private: false, access: { has: function (obj) { return "animals" in obj; }, get: function (obj) { return obj.animals; }, set: function (obj, value) { obj.animals = value; } }, metadata: _metadata }, _animals_initializers, _animals_extraInitializers);
        __esDecorate(null, null, _medical_history_decorators, { kind: "field", name: "medical_history", static: false, private: false, access: { has: function (obj) { return "medical_history" in obj; }, get: function (obj) { return obj.medical_history; }, set: function (obj, value) { obj.medical_history = value; } }, metadata: _metadata }, _medical_history_initializers, _medical_history_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TypeAnimal = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TypeAnimal = _classThis;
}();
exports.TypeAnimal = TypeAnimal;
