1. pnpm i 
2. Delte docs appp
3. Initialzed package.json in both http-server and ws-backend ...npm init -y.
4. added tsconfig.json and "extends":"@repo/typescript-config/base.json" in both http and ws
5. added depemcies in both http & ws package.json "dependencies": {
    "@repo/typescript-config":"workspace:*" 
    
  },/** pnpm thats why workspace , * in npm*/

  6. pnpm i to fetch changes made in package.json

  7. Added a build, dev and start script to both the projects 
  8. Update the turbo-config in both the projects(Optional){todo}
  9. Initiaze a http server , initialize a websocket server
  10. pnpm add express @types/express in http and pnpm add ws @types/ws in we-backend
  11. Write the signup, signin ,create-room endpoint
  12. write the middlewares that decode the token and gate the create-room ep
  
  13. Decode the token in the websokcet server as well .send the token to the websockets server in query param for now
  14. Add a common package where we add the zod schema and the JWT_SECRET

  15. Create a db package
  16. Using the db package in http-layer
  17. Defining the schema in shcema.prisma
  18. Complete the http Backend
  

