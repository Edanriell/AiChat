// import { createInMemoryApp } from "./controllers/main";
// import { createSQLApp } from "./controllers/main";

import { createORMApp } from "./controllers/main";

const app = createORMApp();

// const app = createSQLApp();
// const app = createInMemoryApp();

export default app;
