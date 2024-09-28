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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLayoutResolver = void 0;
// src/resolvers/customLayoutResolver.ts
const type_graphql_1 = require("type-graphql");
const customLayout_1 = require("../entities/customLayout");
const typeorm_1 = require("typeorm");
let CustomLayoutResolver = class CustomLayoutResolver {
    customLayouts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, typeorm_1.getRepository)(customLayout_1.CustomLayout).find();
        });
    }
    createCustomLayout(customerId, layout) {
        return __awaiter(this, void 0, void 0, function* () {
            const customLayout = (0, typeorm_1.getRepository)(customLayout_1.CustomLayout).create({ customer: { id: customerId }, layout });
            return yield (0, typeorm_1.getRepository)(customLayout_1.CustomLayout).save(customLayout);
        });
    }
};
exports.CustomLayoutResolver = CustomLayoutResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [customLayout_1.CustomLayout]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CustomLayoutResolver.prototype, "customLayouts", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => customLayout_1.CustomLayout),
    __param(0, (0, type_graphql_1.Arg)('customerId')),
    __param(1, (0, type_graphql_1.Arg)('layout')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CustomLayoutResolver.prototype, "createCustomLayout", null);
exports.CustomLayoutResolver = CustomLayoutResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], CustomLayoutResolver);
