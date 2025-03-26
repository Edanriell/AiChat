<script lang="ts">
	import "../styles/chatPopup.css";

	import axios from "axios";

	import { API_HOST } from "../constants";

	export let onCreate: (newChatId: string) => void;
	export let onClose: () => void;

	let chatName = "";
	let errorMessage: string | null = null;

	async function createChat() {
		try {
			const response = await axios.post(`${API_HOST}/api/v1/chat/`, {
				name: chatName
			});
			onCreate(response.data.data.id);
		} catch (error) {
			console.error("Error creating chat:", error);
			errorMessage = "Failed to create chat. Please try again later.";
		}
	}
</script>

<div class="popup">
	<div
		class="close-button"
		on:click={onClose}
		on:keydown|preventDefault={(e) => e.key === "Enter" && onClose()}
		role="button"
		tabindex="0"
	>
		X
	</div>
	{#if errorMessage}
		<div class="error">{errorMessage}</div>
	{/if}
	<input bind:value={chatName} placeholder="Enter chat name" type="text" />
	<button disabled={!chatName.length} on:click={createChat}>Create</button>
</div>
