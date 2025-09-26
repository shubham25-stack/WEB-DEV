
export interface Env  {

}

// export default {
// 	async fetch(request, env, ctx): Promise<Response> {
// 		return new Response('Hello World!');
// 	},
// } satisfies ExportedHandler<Env>;


//http liberary use of node js

export default {
	async fetch(request: Request, env:Env,ctx:ExecutionContext):Promise <Response> {
		console.log(request.body);
		console.log(request.headers);
		console.log(request.method);
		// user,/api/v1/

		if(request.method == "GET"){
			return Response.json({
				message:"You sent a get request"
			});
		} else {
			return Response.json({
				message: "You did not send a get request"
			});
		}
	},
};