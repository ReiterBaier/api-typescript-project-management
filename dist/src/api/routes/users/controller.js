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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthentication = void 0;
var routing_controllers_1 = require("routing-controllers");
var service_1 = require("./service");
var UserAuthentication = /** @class */ (function () {
    function UserAuthentication() {
    }
    UserAuthentication.prototype.postUser = function (username, password) {
        return (0, service_1.findOne)(username, password);
    };
    __decorate([
        (0, routing_controllers_1.Post)('/auth'),
        (0, routing_controllers_1.HttpCode)(200),
        (0, routing_controllers_1.OnUndefined)(400),
        __param(0, (0, routing_controllers_1.HeaderParam)('username')),
        __param(1, (0, routing_controllers_1.HeaderParam)('password')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], UserAuthentication.prototype, "postUser", null);
    UserAuthentication = __decorate([
        (0, routing_controllers_1.JsonController)('/suportfy')
    ], UserAuthentication);
    return UserAuthentication;
}());
exports.UserAuthentication = UserAuthentication;
