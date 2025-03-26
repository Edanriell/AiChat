<script lang="ts">
	import "../styles/chat.css";

	import { onMount } from "svelte";
	import { navigate } from "svelte-routing";

	import ChatListSideBar from "../components/ChatListSideBar.svelte";
	import ChatDetails from "../components/ChatDetails.svelte";
	import Header from "../components/Header.svelte";

	import { authToken } from "../stores/auth";

	export let chatId: string | null;

	onMount(() => {
		if (!$authToken) {
			navigate("/register");
		}
	});
</script>

<div>
	<Header></Header>
	<div class="container">
		<div class="chat-list-container">
			<ChatListSideBar {chatId} />
		</div>
		<div class="chat-container">
			{#if chatId}
				<ChatDetails {chatId} />
			{/if}
		</div>
	</div>
</div>
