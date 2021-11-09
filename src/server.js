"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import "dotenv/config";
const app_1 = require("./app");
app_1.serverHttp.listen(process.env.PORT || 4000, () => console.log(`🚀 Server is running on PORT 4000`));
