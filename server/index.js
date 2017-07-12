/**
 * Created by kevin on 7/12/17.
 */
import express from 'express'

const PORT = 8080;
const app = express();

app.listen(PORT, console.log(`server is running on http://localhost:${PORT}`));