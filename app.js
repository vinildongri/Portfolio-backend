import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();

// app.use(cors({
//     origin: "https://vinilportfolio.com" 
// }));

app.use(cors({
    origin: process.env.FRONTEND_URL, 
    credentials: true,
}));

// app.use(cors({
//   origin: process.env.FRONTEND_URL,
//   methods: [ "POST"],
//   credentials: true
// }));

// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL,
//     methods: ["GET", "POST", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true,
//   })
// );

// app.options("*", cors());



app.use(express.json());

app.use("/api/v1", contactRoutes);

app.listen(process.env.PORT, () => {
    console.log(
        `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`
    );
});








// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import contactRoutes from "./routes/contact.js";

// dotenv.config();

// const app = express();

// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL,
//     methods: ["POST", "GET", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true,
//   })
// );

// app.use(express.json());
// app.use("/api/v1", contactRoutes);

// /* ✅ LOCAL ONLY */
// if (process.env.NODE_ENV !== "production") {
//   app.listen(process.env.PORT, () => {
//     console.log(
//       `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`
//     );
//   });
// }

// /* ✅ VERCEL */
// export default app;
