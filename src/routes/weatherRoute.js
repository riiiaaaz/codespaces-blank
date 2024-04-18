"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const weatherController_js_1 = require("../controllers/weatherController.js");
const validator_js_1 = require("../middleware/validator.js");
const router = express_1.default.Router();
router.get("/:city", validator_js_1.validateCityName, weatherController_js_1.getWeatherData);
exports.default = router;
