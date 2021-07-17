import serverConfig from './configExpress';

const application = serverConfig();
const port = process.env.PORT || 3030;

application.listen(port, () => console.log(`Server Running on port ${port}`));