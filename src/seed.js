"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@nestjs/core");
var common_1 = require("@nestjs/common");
var seeders_module_1 = require("./seeders/seeders.module");
var seeders_service_1 = require("./seeders/seeders.service");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function () {
        var appContext, logger, seeder, error_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Starting seeder...');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 9, , 10]);
                    return [4 /*yield*/, core_1.NestFactory.createApplicationContext(seeders_module_1.SeedersModule)];
                case 2:
                    appContext = _a.sent();
                    console.log('Application context created.');
                    logger = appContext.get(common_1.Logger);
                    seeder = appContext.get(seeders_service_1.SeedersService);
                    console.log('Seeder instance retrieved.');
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, 6, 8]);
                    return [4 /*yield*/, seeder.seed()];
                case 4:
                    _a.sent();
                    logger.debug('Seeding complete!');
                    return [3 /*break*/, 8];
                case 5:
                    error_1 = _a.sent();
                    logger.error('Seeding failed!', error_1);
                    throw error_1;
                case 6:
                    console.log('Closing application context...');
                    return [4 /*yield*/, appContext.close()];
                case 7:
                    _a.sent();
                    console.log('Application context closed.');
                    return [7 /*endfinally*/];
                case 8: return [3 /*break*/, 10];
                case 9:
                    error_2 = _a.sent();
                    console.error('Failed to bootstrap the seeder application', error_2);
                    process.exit(1); // Termina el proceso con un código de error
                    return [3 /*break*/, 10];
                case 10: return [2 /*return*/];
            }
        });
    });
}
bootstrap()
    .then(function () {
    console.log('Seeder script finished execution.');
})
    .catch(function (error) {
    console.error('Seeder script encountered an error:', error);
});
