import { Hono } from 'hono'
import { auth } from 'hono/utils/basic-auth';

const app = new Hono()

//hono middleware 
async function authMiddleware(c: any, next: any){
  if(c.req.header("Authorization")){
    await next()
  } else {
    return c.next("You dont have acces");
  }
}

app.use(authMiddleware)
// this will work with time whenever we make new folder or just oprn only this at a time
app.post('/', async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

export default app
