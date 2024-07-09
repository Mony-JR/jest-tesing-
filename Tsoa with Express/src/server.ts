// import configs from './utils/config';
import app from './app';
import connectDB from './database/connection';

function running(){
  connectDB()
  app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
}

running()
