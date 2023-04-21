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
</script>

<div class="login">
	<div class="card">
		<div class="card-body login-form">
			<h5 class="card-title">Sign Up!</h5>
			<form
				on:submit|preventDefault={() => {
					authStoreReducers.signup(email, password);
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
		</div>
	</div>
</div>
