import app from "./index";
import { PORT } from "./config/appConfig";
import ConnectMongoose from "./config/MongoDB";


app.listen(PORT, () => {
  console.log(`Server Is Listening On Port:${PORT}`);
});
ConnectMongoose();

