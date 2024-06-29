// index.js
import express from 'express';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import MongoDB from './db.js'; 
// index.js
import 'dotenv/config';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cookieParser());


const port = 3000;




MongoDB().then((connected) => {
  if (connected) {
    app.get('/', (req, res) => {
      res.send('Hello World');
    });
    app.use('/api/user', userRouter);
    app.use('/api/auth/',authRouter);
    app.use('/api/listing',listingRouter);
    
    app.use((err,req,res,next)=>{
      const statusCode=err.statusCode||500;
      const  message=err.message||"internal server error";
      res.status(statusCode).json({
        success:false,
        statusCode,
        message,
      });
    })
    
app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  } else {
    console.error('Failed to connect to MongoDB. Exiting...');
    process.exit(1);
  }
});

