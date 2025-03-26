<script lang="ts">
	import "../styles/header.css";

	import {navigate} from "svelte-routing";
	import {_, locale} from "svelte-i18n";

	import {authToken} from "../stores/auth";

	const name = authToken.getPayload()?.name || "User";
	function logout() {
		authToken.remove();
		navigate("/login");
	}
</script>

<div class="header">
	<div class="user-name">{name}</div>
	<div class="locale">
		<select bind:value={$locale}>
			<option value="en-US">English</option>
			<option value="uk-UA">Ukrainian</option>
		</select>
	</div>
	<button class="logout-button" on:click={logout}>{$_("logout")}</button>
</div>
