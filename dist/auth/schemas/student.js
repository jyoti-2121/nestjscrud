"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentSchema = exports.student = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let student = exports.student = class student {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], student.prototype, "first_name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], student.prototype, "last_name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], student.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean }),
    __metadata("design:type", Boolean)
], student.prototype, "is_deleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, unique: [true, "Email already exist!"] }),
    __metadata("design:type", String)
], student.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], student.prototype, "password", void 0);
exports.student = student = __decorate([
    (0, mongoose_1.Schema)({ collection: 'student', timestamps: true })
], student);
exports.studentSchema = mongoose_1.SchemaFactory.createForClass(student);
//# sourceMappingURL=student.js.map