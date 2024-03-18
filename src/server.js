"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.use(routes_1.default);
mongoose_1.default
    .connect("mongodb+srv://admin:admin@12@clustertodo.3jmwegu.mongodb.net/", 
// "mongodb+srv://admin:admin@12@clustertodo.3jmwegu.mongodb.net/?retryWrites=true&w=majority&appName=ClusterTODO",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) // Suppressing error with 'as any'
    .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch((err) => console.error(err));
