1.pnpm i 
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
  