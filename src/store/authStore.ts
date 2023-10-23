import { auth, googleProvider } from '$lib/firebase/firebase';
import {
	signInWithEmailAndPassword,
	signInWithPopup,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	confirmPasswordReset,
	updatePassword,
	updateEmail,
	fetchSignInMethodsForEmail
} from 'firebase/auth';
import { writable } from 'svelte/store';
import type { User } from 'firebase/auth';
import { goto } from '$app/navigation';

export const authStore = writable<{
	isLoading: boolean;
	currentUser: User | null;
}>({
	isLoading: true,
	currentUser: null
});

export const authHandlers = {
	login: async (email: string, password: string) => {
		await signInWithEmailAndPassword(auth, email, password);
	},

	signup: async (email: string, password: string) => {
		try {
			const signInMethods = await fetchSignInMethodsForEmail(auth, email);
			console.log(signInMethods);

			if (signInMethods.includes('google.com')) {
				alert('Please log in with Google');
			} else {
				await createUserWithEmailAndPassword(auth, email, password);
			}
		} catch (error) {
			console.error('Error during sign up:', error);
		}
	},

	logout: async () => {
		await auth.signOut();
		goto('/');
	},

	loginWithGoogle: async () => {
		await signInWithPopup(auth, googleProvider);
		goto('/main');
	},

	resetPassword: async (email: string) => {
		await sendPasswordResetEmail(auth, email)
			.then(() => {})
			.catch((error) => {
				console.log(error);
			});
	},

	confirmThePasswordReset: async (oobCode: string, newPassword: string) => {
		if (oobCode && newPassword) {
			try {
				await confirmPasswordReset(auth, oobCode, newPassword);
				goto('/');
			} catch (error) {
				console.log(error);
			}
		}
	},

	updateEmail: async (email: string) => {
		const user = auth.currentUser;
		if (user) {
			await updateEmail(user, email);
		}
	},

	updatePassword: async (password: string) => {
		const user = auth.currentUser;
		if (user) {
			await updatePassword(user, password);
		}
	}
};
