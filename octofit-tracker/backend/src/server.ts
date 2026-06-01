import app from "./app.js";

const PORT = process.env.PORT ?? 8000;

app.listen(PORT, () => {
  console.log(`OctoFit Tracker backend listening on http://localhost:${PORT}`);
});
