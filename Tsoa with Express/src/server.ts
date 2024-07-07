import configs from './utils/config';
import app from './app';
import connectDB from './database/connection';


app.listen(configs.port, () => {
  console.log(`Server is running on port ${configs.port}`);
});
connectDB()
