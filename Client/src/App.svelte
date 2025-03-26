<script>
	import { Route, Router } from "svelte-routing";

	import Register from "./routes/Register.svelte";
	import Login from "./routes/Login.svelte";
	import Chat from "./routes/Chat.svelte";
</script>

<Router>
	<Route component={Register} path="/register" />
	<Route component={Login} path="/login" />
	<Route>
		<Chat chatId={null} />
	</Route>
	<Route let:params path="/:id">
		<Chat chatId={params.id} />
	</Route>
</Router>
