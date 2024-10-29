import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { log } from "console";

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = Number(process.env.PORT) || 3000;

const server = new ApolloServer({
  typeDefs: `type Query {work:String}`,
  resolvers: { Query: { work: () => "hello World" } },
});

startStandaloneServer(server, {
  listen: {
    port,
  },
})
  .then(() => {
    console.log("server is running at port:" + port);
  })
  .catch(() => {
    console.error("The error occur");
  });

// const app = express();

//  app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(cors({origin:' * ',credentials:true}));
// app.use(morgan('dev'))

//   app.get('/', (req, res) => {
//     res.send('Hello, World!');
//   });

//   // your routes here

//   app.get("*", (req, res) => {
//     res.status(404).json({
//       success: false,
//       message: 'Page not found'
//     });
//   });

//   app.use(errorMiddleware);

// app.listen(port, () => console.log('Server is working on Port:'+port+' in '+envMode+' Mode.'));
