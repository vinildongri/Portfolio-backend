import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();

// --- THE CORS BLOCK ---
const allowedOrigins = [
    "https://portfolio-frontend-nine-indol.vercel.app",
    "http://localhost:3000",
    "http://localhost:5173"
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
}));
// --- END CORS BLOCK ---

// app.options('*', cors());  <-- I REMOVED THIS LINE TO FIX THE CRASH

app.use(express.json());
app.use("/api/v1", contactRoutes);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server started in ${process.env.NODE_ENV} mode`);
});