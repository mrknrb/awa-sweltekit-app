<script lang="ts">
	import { goto } from '$app/navigation';

	import {
		getAuth,
		signInWithEmailAndPassword,
		createUserWithEmailAndPassword
	} from 'firebase/auth';
	import { authStoreReducers } from '../user/Store/authStore';

	const auth = getAuth();

	let email = '';
	let password = '';
	let loginDataError = '';
</script>

<div class="login">
	<div class="card">
		<div class="card-body login-form">
			<h5 class="card-title">Login</h5>
			<form
				on:submit|preventDefault={() => {
					authStoreReducers.login(email, password);
				}}
			>
				<div class="mb-3">
					<label for="emailInput" class="form-label">Email address</label>
					<input
						bind:value={email}
						type="email"
						class="form-control"
						id="emailInput"
						aria-describedby="emailHelp"
						placeholder="Email Address"
					/>
				</div>
				<div class="mb-3">
					<label for="passInput" class="form-label">Password</label>
					<input
						bind:value={password}
						type="password"
						class="form-control"
						id="passInput"
						placeholder="Password"
					/>
				</div>
				<button type="submit" class="btn btn-primary">Submit</button>
			</form>
			<p class="float-end mt-3">
				{loginDataError}
			</p>
			<p class="float-end mt-3">
				Not a user? <a href="/signup" class="card-link">Sign Up</a>
			</p>
		</div>
	</div>
</div>
